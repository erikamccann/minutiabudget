# Minutia Budget — Principal Architecture Review

**Scope:** the full ecosystem visible in this account — `minutiabudget` (including the
unmerged prototype on `codex/build-minutia-budget-personal-finance-app`, PR #1, and the
unrelated content on `claude/career-ops-setup-8dwLI`, PR #2) and `paprika-home-assistant`
(vision only; reviewed separately in that repo's `docs/ARCHITECTURE.md`).

**Posture:** first-principles, no sunk costs. The recommendations below assume everything
is open to redesign.

---

## 1. Executive summary

The product idea is genuinely strong and differentiated: *weekly-first budgeting, cash-based
clarity, explainable math, "on this date, am I safe?"*. That framing is better than what most
commercial budget apps ship, and it should be treated as the durable asset.

The prototype on PR #1, however, is a **facade, not a foundation**:

- Every API route returns hardcoded sample data. Prisma is a dependency but is **never
  imported anywhere** in the application.
- The Prisma schema fails validation with **21 errors** (`prisma validate`, verified during
  this review) — it has never been run against a database.
- NextAuth is configured but has no adapter, no session enforcement, and no user scoping on
  any route. Zod is declared as a dependency and never used.
- All money is `Float` — disqualifying for financial software before any other discussion.

The right response is not to "fix" PR #1 incrementally, and not to over-correct into a
distributed system. The recommendation is a **modular monolith**: a single Next.js
application around a **pure, framework-free TypeScript finance engine** (the crown jewel),
a **ledger-style Postgres schema with integer-cents money**, and authorization enforced
structurally rather than by convention. Salvage the product thinking and a handful of domain
functions from PR #1; do not merge it as-is.

At ecosystem level: `minutiabudget` and `paprika-home-assistant` share a theme ("household
operations") but must **not** share a platform. The single biggest ecosystem-level fix is
repo hygiene: PR #2 puts an entire personal job-search corpus (CVs, cover letters, company
research) inside a product repo — it belongs in its own private repo and PR #2 should be
closed.

---

## 2. What exists today (evidence)

| Surface | State |
|---|---|
| `main` | Empty (README only) |
| PR #1 (`codex/...`) | Next.js 14 App Router + Tailwind UI, ~30 files, sample-data-driven |
| PR #2 (`claude/career-ops-setup...`) | Job-application tooling and documents; unrelated to the product |
| `paprika-home-assistant` | README + LICENSE only |

Findings from reading every file on PR #1:

**F1 — No persistence (critical).** `src/app/api/*/route.ts` handlers all `import` from
`src/lib/sampleData.ts` and return it. There are no writes anywhere. The app renders the
same demo numbers for every visitor, forever.

**F2 — Schema never validated (critical).** `prisma/schema.prisma` produces 21 validation
errors: `Transaction.category/loan/event` and all three `RecurringRule` relations declare a
relation field plus a scalar FK without `@relation(fields: …, references: …)`, and several
back-relations are missing. Beyond validity: no `@@unique` constraints (e.g. one
`WeeklyBudget` per user per `weekStart`), no indexes, no `onDelete` behavior, no
`createdAt`/`updatedAt`, and `Account.balance` is stored mutable state rather than derived
from the ledger.

**F3 — Float money (critical).** Every monetary field in schema and types is
`Float`/`number`, and `src/lib/finance.ts` repeatedly round-trips through
`Number(x.toFixed(2))`, which *accumulates* rounding drift rather than controlling it. A
budgeting product whose pitch is "explainable math" cannot have cents that don't add up.

**F4 — No authorization (critical once persistence exists).** NextAuth has two providers but
no database adapter (so the Email provider cannot even function — it requires one), no
`getServerSession` call anywhere, and no route checks identity. The schema is multi-tenant
(`userId` on every model) but nothing enforces tenancy.

**F5 — Domain math is not yet trustworthy (high).** Examples from `finance.ts`:
- `buildAmortizationSchedule` advances dates by `addDays(start, 30 * i)` — months are not
  30 days; a 30-year schedule drifts ~5.5 months. The final payment is not adjusted, so the
  balance can go negative. `computeLoanPayment` ignores `paymentFrequency` entirely and
  assumes monthly compounding — Canadian fixed-rate mortgages (which the `termYears` vs
  `amortizationYears` split strongly implies) compound semi-annually.
- `calculateRunningBalance` sorts its input with `Array.prototype.sort` (mutates the
  caller's array) and treats everything except `INCOME` as an outflow — a `TRANSFER`
  between own accounts would wrongly reduce net cash.
- `creditCardAccruals` ignores interest.

**F6 — Tests assert the demo, not the domain (medium).** The four Jest tests pin exact
values of the sample data (`toBeCloseTo(116)`) or assert almost nothing
(`monthlyPayment > 0`). Playwright is in `package.json` with no config and no tests. There
is no CI.

**F7 — Schema drift by design (medium).** Only `prisma db push` is scripted — no
migrations. For an app holding financial history, unversioned schema changes are a data-loss
mechanism.

**F8 — Repo hygiene (medium, ecosystem-level).** PR #2 adds ~80 files of personal career
material — including duplicated trees (`career-ops/` and a second copy at the root) — to a
product repository. Personal documents deserve their own private repo; products deserve a
history that is about the product.

---

## 3. First-principles framing

Before choosing an architecture, be honest about the actual operating point:

- **Users:** one household today; realistically tens-to-thousands if it ever becomes a
  product. Never "millions of devices."
- **Data:** small (a lifetime of personal transactions is < 100k rows), but **precious** —
  correctness and durability matter far more than throughput.
- **Team:** one person. Every component added is a component *you* operate at 11pm.
- **Differentiator:** the *model* (weekly windows, safety-first allocation, explainability),
  not the plumbing.

The world-class move at this operating point is the same one Basecamp, Stripe's early
internal tools, and most successful indie SaaS made: **one deployable, ruthless internal
modularity, obsessive correctness at the data layer**. Microservices, queues, and separate
API tiers would add operational surface with zero benefit here. The architecture must
instead protect the two things that are expensive to retrofit: **money correctness** and
**tenancy enforcement** — and keep the domain engine portable for the one likely future
fork in the road (a mobile client).

---

## 4. Options considered

| Option | Verdict | Why |
|---|---|---|
| **A. Patch PR #1 incrementally** | ❌ | The gaps are structural (money type, schema validity, authz, persistence). "Wiring up" the facade rebuilds ~80% of it anyway, while inheriting its defects as constraints. |
| **B. SPA + separate API service (e.g. React + NestJS/Go)** | ❌ | Two deployables, CORS/auth/token plumbing, duplicated types — pure overhead at this scale. Justified only if third-party API consumers appear. |
| **C. Local-first (SQLite/CRDT, e.g. ElectricSQL/Turso)** | ◑ | Genuinely attractive for a privacy-first finance app (data never leaves the device) and worth revisiting for mobile. Rejected for v1: sync engines are the hardest part of the stack, and multi-device household sharing (two partners, one budget) is a likely early requirement that CRDT budget math makes hard. |
| **D. Modular monolith: Next.js + pure domain package + Postgres** | ✅ | One deployable, server-rendered, types shared end-to-end, domain engine isolated and portable. Cheapest to operate, hardest parts (money, tenancy) addressed structurally. |

**Recommendation: D**, structured so C's benefits (portable domain engine) are preserved.

---

## 5. Target architecture

```
minutiabudget/
├── packages/
│   └── domain/                 # THE PRODUCT. Pure TS, zero dependencies on Next/Prisma/DOM
│       ├── src/money.ts        # Money as integer minor units (bigint cents) + currency
│       ├── src/week.ts         # Weekly window engine (weekStartsOn, carryover, transfers)
│       ├── src/ledger.ts       # Double-entry postings; balances are ALWAYS derived
│       ├── src/loans.ts        # Amortization (real calendar months, per-frequency,
│       │                       #   semi-annual compounding option for CA mortgages,
│       │                       #   adjusted final payment)
│       ├── src/forecast.ts     # "Am I safe on date X?" — obligations vs income vs floor
│       ├── src/allocate.ts     # Guardrailed allocation planning (floor-respecting)
│       └── test/               # Unit + property-based tests (fast-check): e.g.
│                               #   "schedule principal portions sum exactly to principal",
│                               #   "no plan ever breaches minimumCash"
└── apps/
    └── web/                    # Next.js App Router shell — replaceable
        ├── app/                # Routes; UI language stays "no guilt, only guidance"
        ├── server/
        │   ├── auth.ts         # Auth.js (NextAuth v5) + Prisma adapter, DB sessions
        │   ├── db.ts           # Prisma client
        │   └── repo/           # The ONLY module allowed to touch Prisma.
        │                       # Every function's first parameter is the session's userId;
        │                       # nothing exports an unscoped query.
        ├── actions/            # Server Actions: Zod-validate → repo → domain → return
        └── prisma/
            ├── schema.prisma
            └── migrations/     # prisma migrate, never db push, from day one
```

Key decisions and their reasoning:

**5.1 Money = integer minor units, everywhere.** `bigint` cents in TypeScript, `BIGINT` (or
`DECIMAL(19,4)`) in Postgres, a `Money` value object in the domain package that makes
`Money + number` a type error. All rounding happens in exactly one module with an explicit
policy (banker's rounding for splits, residual-to-last-installment for amortization). This
single decision is what makes "explainable math" actually true.

**5.2 Ledger-first data model.** Transactions are immutable double-entry postings
(corrections are reversing entries, not edits); `Account.balance` disappears as stored
state and becomes a derived (optionally materialized) value. This gives you audit trails,
trivially correct transfers (one transaction, two legs — fixing F5's transfer bug by
construction), and time-travel ("what was my balance on March 3?") for free. It is also the
schema shape a future bank-import feature (Plaid/Flinks for Canada, behind a port interface)
lands on cleanly.

**5.3 Tenancy enforced structurally, not by discipline.** All Prisma access lives in
`server/repo/`, whose functions require a `userId` and compose it into every `where`. Add
Postgres **Row-Level Security** keyed on a per-request `SET app.user_id` as a second,
independent wall. A solo developer will eventually forget a `where userId:` — the
architecture should make that forgetfulness harmless.

**5.4 Auth.** Auth.js v5 with the Prisma adapter and database sessions. Passkeys or Google
only; drop the Email (magic link) provider until an SMTP story exists (it silently cannot
work today — F4).

**5.5 Validation at the boundary.** Every Server Action / route handler parses input with
Zod before anything else. The domain package defines the schemas; the web app imports them —
one source of truth for shapes, shared with any future client.

**5.6 Hosting.** One Next.js app on Vercel/Fly + managed Postgres with PITR (Neon or
Supabase-as-Postgres). Nightly logical backups to object storage you control — this is
family financial data; backup restore should be *tested*, not assumed.

**5.7 Quality gates.** GitHub Actions on every PR: typecheck, lint, domain tests
(unit + property), `prisma validate` + migration diff check (F2 would have been caught by
the cheapest possible CI), and a smoke build. Sentry (or equivalent) for runtime errors.

---

## 6. What to salvage from PR #1

**Keep (port into `packages/domain` with tests):** the product principles in the README;
the conceptual shapes of `calculateWeeklyAvailability`, `computeSafeAllocationSpace`,
`buildAllocationPlan`, `projectCashRequirements` (their *intent* is right — rewrite on
Money, fix the math per F5); the Tailwind visual language and the "no guilt" copy.

**Drop:** the sample-data API layer, the invalid schema (redesign per §5.2), Float money,
the demo-pinned tests.

**Process:** close PR #1 with a comment linking this review; close PR #2 and move
`career-ops/` to its own private repo (`git filter-repo` if history matters, plain copy if
not).

---

## 7. Roadmap (each milestone is shippable)

1. **M0 — Hygiene:** close PRs #1/#2, relocate career-ops, add CI skeleton.
2. **M1 — Domain engine:** `packages/domain` with Money, week engine, forecast; property
   tests green. *(This is pure logic — highest value, zero infrastructure.)*
3. **M2 — Persistence + auth:** valid migrated schema, repo layer, Auth.js, RLS. Manual
   transaction entry end-to-end for one real household week.
4. **M3 — The product:** weekly board, safe-to-spend, allocation guardrails, loan view —
   UI from PR #1's design language, numbers from the domain engine.
5. **M4 — Trust:** backups + restore drill, Sentry, recurring rules, CSV import.
6. **M5+ (optional, demand-driven):** bank import behind a port; Expo mobile app reusing
   `packages/domain` unchanged — the payoff of §5's isolation.

---

## 8. Ecosystem-level guidance

- **Do not platformize.** Minutia and the Paprika integration share an author, not a
  runtime. No shared services, no shared database, no monorepo across products. Share only
  *practices*: CI templates, release discipline, this review format.
- **Privacy is the brand.** Both products handle intimate household data (finances, what
  your family eats). "Your data stays yours" is a durable differentiator and should be a
  stated constraint in every future design decision (it is why option C stays on the
  radar).
- The Paprika integration's own first-principles design — including why it should be a
  Home Assistant custom integration with a coordinator + `todo`/`calendar` entities and a
  separately published API client library — is in that repo's `docs/ARCHITECTURE.md`.
