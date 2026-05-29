# Article Digest -- Proof Points
# Erika McCann | Detailed evidence for evaluation and CV tailoring

---

## AltaGas -- EAM Governance Design (2025-Present)

**Hero metrics:** 3-tier governance structure across 4 subsidiaries; supports $432M 2026 capital program; enables $28-42M annual cost reduction potential; 506 active users (count doubled since 2023)

**Context:** AltaGas (with WGL, Semco Energy, Petrogas) needed governance for its Enterprise Asset Management (EAM) platform. Maximo 7.6 was reaching end-of-life. Maintenance capital had grown 7x since 2021 ($13M → $95M estimated 2026). 37% of midstream OPEX is EAM-influenced (labour 27%, materials 10%). Demand was tripling while the team shrank from 9 to 4 resources.

**What Erika built:**
- Three-tier governance structure: Strategic Leadership Council (quarterly, governing body), Program Leadership Council (monthly, process owners), Technical Advisory Council (monthly, digital + Maximo teams)
- Full RASCI matrix covering: Develop Vision & Strategic Priorities, Endorse Roadmap & Investments, Organizational Change Oversight, Validate & Prioritize Business Needs, Monitor & Report Performance
- Chaired both Strategic Leadership Council AND Program Leadership Council
- Defined committee membership across Engineering & Ops Services, Operations & Maintenance, Tech Services, OPR&A, OT functions

**Business case framing:**
- Connected governance directly to $432M in 2026 capital spend
- Framed four enterprise risks: siloed decision-making, capacity outpaced by demand, inconsistent design principles, low user adoption
- Showed 37% of OPEX (labour + materials) is EAM-influenced
- EAM-influenced cost reductions: $28.7M (2021), $42M (2022), $37.6M (2023), $34.9M (2024)

**2025-2027 EAM Capabilities Roadmap workstreams:**
1. Product Governance: Governance Framework, Operating Model Design, MAS 9 Assessment
2. Asset Life Cycle: Process Family/Locations, PSE, Asset Hierarchy & Classifications
3. Work Management: Service Requests/Central Work Management, MOC, S&WM Data
4. Supply Chain (Facilities): Inventory Management, Purchasing, Fusion-Maximo Integration

**Eight enterprise capability domains (full platform scope):**
Work Management, Asset Lifecycle, Supply Chain, Inventory Management, Operations Management, Health Safety & Environment, Planning & Scheduling, Reliability & Maintenance. The 4-person team supports all 8 domains across 48+ Maximo applications.

**Key decisions driven through SteerCo:**
- Hosting Model: Hybrid Cloud vs. SaaS
- Execution Strategy: Upgrade vs. Blank Slate
- Migration Strategy: Phased Roll-Out vs. Single Go-Live

**Adoption metrics presented to leadership:**
- September 2025: Total Users 506, Average Daily Login 82.13, Average Daily Executor Login 49.97
- Users count doubled since 2023
- Framed utilization gap (high user count, lower daily login %) as enterprise risk requiring governance intervention

---

## AltaGas -- MAS 9 Decision Facilitation (March 2026)

**Hero metrics:** Single presentation aligned SteerCo on 3 binary investment decisions; used home-buying analogy to make enterprise software migration accessible to non-technical executives

**Context:** AltaGas needed to decide how to migrate from Maximo 7.6 (end-of-life) to Maximo Application Suite 9 (MAS 9). Three decisions with significant cost, complexity, and risk implications needed executive alignment.

**What Erika built:**
- Real-world analogy framework mapping enterprise software concepts to home-buying decisions
  - CMMS vs. EAM = Condo vs. House
  - Capability Streams = Rooms/Living Areas
  - Out of the Box = Kitchen Includes (standard fixtures)
  - Configuration = Workflow Dependent Features (pantry layout)
  - Customization = Custom Cabinetry (panel-ready constraints)
- Three-decision framework: Rent or Buy (Hosting Model), Build New vs. Buy Existing (Execution Strategy), One or Phased Moves (Migration Strategy)
- Assessment methodology: Current State → Process Improvement → Business & Data Requirements → Application Fit → Change Impact

**Key insight demonstrated:** Made a technically complex enterprise platform decision legible to non-technical executive stakeholders, accelerating alignment on a decision that had stalled since 2022.

---

## AltaGas -- EAM Operating Model Design (February 2026)

**Hero metrics:** 29-slide operating model defining 5 roles, 9 design tenets, 3 service tracks, project scope, and operational scope for a 4-person team supporting 500+ users across 48+ applications

**Context:** With the team reduced and demand at its peak, Erika designed the complete operating model defining how the team works, makes decisions, and delivers.

**Role definitions authored:**
- Business Analyst (Capability Depth, Process Focused)
- Functional Analyst (Capability Breadth, Operations Focused)
- Data Analyst (Capability Breadth, Standards Focused)
- Technical Lead (Digital-owned, Technology Focused)
- Business Solutions Lead (EAM Capability, Lifecycle Focused) — Erika's own role: single point of accountability for how things get built; defines product direction within SLC boundaries; manages resource allocation across operational support and project delivery

**9 design tenets established:**
1. Right Tool, Right Job — use applications as intended, avoid repurposing
2. Built-In Before Bolt On — start with native features
3. Simple Wins — clarity over complexity
4. Configure First, Code Last — configuration first, customization by exception
5. Secure Before You Script — define access and roles first
6. Fast, Not Furious — event-driven design, reduce system load
7. Data With Purpose — meaningful, reportable, traceable to source
8. Audit What Matters — capture who, when, why for critical actions
9. Action Over Noise — dashboards and reports for information; don't flood inboxes with FYIs

**Three service tracks designed:**
1. Functional Support: submit → verify business need → demo/train → develop/test → close
2. Data Management (Bulk Data Upload): submit → verify data accuracy → design/develop → test → deploy → close
3. Demand Management (Enhancements & Initiatives): submit → assess viability → design/develop → test → Go/No-Go approval → deploy → release notes published

**Technical debt assessment presented:**
- Poor Workflow Design: original build required 200+ hours to undo; lack of traceability, high support effort, workflow misuse
- Classifications Functionality Overridden: 20 hours original build, 200+ hours to undo; data integrity issues
- Performance Issues: overloaded user home pages, unrestricted complex searches, FYI email notification overload

**Current state Maximo Initiatives:**
- Erika personally accountable for 11 concurrent initiatives (highest on team) covering: EAM Governance, Operating Model, MAS 9 planning (hosting model, execution strategy, migration strategy, MAS 9 digital onboarding)
- Team collectively supports 48+ Maximo applications across all capability streams

---

## AltaGas -- EAM Platform Capabilities, Delivery Framework & Data Strategy (2025-Present)

**Hero metrics:** Three simultaneous mandates (Fix Operating Model / Drive EAM Strategy / Lead Product Strategy); process-first design philosophy enforced across 8 capability domains; Azure DevOps 5-level work hierarchy with traceability; Microsoft Fabric data strategy design

**Three simultaneous mandates:**
1. **Fix the Operating Model** — right-sizing how a 4-person team supports 500+ users and 48+ applications; operating model, service tracks, design tenets, role definitions
2. **Drive EAM Strategy** — 2025-2027 roadmap, MAS 9 migration planning, governance structure, SteerCo decision facilitation
3. **Lead Product Strategy** — define what gets built, when, and why; connect every initiative to platform adoption, operational outcomes, and capital/OPEX impact

**Process-first design philosophy:**
Erika advocates for and enforces: define business outcomes → map process flows → assign organizational accountability → establish governance → THEN configure the system. Applied across:
- Work order workflow design: how work gets created, reviewed, approved, executed, and closed — and by whom
- Inspection workflow design: how inspections are scheduled, triggered, executed, and recorded
- Asset hierarchy and classification design: before data entry, define the naming standard and classification logic
- Access and roles design (Secure Before You Script tenet): define who can do what before building anything

**Work Management Design (specific domain work in 2025-2026):**
- Designing work order workflows inside Maximo (full lifecycle: creation → review → approval → execution → completion/closure)
- Designing inspection workflows (how inspections are initiated, what information is captured, how results are recorded)
- Central Work Management design: how work requests flow from multiple business functions into a unified queue
- Service Request design: intake, triage, assignment, resolution, and closure standards
- Management of Change (MOC) workflow design within Maximo context

**Azure DevOps Delivery Framework:**
- Hierarchy: Epics → Features → User Stories → Test Cases → Defects (five levels)
- Traceability: every user story traces to a feature; every feature traces to an epic; every test case traces to a user story
- Standards defined for: how work gets created, what fields are required, what "done" means at each level
- Outcome metrics tracked: adoption rates, throughput, completion rates — not just delivery velocity
- Framework gives team and stakeholders consistent visibility from strategic initiative to tested deliverable

**Microsoft Fabric Data Strategy (2025-2026 exploration):**
- Evaluating Microsoft Fabric as the data backbone for EAM reporting and analytics
- Designing data pipeline architecture: how Maximo data flows to Fabric for reporting
- Assessing integration patterns: Maximo → Fabric → Power BI (and direct API patterns)
- Reporting architecture design: what governance metrics, adoption metrics, and operational KPIs should be surfaced and how
- Goal: enable evidence-based governance decisions at the SteerCo level (not just narrative reporting)

---

## TC Energy -- Liquids Portfolio (August 2021 - September 2024)

**Hero metrics:** $9M-$15M annual delivery portfolio; 6 business functions (Engineering, Operations, Supply Chain, Projects, Reliability, Commercial); multi-year roadmaps with VP/Director/GM stakeholders; integrated planning spanning Power Apps + SAP + Power BI; Application Stream Lead on Southbow spinoff (2,000+ apps rationalized)

**Context:** TC Energy Liquids Business Unit needed portfolio planning and delivery oversight. Role sat at the intersection of business strategy, product management, portfolio governance, and technology delivery — not owning a single application, but helping leadership determine what to fund, what to prioritize, how to allocate resources, whether investments delivered value, and how technology roadmaps connected to business objectives.

**What Erika delivered:**

*Portfolio Strategy & Planning:*
- Annual portfolio planning cycle with Directors, General Managers, and VPs: intake, prioritization, roadmap, investment plan
- Multi-year capability roadmapping: identifying gaps, sequencing investments, assessing dependencies, looking beyond annual cycles
- Balancing competing demands: strategic objectives, regulatory requirements, operational risk, reliability, resource and budget constraints

*Product Management Governance:*
- Drove product management maturity across the portfolio — established practice of defining business outcomes before technology solutions
- Signature approach: pushed teams to ask "what business problem are we solving?" rather than "what features do we need?"
- Worked with Product Managers to ensure products had defined business outcomes, clear objectives, measurable value propositions, and sustainable roadmaps
- Helped shift leadership discussions from project status reporting toward value realization

*Investment Governance & Demand Management:*
- Designed framework covering: demand intake → business case evaluation (strategic alignment, value, cost, risk, resources) → funding decisions → delivery oversight
- Provided leadership visibility into investment requests, funding allocations, priority changes, and portfolio impacts
- Facilitated strategic discussions to build alignment across stakeholder groups and communicate portfolio health

*Reporting & Data Strategy:*
- Executive-level portfolio dashboards in Power BI: portfolio health, initiative progress, risks, dependencies, business outcomes
- Integrated planning approach: demand intake (Power Apps) → budgeting (SAP) → delivery tracking (Power BI) — end-to-end visibility from business request to funded, delivered work
- Explored SAP financial integration concepts to connect funding, delivery status, and business priorities into a single decision-making framework

**Southbow Spinoff — Application Stream Lead:**
TC Energy spun off its Liquids business as Southbow Energy in 2024. Erika served as Application Stream Lead on the spinoff program:
- Led application blueprinting and rationalization of 2,000+ applications scoped for a 10,000-person company down to fit a 600-person organization
- Proposed migrating from the planned AWS and SAP architecture to Azure and Dynamics 365
  - Rationale: organizational scale (600 people doesn't justify enterprise SAP licensing); Power Platform interoperability with Microsoft 365 productivity tools; better scaling discounts at smaller footprint
  - Recommendation accepted by leadership; changed the platform direction for the spinoff
- Demonstrates: technology evaluation at strategic (not feature) level; ability to challenge inherited assumptions; understanding of total cost and organizational fit

**Key capability demonstrated:** Financial fluency at portfolio level — evaluating and prioritizing $9M-$15M of annual investment against strategic business objectives, not just tracking delivery. Plus application estate rationalization and strategic technology selection at spinoff scale.

---

## 222529 Alberta Inc. -- Digital Transformation Consulting (November 2019 - August 2021)

**Hero metrics:** $14M PoC portfolio; evaluated WirelessHART sensor networks and Boston Dynamics Spot robotic inspection for industrial maintenance organizations

**Context:** Independent consulting practice focused on digital transformation opportunities in energy/industrial maintenance organizations.

**What Erika delivered:**
- Intake and evaluation framework for digital transformation opportunities
- Business cases, value frameworks, and prioritization models for PoC investment decisions
- Evaluated WirelessHART sensor networks: wireless instrumentation for real-time equipment monitoring in industrial environments
- Evaluated Boston Dynamics Spot: robotic inspection for hazardous or remote facility areas
- Facilitated alignment between operational stakeholders and technical teams on pilot objectives and success criteria
- Assessed technical feasibility, scalability, and integration for long-term adoption

**Key capability demonstrated:** Ability to evaluate emerging technology through an operational lens — not "what can this technology do" but "what operational problem does this solve and can we scale it."

---

## Keyera Corporation -- EAM & Reliability Program (July 2014 - November 2019)

**Hero metrics:** 26+ facilities; one of the largest IT programs in Keyera's history; enterprise naming standard adopted across multiple systems; proposed and got a new team created (3 → ~10 people); capability-based organizational model shift

**Context:** Keyera's enterprise asset management and reliability transformation program — multi-year, company-wide, touching Operations, Maintenance, Reliability, Engineering, Supply Chain, and IT. Objective extended beyond system implementation: improve asset management maturity, work management practices, reliability processes, asset data quality, and organizational consistency enterprise-wide.

**What Erika was actually doing:**
Not traditional requirements gathering — helping the organization answer larger questions:
- How should asset management operate across a multi-facility enterprise?
- How should asset information be governed and structured?
- How should business and technology teams work together sustainably?
- What organizational structure best supports long-term asset management capability?

**Process Design Work (future-state, not just requirements):**

*Work Management:*
- Facilitated current-state assessments and future-state design for work management processes
- Scope: work identification → work requests → planning → scheduling → execution → completion
- Helped establish consistency in how maintenance activities were managed and supported through technology

*Reliability Processes:*
- Defined future-state processes for defect management, failure identification, reliability improvement initiatives
- Defined data capture requirements and reporting needs for reliability objectives
- Ensured reliability outcomes were reflected in future-state process and system designs

*Asset Lifecycle Management:*
- Defined processes supporting asset creation, modification, retirement, and information governance
- Improved traceability and consistency across the organization's asset estate

**Enterprise Asset Naming Standards:**
Most significant and enduring technical accomplishment:
- Designed standards governing equipment naming, functional locations, asset hierarchies, and identification structures
- Adopted across ~26 facilities
- Became foundational to multiple enterprise systems and business processes
- Required extensive collaboration across Operations, Maintenance, Reliability, Engineering, and IT to build alignment and drive adoption
- Outcomes: improved data consistency, reporting accuracy, asset traceability, cross-system integration, enterprise governance

**Asset Management Systems Team — Organizational Design:**
Most significant organizational accomplishment:
- Observed that responsibility for asset management capabilities was fragmented: business process ownership, system support, technical expertise, and data governance operated independently
- Recognized that asset management should be treated as an enterprise business capability, not a collection of individual applications
- Proposed a capability-based organizational model bringing together BAs, Functional Analysts, and Technical Analysts into a unified team focused on EAM as a business capability
- Initially proposed to manager → elevated to director level → formalized by leadership
- Starting state: herself as the BA + 2 Technical Analysts (3 people)
- Within ~1 year: grew to ~10 people supporting enterprise EAM capabilities
- Organizational shift: from "who supports this application?" to "who owns and supports this business capability?" — improved alignment, ownership, governance, and long-term sustainability

**Stakeholder Engagement breadth:**
Worked across every level — operators, technicians, planners, maintenance managers, reliability engineers, technical specialists, managers, directors, program sponsors. Known as a trusted facilitator and translator between business and technology groups.

**How this role reads today:**
Keyera was the origin of the career themes that later became portfolio governance at TC Energy and enterprise operating model design at AltaGas. Same questions, larger stage. At Keyera: proposed a capability-based team. At TC Energy: governed a $9M-$15M delivery portfolio. At AltaGas: designed a three-tier governance structure for a $432M capital program.

**Key capability demonstrated:** Seeing organizational gaps and proposing structural solutions — not just executing within existing structures but identifying when the structure itself is the problem. The Asset Management Systems team proposal is the earliest evidence of the governance architecture instinct that defines the career arc.

---

## Shell Canada -- Service Operations (2010-2013)

**Hero metrics:** ~$90K in annual cost savings from service management improvement initiatives; KPI reporting for service desk performance and SLA management

**PI System experience:** Developed KPI reporting and analytics for service desk performance — direct experience with PI System (OSIsoft/AVEVA), which is the operational data backbone for most energy companies. Relevant to AVEVA/OSIsoft PM roles.
