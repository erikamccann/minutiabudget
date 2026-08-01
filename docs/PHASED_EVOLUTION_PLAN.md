# Phased Evolution Plan — a CTO's Re-read of the Architecture Review

**Companion to:** `docs/ARCHITECTURE_REVIEW.md` (the "ideal long-term architecture").
**Lens:** an operator who has taken products from prototype to global scale, optimizing for
evolutionary architecture — each phase builds on the last, no phase requires a rewrite.
**Scope note:** this plan treats the reviewed ecosystem as the product under evaluation,
with Minutia Budget as the commercial candidate and the Paprika integration as a
community/open-source track (§7).

---

## 1. The organizing principle: buy options, not infrastructure

The review's target architecture survives this re-read almost intact — not because it was
maximal, but because it was already minimal in the dimension that matters. The honest CTO
finding is different from the usual "cut scope" exercise:

> **The strongest long-term architecture and the cheapest iterative path are the same path,
> provided the ~six irreversible decisions are made correctly at the start.** Everything
> else in the review is a *capability with a natural phase*, and pulling it earlier than its
> phase is where premature complexity would creep in.

Irreversible decisions are cheap to make correctly on day one and ruinously expensive to
change later, because they are encoded into *data* (which accumulates) rather than *code*
(which is replaceable). The plan below therefore front-loads data-shape decisions and
back-loads everything operational.

---

## 2. Irreversible decisions — make these correctly in Phase 1

These are ordered by cost-to-reverse. Each is encoded in stored data or in public promises,
which is what makes it irreversible; code is never the reason.

**I1 — Money representation.** Integer minor units + ISO currency code *on every monetary
value*, from the first row ever written. Retrofit cost: rewriting every stored amount plus
re-deriving every historical calculation users have already seen — you cannot silently
change numbers in a finance app people trust. Carrying `currency` from day one (even while
hardcoded to `CAD`) is what makes Phase 5 multi-currency a feature instead of a migration.

**I2 — Ledger immutability.** Transactions as append-only double-entry postings;
corrections are reversing entries; balances always derived. Retrofit cost: **infinite** —
you cannot reconstruct an audit history you never recorded. This is also the cheapest
possible time to adopt it: an immutable ledger is *less* code than mutable balances (no
update paths, no balance-drift bugs).

**I3 — Tenancy root = household, not user.** *(A correction to the review, in the right
direction.)* The review keyed every row on `userId`. The product's own thesis — a shared
weekly budget — makes the natural tenant a **household** with N member users. Re-rooting
tenancy later is the classic brutal migration (touches every table, every query, every
authz check). Smallest correct form: a `Household` table, membership join table, and
`householdId` on every domain row. In Phase 1 each household has one member; the schema
cost is one table and one column rename.

**I4 — Time semantics.** All instants stored as UTC; the household's IANA timezone and
`weekStartsOn` stored explicitly; **week boundaries always computed in household-local
time inside the domain engine**. For a *weekly-first* product, the week boundary is the
core primitive — get it wrong and every historical week's numbers shift when a user
travels or DST flips. Retrofit cost: reinterpreting all historical windows. Cost now: one
decision and ~50 lines in `packages/domain/week.ts`.

**I5 — Domain/shell separation.** The pure `packages/domain` engine with zero
framework/DB imports. Strictly this is code, not data — but it is irreversible *in
practice*: once finance math is smeared through route handlers and components, no one ever
un-smears it (PR #1 was already on that path). It is also the enabler for the Phase 5
mobile client and for testing money math without infrastructure.

**I6 — Privacy posture and data minimization.** Collect the minimum, state it publicly,
design analytics around aggregates from the start. Irreversible because you cannot
un-collect data or un-make brand promises, and because Phase 4 compliance (PIPEDA/GDPR)
prices every field you hoarded. Also irreversible in the market sense: "your money data
stays yours" is only credible if it was always true.

**I7 — Schema change discipline.** Append-only migration history (`prisma migrate`) from
the first table. Not a capability — a habit. Habits are the only thing harder to retrofit
than data.

Also decided early but *cheap*: globally-unique non-sequential IDs (UUIDv7/cuid2 — enables
future sharding, offline clients, and merges without coordination).

---

## 3. Reversible decisions — allowed to be "merely good" and to evolve

Everything below is behind an interface or is pure code; swapping any of them strands no
data. Choose pragmatically, revisit freely.

| Decision | Current choice | Why it can evolve |
|---|---|---|
| Hosting | Vercel/Fly + Neon free tier | Stateless app + standard Postgres = portable by construction |
| ORM | Prisma | Confined to the repo layer (I5's cousin); replaceable with Drizzle/raw SQL module-by-module |
| UI framework & styling | Next.js App Router + Tailwind | The shell, not the product; domain engine doesn't know it exists |
| Auth providers | Google/passkeys via Auth.js | Provider list and even auth vendor swap behind session abstraction |
| Bank aggregator | none → Flinks/Plaid | Explicit port interface from the day it's introduced (Phase 4) |
| Observability, CI, error tracking vendors | GitHub Actions, Sentry | Commodity; migrate any weekend |
| Charting, email, billing vendors | Recharts, —, Stripe later | Commodity |
| Paprika distribution | HACS | Core submission later changes packaging, not architecture |

The deliberate pattern: **irreversible = data shapes and public promises; reversible =
vendors and frameworks.** Any new decision should be sorted into these buckets before it's
made.

---

## 4. Stage-gating every prior recommendation

The eight review questions, answered per recommendation. "Smallest form" = the minimum
implementation that preserves the long-term architecture.

| Recommendation (review §) | Required now? | Introduce | Smallest form now | Assumptions justifying delay |
|---|---|---|---|---|
| Money as integer cents (5.1) | **Yes — I1** | Phase 1 | `Money` type + `bigint` cents + `currency` column, CAD hardcoded | none — cannot be delayed |
| Ledger-first schema (5.2) | **Yes — I2** | Phase 1 | Append-only postings; balances computed on read (no materialization) | Materialized/cached balances wait until read volume hurts (P4+) |
| Household tenancy (I3, new) | **Yes** | Phase 1 | One household, one member; `householdId` everywhere | Invites/roles/permissions UI waits for P2–P3 |
| Repo layer scoping (5.3a) | **Yes** | Phase 1 | All queries through `repo/` functions requiring `householdId` | trivially cheap; no reason to delay |
| Postgres RLS second wall (5.3b) | No | **Phase 3 entry gate** | — | Until strangers' data is in the DB, RLS defends you from you; the repo layer already does that. RLS becomes mandatory the day pilot household #2 signs up |
| Auth.js + DB sessions (5.4) | Partially | Phase 2 | Phase 1: none (localhost, founder-only). Phase 2: Google/passkey, single provider | P1 has no network-exposed deployment; adding auth to a Next.js app later is additive, not structural |
| Zod at boundaries (5.5) | **Yes** | Phase 1 | Schemas live in `packages/domain`; every action parses | Cheap now, expensive to retrofit across N endpoints |
| Managed Postgres + PITR (5.6a) | Partially | Phase 2–3 | P1: Neon free tier (Postgres from day one — never switch engines mid-flight; dialect drift is a stealth rewrite). PITR + tested restores at P3 gate | P1 data is one household's and re-enterable; strangers' data is not |
| Backup restore drills (5.6b) | No | **Phase 3 entry gate**, then quarterly | — | Same as above |
| CI: typecheck/lint/test/`prisma validate` (5.7a) | **Yes** | Phase 1 | One workflow file, <1 day | Would have caught the 21-error schema; the cheapest insurance in this plan |
| Property-based domain tests (5.7b) | Partially | Phase 1–2 | P1: 3–5 invariants on money/ledger/week only ("postings sum to zero", "no plan breaches floor") | Exhaustive coverage grows with the engine; invariants on I1/I2/I4 cannot wait |
| Sentry/error monitoring (5.7c) | No | Phase 3 | — | With 1 user (you), the error report is your own annoyance |
| Bank import behind a port (M5) | No | **Phase 4** | Define nothing now except keeping ingestion behind `repo/` | Manual + CSV entry is *product-positive* early (forces the explainability UX); aggregator contracts and cost only make sense with revenue in sight |
| Mobile app / Expo (M5) | No | Phase 5 | I5 *is* the smallest form — a domain engine a future client can import | Web-responsive covers P1–P4; mobile before retention data is decoration |
| SOC 2 / compliance program | No | Phase 4 (start evidence collection at P3) | P3: access logs, least-privilege, written data policy | Certification without customers is theater; *practices* without certification are cheap and start early |
| Multi-currency, i18n | No | Phase 5 | `currency` column since P1 (I1) | Single-market focus until commercial traction |
| Career-ops relocation, close PR #1/#2 (§6) | **Yes** | Phase 1 (M0) | — | none — hygiene, one hour |

**Where extra effort compounds:** the domain engine and its invariant tests (every future
client and feature rides on it), the ledger (audit, sync, trust), the boundary schemas
(shared with every future client), CI (catches whole classes of PR-#1-style facades).

**Where effort would be premature complexity today:** RLS before external users;
microservices/queues at any phase visible from here; caching/materialized balances before
measured read pain; Kubernetes or IaC before Phase 4; design systems beyond Tailwind
conventions; multi-region before Phase 5; building an aggregator integration before the
manual-entry product proves retention.

---

## 5. The phased plan

Phases gate on **evidence, not calendars**. Durations are planning guides only.

---

### Phase 1 — Prototype *(~4–6 weeks of nights-and-weekends equivalent)*

- **Objective:** prove the weekly-safety model produces trustworthy, explainable numbers
  for one real household — yours.
- **Capabilities:** manual transaction entry, weekly board with carryover/transfers,
  safe-to-spend, allocation guardrails, one loan view. Nothing else.
- **Architecture:** the irreversible seven (I1–I7) and nothing speculative:
  `packages/domain` (Money, ledger, week engine, forecast) + Next.js shell + Prisma/
  Postgres (Neon free tier) + migrations + Zod boundaries + minimal CI. No auth beyond
  localhost. Salvage PR #1's visual language and copy.
- **Engineering priorities:** domain invariant tests green; every number on screen
  traceable to postings; M0 hygiene (close PRs #1/#2, relocate career-ops).
- **Team:** founder + AI-assisted development. No hires.
- **Milestones:** M0 hygiene done → domain engine with invariants → first real week
  entered → four consecutive real weeks tracked.
- **Technical risks:** week-boundary semantics subtly wrong (mitigate: property tests
  across DST transitions *now*, per I4); over-building the shell (mitigate: capability
  list above is a ceiling, not a floor).
- **Exit criteria:** your household's actual month reconciles to the cent against the bank
  statement; you trust its "am I safe?" answer more than your spreadsheet; zero
  domain-invariant violations.

---

### Phase 2 — MVP *(~2–3 months)*

- **Objective:** the product becomes your household's *only* budgeting tool — a daily
  driver, not a demo — and supports two members of one household.
- **Capabilities:** auth (Google/passkey), partner invite (exercises I3 for real),
  recurring rules, CSV import, events/goals with allocations, mobile-responsive UI.
- **Architecture:** unchanged shape. Auth.js + DB sessions; deploy to Vercel/Fly; nightly
  logical backups (untested restores acceptable *only* in this phase).
- **Engineering priorities:** remove daily-use friction (entry speed is the retention
  feature for manual-entry finance apps); harden the repo layer; widen invariant coverage.
- **Team:** founder. Possibly a design review from a contractor (one-off).
- **Milestones:** partner actively co-using → 8 consecutive weeks of exclusive use → CSV
  import of a full bank history.
- **Technical risks:** two-writer conflicts on one budget (mitigate: last-write-wins with
  the ledger as arbiter — the immutable log makes conflicts visible instead of silent);
  motivation decay (mitigate: shippable milestones, public-ish changelog).
- **Exit criteria:** 8+ weeks exclusive household use; a stranger can sign up, onboard,
  and enter a week unassisted (test with one friend); you'd hand your data to this app
  over your spreadsheet permanently.

---

### Phase 3 — Pilot *(~3–6 months, 10–100 external households)*

- **Objective:** prove the model transfers to households that don't share your bed or your
  patience — retention and willingness-to-pay signals.
- **Capabilities:** self-serve onboarding, waitlist, in-app feedback, email digests
  ("your week starts tomorrow; you're safe through Friday").
- **Architecture — the P3 entry gate, all before household #2's data arrives:** Postgres
  RLS enabled (5.3b); PITR + a *performed* restore drill; Sentry; basic product analytics
  (aggregate-only, per I6); rate limiting. Still one deployable, one database.
- **Engineering priorities:** onboarding funnel; support loop (you are support); start the
  compliance evidence habit (access control, data policy, logs) *without* pursuing
  certification.
- **Team:** founder + part-time design contractor; a fractional advisor for
  pricing/fintech-compliance questions. Still no full-time hires.
- **Milestones:** first external household → first household you've never met → first
  "would you pay?" conversations → pricing page test.
- **Technical risks:** a tenancy leak, now catastrophic (mitigate: RLS + repo layer =
  two independent walls, plus a leak-hunting test that queries as household A for
  household B's rows in CI); support load drowning development (mitigate: cap the pilot,
  waitlist the rest).
- **Exit criteria:** ≥40% of onboarded households still entering transactions at week 8;
  ≥N credible payment commitments (pick N before the phase starts, in writing, to keep
  yourself honest); zero cross-tenant incidents; restore drill documented.

---

### Phase 4 — Commercial Launch *(~6–12 months)*

- **Objective:** a paying, self-sustaining product in one market (Canada first — the
  domain engine already speaks Canadian mortgage semantics).
- **Capabilities:** billing (Stripe), bank import via **Flinks behind the aggregator
  port** (the port interface is designed in this phase, not before — designed against a
  real vendor, not speculation), plan tiers, account deletion/export (regulatory and
  brand-consistent per I6).
- **Architecture:** still a modular monolith — this plan contains **no microservices
  phase**, deliberately; nothing in a finance app of this shape earns them before
  well past Phase 5's horizon. Additions: job runner for imports/digests (a worker
  process on the same codebase, not a new service), staging environment, IaC for what
  now exists, SLOs + oncall (a rotation of the whole two-to-four-person team),
  SOC 2 Type I underway, PIPEDA compliance done.
- **Engineering priorities:** import reliability (the #1 churn driver in this category),
  billing correctness (dogfood the ledger: your own revenue lives in double-entry too),
  performance budgets on the weekly board.
- **Team:** first hires — one senior product engineer, one engineer with data/infra
  lean; fractional compliance; founder shifts toward product/GTM. 3–5 people total.
- **Milestones:** first paid conversion → aggregator integration GA → SOC 2 Type I →
  public launch.
- **Technical risks:** aggregator dependency and cost structure (mitigate: the port keeps
  Plaid as a credible second source; manual entry remains a first-class fallback — it's
  the brand, not a degraded mode); hiring before revenue supports it (mitigate: contract-
  to-hire, revenue-gated offers).
- **Exit criteria:** revenue covers infrastructure + one salary; churn measured and
  bounded; import success rate >99% weekly; the founder can take a two-week vacation.

---

### Phase 5 — Global Scale *(only if Phase 4 earns it)*

- **Objective:** category leadership — multi-market, multi-platform, a decade-sound core.
- **Capabilities:** multi-currency (activating the column carried since Phase 1),
  additional aggregators per market via the port, **mobile apps reusing
  `packages/domain` unchanged** (the Phase 1 decision paying its dividend), possibly a
  public API for the household-operations ecosystem.
- **Architecture:** scale the monolith first (read replicas, materialized balance
  projections off the ledger — cheap now *because* the ledger is the source of truth,
  CDN/edge for the shell). Extract a service only when a specific, measured constraint
  demands it — the first legitimate candidate is aggregator ingestion (spiky, third-party-
  bound, isolatable behind the existing port). Data residency per market as required.
- **Engineering priorities:** reliability engineering as a discipline (error budgets),
  migration tooling maturity, i18n, platform hardening.
- **Team:** 8–20 across 2–3 product pods + a platform pod; dedicated
  security/compliance owner; SOC 2 Type II.
- **Milestones:** second market live → mobile GA → first external API consumer.
- **Technical risks:** premature extraction into services (mitigate: extraction requires
  a written measured-constraint justification); core team attrition taking I1–I7 context
  (mitigate: these two documents, ADRs from Phase 1 onward, invariant tests as executable
  law).
- **Exit criteria:** n/a — this phase is the operating state. The gate to *enter* it:
  Phase 4 unit economics positive and a deliberate expansion decision, not drift.

---

## 6. Where the CTO lens changed the original review

Honest deltas, so the two documents read as one evolving position:

1. **Tenancy root moved from user to household (I3)** — a genuine correction, and the one
   place the review's "correct from day one" schema was not correct enough.
2. **Time semantics promoted to irreversible (I4)** — implicit in the review's week
   engine, now explicit, because it's a data-reinterpretation risk.
3. **RLS, PITR drills, Sentry deferred to the Phase 3 entry gate** — the review implied
   "day one"; the CTO lens says they're mandatory *before strangers' data*, and idle
   weight before that.
4. **Auth deferred out of Phase 1 entirely** — localhost needs no login.
5. **The aggregator port is designed in Phase 4, not sketched earlier** — interfaces
   designed against imaginary vendors are usually wrong; the *placement* (all ingestion
   behind `repo/`) is preserved from Phase 1, which is what actually protects the option.
6. **Explicit no-microservices commitment through Phase 5's horizon**, with a written-
   justification rule for any extraction — turning the review's preference into a
   governance mechanism.
7. Everything else — money, ledger, domain isolation, Zod boundaries, migrations, CI,
   Postgres-from-day-one — survives unchanged: it was already the minimal form of the
   long-term architecture.

---

## 7. The Paprika track (parallel, deliberately unmerged)

The phased logic applies with one twist: Paprika is an **open-source community product**,
so its "commercial launch" is HACS adoption and its "global scale" is (at most) HA Core.
Its phases: **P1** client library with fixtures → **P2** read-only integration for your
own home → **P3** HACS beta (external users = the pilot) → **P4** write path + reauth +
1.0 → **P5** core-quality maturity. Its irreversible set is smaller: the client-library
separation (its I5), config-entry-only credentials (its I6), and idempotent write UIDs
(its I2 analog). It shares no runtime with Minutia at any phase — the ecosystem's
"platform" remains practices, not services. Its budget is strictly nights-and-weekends
surplus; it must never compete with Minutia phase gates for founder attention.

---

## 8. Summary for the decade

Make seven decisions correctly now — money, ledger, household tenancy, time, domain
isolation, privacy, migrations — because they live in data and promises. Rent or defer
everything else, because it lives in code and contracts. Gate phases on evidence
(reconciliation, retention, revenue), never on calendar or excitement. And hold one
governance rule above the rest: **any proposal to add an architectural component must
name the phase gate that demands it.** That rule, applied for ten years, is the whole
strategy.
