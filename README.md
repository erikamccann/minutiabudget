# Minutia Budget

Production-ready personal finance companion focused on explainability, weekly budgeting, and cash-based clarity. Built with Next.js (App Router), Prisma/Postgres, NextAuth, Tailwind, Recharts, Zod, Jest, and Playwright.

## Getting started
1. Install dependencies: `npm install`
2. Set environment variables in `.env.local` (examples below).
3. Generate Prisma client and sync schema: `npm run db:generate && npm run db:push`
4. Run the dev server: `npm run dev`

### Environment variables
```
DATABASE_URL="postgresql://user:password@localhost:5432/minutiabudget"
EMAIL_SERVER="smtp://user:pass@mailhost"
EMAIL_FROM="noreply@example.com"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## Testing
- Unit tests: `npm test`
- (Optional) End-to-end: `npm run test:playwright`

## Core principles implemented
- **Weekly-first budgeting:** Fixed seven-day windows with category-level availability, carryover flags, and transfer audit trails.
- **Cash-based clarity:** Transactions emphasize cash movement; payments are never treated as transfers.
- **Explainable math:** Loan amortization, allocation guardrails, and cash requirements are derived with transparent helper functions.
- **No guilt, only guidance:** UI language and cards focus on safety, options, and reversibility.

## Project structure
```
src/
  app/              # Next.js App Router routes (dashboard, budget, transactions, assets, events, calendar)
  components/       # UI building blocks (budget table, metric cards)
  lib/              # Finance math, sample data
  styles/           # Tailwind globals
prisma/schema.prisma # Database schema
```

Minutia answers one question: **“On this date, am I safe — and if yes, what can I do with the extra?”**
