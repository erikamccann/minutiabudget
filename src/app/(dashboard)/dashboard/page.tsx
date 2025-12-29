import { format } from "date-fns";
import { BudgetSummary } from "@/components/BudgetSummary";
import { MetricCard } from "@/components/MetricCard";
import { buildAllocationPlan, computePaymentBreakdown, projectCashRequirements } from "@/lib/finance";
import { allocations, events, transactions, weeklyBudget } from "@/lib/sampleData";

export default function DashboardPage() {
  const { accruals, payments } = computePaymentBreakdown(transactions);
  const cashForecast = projectCashRequirements({
    obligations: [
      { label: "Upcoming bills", date: weeklyBudget.weekEnd, amount: 320 },
      { label: "Loan payments", date: weeklyBudget.weekEnd, amount: payments["loan-1"] || 0 },
    ],
    expectedIncome: [{ label: "Paycheck", date: weeklyBudget.weekStart, amount: 1200 }],
    allocations: allocations.map((a) => ({ label: a.eventId, date: a.date, amount: a.amount })),
    currentCash: 1800,
    includePlannedSpend: true,
  });

  const allocationPlan = buildAllocationPlan(allocations, 500, cashForecast.projectedCash);

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase text-primary-foreground">Dashboard</p>
        <h1 className="text-3xl">Are we safe, and what can we do with the extra?</h1>
        <p className="text-slate-700 max-w-2xl">
          Track weekly availability, cash runway, and allocations in one place. Every number is derived from
          explicit math and can be traced back to transactions or rules.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard
          label="Safe-to-spend through"
          value={format(weeklyBudget.weekEnd, "MMM d")}
          helper="Based on obligations, allocations, and expected income"
        />
        <MetricCard
          label="Projected cash at end of week"
          value={`$${cashForecast.projectedCash.toFixed(2)}`}
          tone={cashForecast.projectedCash >= 0 ? "success" : "danger"}
          helper="Includes planned spend and allocations"
        />
        <MetricCard
          label="Excess cash available"
          value={`$${cashForecast.excess.toFixed(2)}`}
          tone={cashForecast.excess > 0 ? "success" : "warning"}
          helper="Anything above required cash and buffer"
        />
      </div>

      <BudgetSummary />

      <section className="card p-6 space-y-4">
        <header className="section-heading">
          <div>
            <p className="text-sm text-slate-600">Allocations keep goals funded without breaking cash safety</p>
            <h2 className="text-xl">Allocation guardrails</h2>
          </div>
          <p className="text-sm text-slate-600">Minimum cash reserved: $500</p>
        </header>
        <div className="grid grid-cols-3 text-sm font-semibold text-slate-600">
          <span>Destination</span>
          <span className="text-right">Amount</span>
          <span className="text-right">Status</span>
        </div>
        {allocationPlan.approved.map((allocation) => {
          const destination = events.find((e) => e.id === allocation.eventId);
          return (
            <div key={allocation.id} className="grid grid-cols-3 py-2 text-sm border-t border-slate-100">
              <span>{destination?.name}</span>
              <span className="text-right">${allocation.amount.toFixed(2)}</span>
              <span className="text-right text-supportive">Approved</span>
            </div>
          );
        })}
        {allocationPlan.rejected.map((allocation) => {
          const destination = events.find((e) => e.id === allocation.eventId);
          return (
            <div key={allocation.id} className="grid grid-cols-3 py-2 text-sm border-t border-slate-100">
              <span>{destination?.name}</span>
              <span className="text-right">${allocation.amount.toFixed(2)}</span>
              <span className="text-right text-danger">Blocked by cash floor</span>
            </div>
          );
        })}
        <div className="pt-3 border-t border-slate-200 text-sm text-slate-700">
          Remaining cash after allocations: ${allocationPlan.remainingCash.toFixed(2)}
        </div>
      </section>

      <section className="card p-6 space-y-4">
        <header className="section-heading">
          <div>
            <p className="text-sm text-slate-600">Accrued vs paid clarity</p>
            <h2 className="text-xl">Payment vs accrual snapshot</h2>
          </div>
        </header>
        <div className="grid grid-cols-4 text-sm font-semibold text-slate-600">
          <span>Account / Loan</span>
          <span className="text-right">Accrued</span>
          <span className="text-right">Paid</span>
          <span className="text-right">Net</span>
        </div>
        {Object.keys(accruals).map((key) => (
          <div key={key} className="grid grid-cols-4 py-2 text-sm border-t border-slate-100">
            <span>{key}</span>
            <span className="text-right">${accruals[key].toFixed(2)}</span>
            <span className="text-right">${(payments[key] || 0).toFixed(2)}</span>
            <span className="text-right">${(accruals[key] - (payments[key] || 0)).toFixed(2)}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
