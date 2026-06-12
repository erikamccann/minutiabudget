#!/usr/bin/env node
/**
 * md-to-cv-html.mjs
 * Converts tailored markdown CVs to ATS-optimized HTML using cv-template.html
 * Usage: node career-ops/md-to-cv-html.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Apply inline markdown bold (**text**) to already-escaped HTML text
function applyBold(htmlStr) {
  return htmlStr.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

function parseMarkdownCV(md) {
  const result = {
    name: 'Erika McCann',
    phone: '(587) 893-2394',
    email: 'erikarmccann@icloud.com',
    linkedin: 'linkedin.com/in/erikarmccann',
    location: 'Calgary, AB, Canada',
    summary: '',
    experience: [],
    education: [],
    skills: [],
  };

  // Summary
  const sumM = md.match(/## Professional Summary\r?\n\r?\n([\s\S]+?)(?=\r?\n---|\r?\n## )/);
  if (sumM) result.summary = sumM[1].trim();

  // Work Experience
  const expM = md.match(/## Work Experience\r?\n\r?\n([\s\S]+?)(?=\r?\n---\r?\n|\r?\n## Education|\r?\n## Skills|$)/);
  if (expM) result.experience = parseExperience(expM[1]);

  // Education
  const eduM = md.match(/## Education\r?\n\r?\n([\s\S]+?)(?=\r?\n---|\r?\n## |$)/);
  if (eduM) {
    result.education = eduM[1].split('\n')
      .filter(l => l.trim().startsWith('- '))
      .map(line => {
        const m = line.match(/- \*\*([^*]+)\*\*\s+[—–\-]+\s+(.+)/);
        if (m) return { degree: m[1].trim(), institution: m[2].trim() };
        return { degree: line.replace(/^- /, '').replace(/\*\*/g, '').trim(), institution: '' };
      });
  }

  // Skills
  const skillM = md.match(/## Skills\r?\n\r?\n([\s\S]+?)(?=\r?\n---|\r?\n## |$)/);
  if (skillM) {
    result.skills = skillM[1].split('\n')
      .filter(l => l.trim().startsWith('- '))
      .map(l => l.replace(/^- /, '').trim());
  }

  return result;
}

function parseExperience(text) {
  const jobs = [];
  const blocks = text.split(/(?=^### )/m).filter(b => b.trim());

  for (const block of blocks) {
    const lines = block.split('\n');
    const firstLine = lines[0].trim();

    // "### Company Name — Location" or "### Company Name"
    const compM = firstLine.match(/^### (.+?)(?:\s+[—–]\s+(.+))?$/);
    if (!compM) continue;

    const company = compM[1].trim();
    const location = compM[2]?.trim() || '';

    const roles = [];
    let currentTitle = null;
    let currentPeriod = null;
    let currentBullets = [];
    let waitingForDate = false;

    for (let i = 1; i < lines.length; i++) {
      const t = lines[i].trim();
      if (!t || t === '---') continue;

      // Skip italic-only lines like *Clients: ...*
      if (t.startsWith('*') && !t.startsWith('**') && t.endsWith('*')) continue;

      // Role line: **Title** or **Title** | Period
      if (t.startsWith('**') && !t.startsWith('***')) {
        if (currentTitle !== null) {
          roles.push({ title: currentTitle, period: currentPeriod || '', bullets: currentBullets });
          currentBullets = [];
        }
        // Inline date? "**Title** | Period"
        const inlineM = t.match(/^\*\*(.+?)\*\*\s+\|\s+(.+)$/);
        if (inlineM) {
          currentTitle = inlineM[1].trim();
          currentPeriod = inlineM[2].trim();
          waitingForDate = false;
        } else {
          currentTitle = t.replace(/\*\*/g, '').trim();
          currentPeriod = null;
          waitingForDate = true;
        }
        continue;
      }

      // Date line (after role title, before bullets)
      if (waitingForDate && currentPeriod === null && t.match(/\d{4}/) && !t.startsWith('-')) {
        currentPeriod = t;
        waitingForDate = false;
        continue;
      }

      // Bullet
      if (t.startsWith('- ') && currentTitle !== null) {
        currentBullets.push(t.slice(2).trim());
      }
    }

    if (currentTitle !== null) {
      roles.push({ title: currentTitle, period: currentPeriod || '', bullets: currentBullets });
    }

    roles.forEach((role, idx) => {
      jobs.push({
        company: idx === 0 ? company : '',
        location: idx === 0 ? location : '',
        role: role.title,
        period: role.period,
        bullets: role.bullets,
        isSubRole: idx > 0,
      });
    });
  }

  return jobs;
}

function buildExperienceHTML(jobs) {
  return jobs.map(job => {
    const lines = ['<div class="job">'];

    if (!job.isSubRole) {
      lines.push('  <div class="job-header">');
      lines.push(`    <span class="job-company">${escHtml(job.company)}</span>`);
      if (job.period) lines.push(`    <span class="job-period">${escHtml(job.period)}</span>`);
      lines.push('  </div>');
      const roleText = job.location
        ? `${escHtml(job.role)} &middot; ${escHtml(job.location)}`
        : escHtml(job.role);
      lines.push(`  <div class="job-role">${roleText}</div>`);
    } else {
      lines.push('  <div class="job-header">');
      lines.push(`    <span class="job-role" style="margin:0">${escHtml(job.role)}</span>`);
      if (job.period) lines.push(`    <span class="job-period">${escHtml(job.period)}</span>`);
      lines.push('  </div>');
    }

    if (job.bullets.length > 0) {
      lines.push('  <ul>');
      job.bullets.forEach(b => lines.push(`    <li>${applyBold(escHtml(b))}</li>`));
      lines.push('  </ul>');
    }

    lines.push('</div>');
    return lines.join('\n');
  }).join('\n');
}

function buildEducationHTML(education) {
  return education.map(e => [
    '<div class="edu-item">',
    '  <div class="edu-header">',
    `    <span class="edu-title">${escHtml(e.degree)}</span>`,
    '  </div>',
    e.institution ? `  <div class="edu-desc"><span class="edu-org">${escHtml(e.institution)}</span></div>` : '',
    '</div>',
  ].filter(Boolean).join('\n')).join('\n');
}

function buildSkillsHTML(skills) {
  const items = skills.map(s => `  <span class="skill-item">${escHtml(s)}</span>`).join('\n');
  return `<div class="skills-grid">\n${items}\n</div>`;
}

function buildCompetenciesHTML(skills) {
  return skills.map(s => `<span class="competency-tag">${escHtml(s)}</span>`).join('\n      ');
}

function buildFullHTML(cv, template) {
  let html = template;

  // 1. Remove portfolio block (while placeholders still present)
  html = html.replace(
    /[ \t]*<span class="separator">\|<\/span>\n[ \t]*<a href="\{\{PORTFOLIO_URL\}\}">\{\{PORTFOLIO_DISPLAY\}\}<\/a>\n/,
    ''
  );

  // 2. Remove Projects, Certifications, and duplicate Skills sections
  html = html.replace(/[ \t]*<!-- PROJECTS -->[\s\S]*?\{\{PROJECTS\}\}\n[ \t]*<\/div>\n/g, '');
  html = html.replace(/[ \t]*<!-- CERTIFICATIONS -->[\s\S]*?\{\{CERTIFICATIONS\}\}\n[ \t]*<\/div>\n/g, '');
  html = html.replace(/[ \t]*<!-- SKILLS -->[\s\S]*?\{\{SKILLS\}\}\n[ \t]*<\/div>\n/g, '');

  // 3. Replace all placeholders
  const linkedinUrl = cv.linkedin.startsWith('http') ? cv.linkedin : `https://${cv.linkedin}`;

  const reps = {
    '{{LANG}}': 'en',
    '{{PAGE_WIDTH}}': '8.5in',
    '{{NAME}}': escHtml(cv.name),
    '{{PHONE}}': escHtml(cv.phone),
    '{{EMAIL}}': escHtml(cv.email),
    '{{LINKEDIN_URL}}': linkedinUrl,
    '{{LINKEDIN_DISPLAY}}': escHtml(cv.linkedin),
    '{{LOCATION}}': escHtml(cv.location),
    '{{SECTION_SUMMARY}}': 'Professional Summary',
    '{{SUMMARY_TEXT}}': escHtml(cv.summary),
    '{{SECTION_COMPETENCIES}}': 'Core Competencies',
    '{{COMPETENCIES}}': buildCompetenciesHTML(cv.skills),
    '{{SECTION_EXPERIENCE}}': 'Work Experience',
    '{{EXPERIENCE}}': buildExperienceHTML(cv.experience),
    '{{SECTION_EDUCATION}}': 'Education',
    '{{EDUCATION}}': buildEducationHTML(cv.education),
    '{{SECTION_SKILLS}}': 'Skills',
    '{{SKILLS}}': buildSkillsHTML(cv.skills),
  };

  for (const [key, value] of Object.entries(reps)) {
    html = html.replaceAll(key, value);
  }

  // Clean up any stray placeholders
  html = html.replace(/\{\{[A-Z_]+\}\}/g, '');

  return html;
}

// ---- Main ----
const templatePath = resolve(__dirname, 'templates/cv-template.html');
const template = readFileSync(templatePath, 'utf-8');

const cvFiles = [
  'output/autodesk-senior-pm-field-delivery-2026-05-29.md',
  'output/ledcor-manager-delivery-planning-2026-06-01.md',
  'output/wealthsimple-sr-manager-finance-systems-2026-06-01.md',
  'output/clio-strategy-ops-enterprise-2026-06-01.md',
  'output/1password-staff-bpm-platform-2026-06-01.md',
  'output/cgi-pm-owner-pvr-2026-06-01.md',
  'output/ownercom-strategic-ops-lead-2026-06-01.md',
  'output/affirm-senior-pm-financial-platforms-2026-06-11.md',
  'output/ndax-head-of-product-management-2026-06-11.md',
  'output/allstate-lead-digital-pm-sr-manager-2026-06-12.md',
];

const buildResults = [];

for (const cvFile of cvFiles) {
  const mdPath = resolve(__dirname, cvFile);
  const md = readFileSync(mdPath, 'utf-8');
  const cv = parseMarkdownCV(md);
  const html = buildFullHTML(cv, template);

  const slug = basename(cvFile, '.md');
  const htmlPath = `/tmp/cv-erika-${slug}.html`;
  writeFileSync(htmlPath, html);

  const pdfPath = resolve(__dirname, `output/${slug}.pdf`);
  buildResults.push({ slug, htmlPath, pdfPath: pdfPath.toString() });
  process.stdout.write(`HTML: ${htmlPath}\n`);
}

writeFileSync('/tmp/cv-html-results.json', JSON.stringify(buildResults, null, 2));
process.stdout.write('HTML generation complete.\n');
