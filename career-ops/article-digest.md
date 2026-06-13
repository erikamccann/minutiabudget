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

**Title:** Director of Business Analysis Consulting

**Hero metrics:** $14M PoC/innovation portfolio; $10M+ annual value identified; $2M annual operational savings delivered; $1M annual IT/operational cost reduction; 17% equipment downtime reduction; functioned as hybrid Product Director / Innovation Portfolio Manager / Business Architect / Digital Transformation Consultant

**Context:** Independent consulting practice serving energy, mining, and industrial operations clients. Partnered with executive leadership, engineering, operations, maintenance, and technology teams to evaluate emerging technologies, build business cases, validate proof-of-concepts, and scale high-value solutions before organizations committed capital.

**Portfolio scope (technologies evaluated and delivered):**
AI/ML, Industrial IoT (IIoT), predictive maintenance, autonomous robotics, asset reliability programs, supply chain optimization, procurement optimization, workforce productivity, data analytics, low-code automation

**Predictive Maintenance & Asset Reliability:**
- Facilitated workshops and operational assessments with reliability engineers, maintenance planners, ops teams, and asset management groups to identify failure patterns and maintenance inefficiencies
- Developed requirements and business cases for: condition monitoring systems, sensor-based monitoring, asset health dashboards, predictive failure analytics, and reliability-centered maintenance programs
- Helped organizations transition from reactive/preventive maintenance models toward predictive maintenance strategies — identifying where sensor data and advanced analytics could improve equipment reliability

**Customer Journey Mapping & Process Transformation:**
- Facilitated discovery workshops and stakeholder interviews across engineers, operators, planners, and maintenance personnel
- Mapped current-state and future-state processes, user pain points, decision bottlenecks, data accessibility gaps, and automation opportunities
- Identified operational improvements generating $10M+ annually in potential value through improved engineering decision-making and workflow optimization

**Autonomous Technologies & Robotics:**
- Evaluated Boston Dynamics Spot for autonomous robotic inspection of hazardous or remote facility areas: assessed use cases, business value, integration requirements, data architecture, scalability, and organizational readiness
- Evaluated WirelessHART sensor networks: wireless instrumentation for real-time equipment monitoring in industrial environments

**Industrial IoT & Smart Sensor Programs:**
- Led initiatives involving wireless sensors, remote monitoring technologies, industrial telemetry, smart devices, and equipment condition monitoring
- Defined data collection strategies, information architecture, integration requirements, analytics requirements, and operational workflows
- Bridged operations, engineering, IT, data science, and external vendors to align solutions with business needs and technical constraints

**Product Strategy & Innovation Consulting:**
- Product vision development, opportunity assessment, roadmap creation, stakeholder alignment, requirements definition, solution prioritization, and adoption strategy — full product lifecycle work without the product title
- Built executive-level business cases supporting innovation investment decisions

**Analytics & Low-Code Automation:**
- Delivered operational improvements through Power BI, Power Apps, and workflow automation
- Implemented solutions improving operational visibility, streamlining processes, reducing manual effort, and enhancing decision-making

**Vendor Management & Integration Strategy:**
- Vendor evaluation, technology assessments, API and integration reviews, architecture compatibility analysis, scalability assessments
- Ensured PoCs could transition to enterprise-scale implementation rather than remaining isolated pilots

**Key achievements:**
- $14M portfolio managed; $10M+ annual value identified; $2M annual operational savings; $1M annual cost reduction through automation/analytics
- 17% equipment downtime reduction
- Built executive-level business cases connecting technology investments to strategic business objectives

**Key capability demonstrated:** Ability to evaluate emerging technology through an operational lens — not "what can this technology do" but "what operational problem does this solve, what does it cost to scale, and can the organization actually adopt it." This is innovation portfolio management with financial discipline, not a research function.

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

## TC Energy -- PIXEL Platform (2021-2024)

**Hero metrics:** ~700 IT employee users; gamified engagement platform built entirely on Power Platform; full PM/PO/SA/BA/change management lifecycle; sustained adoption through multi-year use

**Context:** PIXEL (Power Platform Innovation & Engagement Layer) was an internal engagement and innovation platform Erika conceived, designed, built, and managed for the TC Energy IT function. The challenge: a large IT organization (~700 employees) with low cross-functional visibility, limited informal knowledge-sharing, and no mechanism for recognizing delivery contributions or surfacing innovative ideas. PIXEL addressed all of it.

**What Erika built:**
- **Power Apps front-end:** Responsive canvas app serving as the platform's primary interface — home feed, idea submission, recognition flows, leaderboard views, badge gallery
- **Gamification engine:** Points system rewarding contributions (ideas submitted, recognitions given, events attended, learning completions); badges for milestone achievements; leaderboards updated in real time — creating visible, competitive engagement without mandating participation
- **Idea pipeline:** Structured intake for innovation submissions — title, description, business value framing, implementation complexity estimate — routed through triage and tracking states (submitted → reviewed → shortlisted → implemented → archived)
- **Recognition system:** Peer-to-peer and manager-to-employee recognition tied to points and visible on profiles; normalized public recognition as a cultural practice, not just a manager responsibility
- **Execution tracking:** Linked platform activity to quarterly IT priorities — teams could log delivery milestones, completed initiatives, and learning activities, giving leadership visibility into IT throughput beyond project status reports
- **Power Automate workflows:** Automated point allocation on trigger events (idea submission, recognition received, badge earned, learning logged); approval routing for idea triage; digest notifications to keep the platform visible without inbox overload
- **SharePoint back-end:** Used SharePoint lists as the data layer — users, points ledger, ideas, badges, events, recognitions — structured for Power BI consumption
- **Power BI reporting:** Leadership dashboard surfacing platform adoption (active users, weekly engagement, point velocity), idea pipeline health (submissions by stage), and recognition patterns (who is giving, who is receiving, coverage across org levels)
- **Change management:** Designed and executed the adoption campaign — launch communications, manager onboarding sessions, team competitions to seed early engagement, feedback loops to iterate on the platform based on user behavior

**Role scope:** Erika was PM, PO, SA, BA, and change manager — no dedicated developer. Built entirely within Power Platform without engineering support. Designed the data model, built the app, automated the workflows, designed the dashboards, ran the launch, and sustained the platform.

**Key capability demonstrated:** End-to-end internal product lifecycle in a zero-budget, no-engineering-team environment. Designed a product that required behavior change (recognition, idea submission, active participation) and drove adoption through intrinsic motivation design rather than mandates. Directly demonstrates product thinking, not just delivery execution.

---

## TAP / Minutia Tech -- Smart Medication Adherence System (Personal Project, 2023-Present)

**Hero metrics:** Full hardware-software product ecosystem designed from first principles; pharmacy B2B subscription business model; regulatory strategy structured to stay out of Class II medical device classification; ESP32 + NFC + load sensor hardware prototype in progress; patent strategy in development

**Context:** TAP (The Adherence Project) is a smart medication adherence product Erika is building under her company Minutia Tech (OmniHive). The product concept: patients forget or mismanage medications — a persistent, high-cost problem in healthcare. Existing solutions (pill organizers, phone reminders) don't close the feedback loop between what the patient intends and what actually happens. TAP does.

**Product architecture:**
- **Modular dock (hardware):** ESP32 microcontroller; NFC readers embedded in each medication slot; load sensors (weight detection per compartment); RGB LEDs for visual cues (which medication, what time, confirmation/alert state); Wi-Fi connectivity; firmware in C++ (Arduino framework)
- **Passive NFC containers:** Custom medication containers with embedded NFC tags — dock reads the tag to identify which medication is present or removed, cross-referencing the expected schedule
- **Event detection:** Load sensor + NFC read combination detects: container present (baseline), container removed (medication taken?), container returned (dose confirmed vs. returned unused), container missing at scheduled time (adherence alert)
- **Software layer:** Mobile app for schedule configuration, medication logging, caregiver/family notifications, adherence reporting; cloud backend for data sync, alert routing, analytics
- **Sustainability loop:** Passive NFC containers are reusable and refillable; dock is a one-time hardware purchase; medication refills delivered directly into the container ecosystem — closed loop from pharmacy to patient and back

**Business model:**
- **B2B pharmacy subscription:** Not sold direct-to-consumer. Sold to pharmacy chains as a managed service — pharmacy owns the patient relationship, offers TAP as a premium adherence service (white-labeled), charges patients a monthly subscription as part of their pharmacy membership or chronic medication program
- **Why pharmacies:** Pharmacies are already the distribution point for medications; they have the patient relationship and refill cadence; adherence directly affects their refill revenue and patient retention; no new consumer acquisition cost required
- **Revenue model:** Pharmacy pays per-patient subscription fee (estimated $15-30/month per enrolled patient); hardware amortized into subscription or leased; refill containers supplied through pharmacy's existing dispensing workflow

**Regulatory strategy:**
- **Core constraint:** NFC reading + weight sensing = the system is observing medication events, not dispensing medications. This distinction is critical — if TAP dispensed medications (like a pill sorter that pushes pills into a cup), it would be classified as a Class II medical device under Health Canada/FDA, triggering clinical trial requirements and regulatory approval timelines measured in years
- **Design decision:** TAP is designed as an adherence tracking and notification system, not a dispensing device. Medications are filled by the patient or pharmacist into the containers manually; TAP only reads and reports what happens. This positions TAP as a wellness/monitoring device (Class I or general wellness), dramatically reducing regulatory burden
- **Patent strategy:** Provisional applications targeting the dock-container-NFC combination, the specific event detection logic (presence + weight + schedule cross-reference), and the pharmacy B2B distribution model as applied to smart adherence hardware

**Technical progress:**
- ESP32 breadboard prototype: NFC reader functional (MFRC522 module); load sensors wired (HX711 amplifier); LED control logic written; Wi-Fi connectivity established
- Firmware: medication schedule storage (JSON, SPIFFS); event detection loop written and tested; MQTT broker integration for cloud event publishing
- Container design: NFC tag embedding spec defined; refill-compatible lid mechanism in CAD (FreeCAD)
- Next: PCB design (custom ESP32 board replacing breadboard), injection mold quote for container production run

**Key capability demonstrated:** Full product ownership at the hardware-software boundary — from user problem through business model through regulatory strategy through technical architecture through prototype execution. Demonstrates product thinking applied outside a corporate context: no team, no budget, no existing market. Also demonstrates hardware product knowledge (embedded systems, NFC, sensor integration) that directly strengthens TAP's industrial IoT and field hardware PM positioning.

---

## Home Automation Ecosystem (Personal Project, 2020-Present)

**Hero metrics:** 100+ connected devices; Home Assistant as central orchestration platform; self-hosted infrastructure (server + NAS); custom ESP32 firmware for RF device integration; full network architecture with segmentation; event-driven automation design philosophy

**Context:** Erika's home automation system is a full-stack infrastructure project — not a collection of consumer smart home devices, but a designed, self-hosted, custom-extended ecosystem with deliberate architecture decisions at every layer. Built and expanded since 2020, continuously iterated.

**Device ecosystem (100+ devices):**
- **Lighting:** Zigbee smart bulbs and switches (Philips Hue, IKEA Tradfri, third-party Zigbee devices); dimmer controls; motion-triggered scenes by room and time-of-day
- **Climate:** Smart thermostats (Ecobee); room temperature/humidity sensors; ventilation controls; heating schedules driven by occupancy detection, not just timers
- **Security:** Door/window sensors; motion detectors; camera integration (local processing, no cloud dependency); presence detection via device network scanning (rather than motion alone — more accurate for "home/away" logic)
- **Energy monitoring:** Whole-home energy monitoring (Emporia Vue); per-circuit monitoring for high-draw appliances; solar/battery readiness tracking
- **Plugs and switches:** Z-Wave and Zigbee smart plugs; energy monitoring plugs; outlet control for non-smart appliances
- **Media and AV:** IR blasters for legacy AV equipment; media player integration (Plex, Sonos)
- **Custom RF devices:** Garage door controllers, legacy RF switches, and motorized blinds with no native smart home support — integrated via custom ESP32 boards running ESPHome firmware, bridging 433MHz RF protocols to MQTT/Home Assistant

**Infrastructure architecture:**
- **Home Assistant OS:** Running on dedicated home server (x86 mini PC); not a Raspberry Pi — chosen for reliability, compute capacity, and local processing capability
- **Network segmentation:** IoT VLAN separated from primary network (router-level VLAN configuration); devices on IoT VLAN cannot initiate connections to primary network; primary network can push to IoT VLAN (unidirectional control); prevents a compromised IoT device from accessing computers or NAS
- **Self-hosted services:** Home Assistant, MQTT broker (Mosquitto), Zigbee coordinator (Sonoff Zigbee 3.0 dongle + Zigbee2MQTT), Node-RED (supplemental automation logic), InfluxDB + Grafana (time-series sensor data and dashboards)
- **NAS:** Synology NAS for media storage, backup, and local API endpoints; integrated with Home Assistant for storage events and drive health monitoring
- **No cloud dependency:** All automation logic runs locally; most device integrations are local-only (Zigbee, Z-Wave, ESPHome, local API); cloud integrations (weather, voice assistants) are additive, not critical path — the system works when the internet is down

**Custom ESP32 hardware (RF bridge):**
- Problem: ~15 legacy devices (garage door openers, motorized blinds, RF wall switches) used 433MHz RF protocols with no native integration
- Solution: custom ESP32 boards running ESPHome firmware; 433MHz RF transmitter/receiver modules; trained on each device's RF signal using RF sniffer capture
- Outcome: devices appear in Home Assistant as native entities (cover, switch, button); fully integrated into automation logic alongside Zigbee and Z-Wave devices
- Technical details: RF signal capture → ESPHome YAML configuration → MQTT publish/subscribe → Home Assistant entity mapping

**Automation design philosophy:**
- **Event-driven, not schedule-driven:** Automations trigger on state changes (motion detected, door opened, presence changed, sun elevation crossed threshold) rather than fixed times — more responsive and more accurate
- **Layered logic:** Simple automations for simple cases; Node-RED flows for complex conditional logic (e.g., "if motion detected AND after sunset AND no one is in the kitchen AND alarm is not armed AND media is not playing in the adjacent room → turn on kitchen lights at 40% brightness")
- **Graceful degradation:** Manual controls always work; automation is additive, not a dependency — if the server is down, lights still turn on manually
- **Observability:** InfluxDB stores all sensor readings at 30-second intervals; Grafana dashboards for energy consumption trends, temperature patterns, occupancy heatmaps, device availability

**Key capability demonstrated:** Systems architecture thinking applied to physical infrastructure — the same discipline as enterprise architecture but at home scale. Network segmentation, MQTT pub/sub messaging patterns, REST API integration, event-driven design, hardware firmware development, and reliability engineering are all directly applicable to industrial IoT and field operations product domains. Demonstrates hands-on technical depth that supports credibility in conversations with engineering teams about what is and isn't technically feasible.

---

## Keyera -- Financial Systems & GL Integration (2014-2019)

**Hero metrics:** 1M+ valid GL coding combinations configured; Qbyte ERP integration built with Maximo; AFE + AFE item + cost center + major/minor account structure; chart of accounts knowledge covering debit/credit, control accounts (inventory, holding, clearing)

**Context:** At Keyera, Erika led the implementation of GL account validation inside Maximo to enforce proper financial coding at the point of work order creation and purchasing activity. This required deep knowledge of how financial accounts work in an energy company and how Maximo integrates with the ERP (Qbyte — a financial ERP widely used in Canadian oil and gas).

**What Erika built:**
- Turned on GL account validation in Maximo — ensuring only valid account combinations could be entered, preventing downstream posting errors and financial miscodings that would require journal entry corrections
- Configured and maintained 1M+ valid GL coding combinations covering: AFE (Authorization for Expenditure), AFE Item, Cost Center, Major Account, Minor Account
- Understood and applied the full chart of accounts structure: revenue accounts, expense accounts, capital accounts, debit vs. credit logic, control accounts for inventory (inventory asset, receiving clearing, AP trade payable), holding accounts, and clearing accounts used in the procure-to-pay cycle
- Managed the Maximo-to-Qbyte financial integration: ensuring work order charges, purchase orders, and receiving transactions posted to the correct accounts in the general ledger
- AFE workflow knowledge: how capital projects are authorized, how work gets coded to AFE vs. expense, how budget tracking works at the AFE and cost center level

**Key accounting concepts applied:**
- **Inventory control accounts:** Inventory asset account (debit when received into stock), cost of goods (debit when issued from stock), AP trade payable (credit when PO confirmed). The three-way flow ensures stock on hand matches the balance sheet
- **Holding accounts:** Used when goods are received but invoice hasn't arrived — the GR/IR (goods receipt/invoice receipt) holding account prevents premature AP posting
- **AFE vs. expense coding:** Capital work (new construction, major modifications) codes to AFE (capitalized); routine maintenance codes to expense cost centers. Getting this wrong has material financial reporting implications
- **Major/minor account structure:** Keyera's Qbyte CoA used a major/minor hierarchy within cost centers — Erika mapped every Maximo transaction type to the correct major/minor combination

**Key capability demonstrated:** Hands-on financial systems integration — not just "I managed a budget" but actual GL structure design, control account mechanics, and ERP integration for financial data accuracy. Speaks fluently to CFO-level concerns about financial integrity, audit trail, and ERP posting accuracy.

---

## Keyera -- Supply Chain & Procure-to-Pay Workflow (2014-2019)

**Hero metrics:** End-to-end procure-to-pay workflow designed; financial authority approval based on dollar limits implemented; 3-way match (PO/receipt/invoice) logic built; full PR → PO → receiving → invoicing cycle mapped and configured

**Context:** As BA on a supply chain project at Keyera, Erika designed and implemented the purchasing workflow inside Maximo and its integration with the financial system. The scope covered the full procure-to-pay cycle from requisition to invoice payment.

**What Erika built:**

*Financial authority and approval workflow:*
- Designed a financial authority approval matrix routing purchase requisitions and purchase orders through approval based on dollar thresholds (different approval limits by role — technician, supervisor, manager, director, VP)
- Integrated contracts into the approval workflow: purchases against existing blanket contracts routed differently than new vendor purchases
- Modeled approval limits for different spend categories (materials vs. services vs. capital vs. operating)

*Full procure-to-pay cycle:*
- **Purchase Requisition (PR):** Who can raise a PR, what information is required (GL coding, AFE/cost center, description, vendor preference, urgency), approval routing
- **Purchase Order (PO):** Conversion from approved PR to PO, vendor selection, pricing, delivery terms, PO confirmation to vendor
- **Receiving:** Goods receipt process in Maximo — partial receipts, over-receipts, quality holds, storeroom receipt vs. direct delivery. Receipt triggers GR/IR holding account posting
- **Invoice matching:** 3-way match logic — PO quantity/price, receipt quantity, and invoice quantity/price must align within tolerance. Exceptions (quantity differences, price variances) routed for exception handling before AP payment release
- **Inventory integration:** How purchased stock items are received into Maximo storeroom inventory vs. direct-charge non-stock items. Storeroom receipts update inventory on-hand and trigger asset/account postings

*Contracts integration:*
- Blanket purchase orders and standing offer agreements — how contract-based purchases flow through the PR/PO process differently from spot purchases
- Contract pricing integration: ensuring Maximo purchase orders pulled correct rates from contract master data

**Key capability demonstrated:** Deep procure-to-pay domain knowledge — not just the workflow but the financial mechanics underneath it. Can speak to purchasing workflow design, financial controls, 3-way match logic, and inventory accounting in a way that's relevant to ERP PM roles, supply chain software PM roles, and enterprise procurement platform implementations.

---

## Keyera -- Cloud Historian / OT Security Architecture (2014-2019)

**Hero metrics:** BA on Honeywell centralized corporate cloud historian implementation; bridged OT-IT security boundary for DCS/SCADA data moving to cloud; designed data flow across DMZ → business layer → cloud infrastructure layers

**Context:** Erika was BA for Keyera's implementation of a centralized corporate cloud historian from Honeywell — a platform that aggregated process data (DCS and SCADA) from multiple facilities into a centralized cloud repository for analytics, reporting, and remote access.

**Why this was complex:**

*OT data volume:* Process historians capture data at high frequency (1-second intervals or faster for some tags) across thousands of process points (pressure, temperature, flow, level, valve states, equipment status). A multi-facility historian aggregating DCS/SCADA data generates massive volumes — the data architecture had to handle ingestion throughput, retention policies, and query performance at scale.

*OT security architecture:*
- **Purdue model awareness:** OT networks follow a layered security architecture (Purdue Reference Model): Level 0-2 (field devices, PLCs, DCS) → Level 3 (process control/SCADA) → DMZ (demilitarized zone) → Level 4 (business network) → cloud
- **The DMZ boundary:** Data doesn't flow directly from OT networks to the cloud. It must traverse the DMZ — a security perimeter with controlled, one-directional data flow (OT → DMZ historian buffer → business layer → cloud). No reverse path from cloud back into OT
- **What Erika designed:** Data flow architecture from DCS/SCADA historian (on-premise, at facility level) → DMZ buffer → Honeywell cloud platform. Each layer had different security requirements, firewall rules, and data handling controls
- **One-way diode principle:** Data replication from OT to cloud was one-directional — OT data flows out, no commands or writes flow back in. This prevents a cloud compromise from affecting process control systems
- **Security review requirements:** Moving OT data to cloud required review by cybersecurity and OT security teams; Erika facilitated the security assessment, documented the data flow, and ensured the architecture was accepted before implementation

*Business requirements for historians:*
- Which process tags to replicate (not all tags — prioritizing operational, reliability, and compliance-relevant data points)
- Retention policies (short-term high-resolution vs. long-term aggregated)
- Access model: who can query the historian and what visualization tools connect to it (PI Vision/DataLink equivalent in Honeywell ecosystem)
- Integration with existing KPI reporting

**Key capability demonstrated:** OT/IT boundary security design and cloud data architecture for process historians. Directly relevant to industrial IoT, SCADA/DCS integration, and operational data platform PM roles. Speaks the language of OT security teams and understands why "just put it in the cloud" is never simple for industrial operations data.

---

## TC Energy -- Project Portfolio Management Application & SaaS Governance (2021-2024)

**Hero metrics:** Product Manager on PPM application implementation covering FEED-to-execution project lifecycle; designed CapEx vs. OpEx classification rules; structured CSOX controls for financial data integration; applied SOC 2 Type 2 requirements as enterprise procurement criteria for SaaS tools; designed data portability and SaaS off-ramp requirements

**Context:** As part of TC Energy's portfolio work, Erika was Product Manager on the implementation of a Project Portfolio Management (PPM) application — a SaaS platform used to manage the lifecycle of technology initiatives from FEED through execution, funding, and delivery. This required deep engagement with financial governance, enterprise software procurement requirements, and accounting treatment for SaaS investments.

**CapEx vs. OpEx classification:**
- **FEED (Front End Engineering and Design):** The pre-project phase where requirements, scope, and feasibility are assessed before capital approval. FEED costs are typically expensed (OpEx) — they're exploratory. Once a project is approved and moves into execution, costs shift to capitalized (CapEx)
- **The SaaS grey area:** Under accounting standards (IFRS/ASPE), traditional software licenses are capitalized. SaaS subscriptions are harder — you don't own the software, you're renting access. IFRS and CPA Canada guidance generally requires SaaS subscription fees to be expensed as incurred; only certain implementation costs (configuration, integration) may be capitalizable depending on the phase
- **Off-ramp and data ownership:** If a SaaS contract ends, you need your data back. Erika designed data portability requirements into procurement — export format, retention period, migration assistance — so the company wasn't locked in without an exit path
- **Who owns the data:** When customer data (operational data, financial data, project records) lives in a SaaS platform, the contract must clearly specify data ownership, data residency, and what happens to data on contract termination

**CSOX (Canadian equivalent of SOX):**
- When a SaaS application processes or integrates with financial data that flows into the ERP and affects reported financial numbers, it falls within the scope of Canadian internal controls over financial reporting (CSOX)
- Erika structured the CSOX control requirements for the PPM application's financial integration: how budget data flowed from the PPM to SAP, what controls ensured data integrity, who had access to modify financial records, and what audit trail existed
- Integration control design: input validation, reconciliation procedures, segregation of duties, change management controls for financial data interfaces

**SOC 2 Type 2 as enterprise procurement requirement:**
- Any SaaS application handling sensitive operational or financial data needs SOC 2 Type 2 certification as a minimum enterprise procurement requirement
- SOC 2 Type 2 (vs. Type 1): Type 1 assesses controls at a point in time; Type 2 assesses that controls operated effectively over a period (typically 6-12 months). Enterprise buyers require Type 2 because it demonstrates sustained security posture, not just a snapshot
- Erika applied this as a procurement gate: vendors without current SOC 2 Type 2 reports required additional security assessment before approval
- Trust Service Criteria covered: Security, Availability, Processing Integrity, Confidentiality, Privacy

**Key capability demonstrated:** Enterprise-grade SaaS procurement and governance — understands what the finance team, internal audit, and CISO care about when evaluating SaaS. Can evaluate vendor contracts, structure procurement requirements, design data governance for cloud integrations, and apply accounting treatment rules for software investments. This depth is rare in PMs and directly relevant to enterprise SaaS companies selling into large industrial organizations.

---

## TC Energy -- Alarm Management System (2021-2024)

**Hero metrics:** BA on implementation of alarm management analytics platform; addressed alarm chatter, suppression, and persistence across TC Energy's control systems; enabled systematic alarm rationalization and configuration improvement

**Context:** TC Energy operates extensive pipeline and facilities infrastructure monitored through control systems (DCS/SCADA/PCS). Industrial control systems generate alarms to alert operators when process conditions deviate from normal ranges — but poorly configured alarms create noise (chatter, nuisance alarms, flood events) that reduces operator effectiveness and creates safety risk. Erika was BA for implementing an alarm management analytics platform to address this.

**Key domain knowledge:**
- **Alarm chatter:** An alarm that triggers and resets repeatedly in a short period without operator action — typically indicates a process variable oscillating around a setpoint. Chattering alarms consume operator attention and desensitize operators to real alarms. Root cause is usually poor deadband configuration or setpoint placement
- **Alarm suppression:** Intentionally inhibiting alarms under specific conditions (e.g., during startup sequences, maintenance activities, or when dependent alarms would cascade). Uncontrolled suppression is a regulatory and safety risk — the platform tracked suppression duration and flagged alarms suppressed beyond acceptable thresholds
- **Alarm persistence / standing alarms:** Alarms that activate and stay active without resolution for extended periods. Often indicates an accepted but unaddressed process condition — dangerous because operators normalize them. The platform identified standing alarms and generated rationalization work orders
- **Alarm flood:** A condition where so many alarms activate simultaneously that operators cannot process and respond to them — typically triggered by a single process upset that cascades. Alarm management analytics helps identify which alarms drive flood events so configurations can be modified

**What the implementation delivered:**
- Analytics platform ingesting alarm event historian data — time-stamped alarm activation, acknowledgement, and reset events from multiple control systems
- Reporting on worst-actor alarms: alarms with highest frequency, longest standing duration, highest operator burden
- Rationalization workflow: platform-generated work orders for alarm configuration review and modification
- KPI dashboards tracking alarm performance over time: alarms per operator per hour (EEMUA 191 benchmark), suppression inventory, standing alarm count

**Key capability demonstrated:** OT/process safety domain knowledge at the control system layer. Understands how alarm management connects to functional safety requirements (IEC 61511), operator effectiveness, and regulatory expectations. Directly relevant to industrial software PM roles targeting SCADA, DCS, or operations management platforms.

---

## TC Energy -- OTC Derivatives Regulatory Reporting (2021-2024)

**Hero metrics:** BA on automated OTC derivatives reporting implementation; integrated with ICE (Intercontinental Exchange) and CME (Chicago Mercantile Exchange) trade repositories; met CFTC/CSA regulatory reporting obligations for energy derivatives trading

**Context:** TC Energy's commercial function trades energy derivatives (natural gas swaps, basis swaps, options) to hedge commodity price exposure on its pipeline and storage business. Under post-2008 financial regulation (Dodd-Frank in the US, National Instrument 94-102 in Canada), OTC derivatives must be reported to trade repositories. Erika was BA for implementing the automated reporting system that met these obligations.

**Key domain knowledge:**
- **OTC derivatives in energy:** Natural gas basis swaps, fixed-for-float swaps, and options used by energy companies to lock in pricing and manage basis risk between pipeline delivery points. Not speculative trading — commercial hedging of physical commodity price exposure
- **Trade repository reporting requirements:** Regulatory rules require OTC derivatives to be reported to approved trade repositories (ICE, CME) within specific timeframes (T+1 or same-day for new trades, and ongoing lifecycle event reporting for amendments, terminations, and valuations)
- **What gets reported:** UTI (Unique Trade Identifier), counterparty LEIs, notional amount, maturity date, underlying commodity, price, clearing status, collateral details, valuation (mark-to-market) on a regular basis
- **Integration architecture:** The reporting system pulled trade data from TC Energy's energy trading and risk management (ETRM) system, transformed it into the required regulatory reporting format (FpML or CSV schema per repository spec), and submitted via ICE/CME's reporting APIs
- **CSOX implications:** Derivatives reporting affects balance sheet values (mark-to-market positions) — the reporting system's data integrity controls fell within financial reporting CSOX scope

**What Erika delivered as BA:**
- Requirements for the trade data extraction from ETRM: which fields, what transformation logic, how to handle amended vs. new trades
- Integration design with ICE and CME reporting APIs: authentication, submission format, acknowledgement handling, rejection handling and resubmission
- Exception management workflow: what happens when a trade fails validation at the repository — alert routing, investigation workflow, resubmission procedure within regulatory deadlines
- Reconciliation controls: ensuring the trades submitted to repositories matched the company's internal trade records (avoiding reportable discrepancies)
- UAT and go-live support: tested reporting flows against ICE/CME test environments before production submission

**Key capability demonstrated:** Financial regulatory compliance and capital markets integration experience — rare for someone in the energy/industrial domain. Demonstrates ability to work on systems where errors have regulatory and financial reporting consequences, and to design controls adequate for external reporting obligations.

---

## TC Energy -- SeeQ OT Data Analytics Platform (2021-2024)

**Hero metrics:** PM on SeeQ implementation; enabled engineers to self-serve OT data analysis outside SCADA; built condition-based monitoring use cases; demonstrated product management of an operational analytics tool for technical end users

**Context:** SeeQ is an advanced analytics platform for operational data — it connects to process historians (OSIsoft PI, Honeywell, Aspen) and allows engineers and reliability teams to analyze time-series OT data, build condition-based monitoring calculations, and investigate process events without requiring SCADA/historian access or data engineering support. Erika was PM on TC Energy's SeeQ implementation.

**What SeeQ does:**
- Self-service analytics for engineers: drag-and-drop signal analysis, trend visualization, signal arithmetic, and statistical calculations on historian data — without writing SQL or scripting
- Condition-based monitoring: engineers define threshold conditions (e.g., "compressor discharge temperature > 85°C for more than 30 minutes") and SeeQ generates alerts, event annotations, and performance summaries — extending monitoring beyond what's configured in SCADA
- Investigation workflows: when an alarm or process event occurs, engineers can pull the relevant signals in SeeQ, overlay them on a timeline, calculate correlations, and document the analysis as a SeeQ workbook — a living record of the investigation
- Integration with process historians: SeeQ connects directly to OSIsoft PI (the dominant historian in oil and gas) and other historians via standard connectors — no data movement required

**What Erika delivered as PM:**
- Stakeholder engagement with reliability engineers and process engineers to identify target use cases for SeeQ (which monitoring problems were hardest to solve in SCADA? Which analyses did engineers run manually in Excel that SeeQ could automate?)
- Prioritized rollout by use case: compressor performance monitoring, pump efficiency trending, heat exchanger fouling detection, pipeline integrity monitoring
- Adoption plan: SeeQ requires engineers to learn a new analysis paradigm — structured onboarding (SeeQ Academy modules + facilitated workshops on target use cases), champion identification in each engineering group, feedback loops to iterate on workbook templates
- Integration design: historian connectivity (which PI servers, what tag access), SeeQ server architecture (on-prem vs. SeeQ Cloud), user access model
- Business case: framed value as reduction in time-to-insight for reliability investigations (hours/days in Excel → minutes in SeeQ), and reduction in SCADA/historian admin load (engineers self-serve rather than requesting historian queries from IT)

**Key capability demonstrated:** PM on an operational analytics platform — understands how engineers consume OT data, what self-service analytics means in an industrial context, and how to drive adoption of a technical tool with a technical but non-IT user base. Directly relevant to operational data platform PM roles (AVEVA PI Vision, AspenTech, Seeq, Uptake, SparkCognition, C3.ai) and industrial analytics software companies.

---

## Shell Canada -- Service Operations (2010-2013)

**Hero metrics:** ~$90K in annual cost savings from service management improvement initiatives; KPI reporting for service desk performance and SLA management

**PI System experience:** Developed KPI reporting and analytics for service desk performance — direct experience with PI System (OSIsoft/AVEVA), which is the operational data backbone for most energy companies. Relevant to AVEVA/OSIsoft PM roles.
