import { format } from "date-fns";
import { computeLoanPayment, buildAmortizationSchedule } from "@/lib/finance";
import { assets, loan } from "@/lib/sampleData";

export default function AssetsPage() {
  const payment = computeLoanPayment(loan);
  const schedule = buildAmortizationSchedule(loan, 6);

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase text-primary-foreground">Assets & Loans</p>
        <h1 className="text-3xl">Track real-world items and obligations</h1>
        <p className="text-slate-700 max-w-2xl">
          Assets remain cash-focused with current value, while loans show monthly payments, amortization, and
          principal vs interest breakdowns.
        </p>
      </header>

      <section className="card p-6 space-y-4">
        <header className="section-heading">
          <div>
            <p className="text-sm text-slate-600">All money movement links to tangible items</p>
            <h2 className="text-xl">Assets</h2>
          </div>
        </header>
        <div className="grid grid-cols-4 text-sm font-semibold text-slate-600">
          <span>Name</span>
          <span className="text-right">Type</span>
          <span className="text-right">Current value</span>
          <span className="text-right">Linked loan</span>
        </div>
        {assets.map((asset) => (
          <div key={asset.id} className="grid grid-cols-4 py-2 text-sm border-t border-slate-100">
            <span>{asset.name}</span>
            <span className="text-right">{asset.type}</span>
            <span className="text-right">${asset.currentValue.toLocaleString()}</span>
            <span className="text-right">{asset.linkedLoanId ?? "—"}</span>
          </div>
        ))}
      </section>

      <section className="card p-6 space-y-4">
        <header className="section-heading">
          <div>
            <p className="text-sm text-slate-600">Explainable payments only</p>
            <h2 className="text-xl">Loan math</h2>
          </div>
          <p className="text-sm text-slate-600">Monthly payment: ${payment.monthlyPayment.toFixed(2)}</p>
        </header>
        <div className="grid grid-cols-5 text-sm font-semibold text-slate-600">
          <span>Date</span>
          <span className="text-right">Payment</span>
          <span className="text-right">Principal</span>
          <span className="text-right">Interest</span>
          <span className="text-right">Remaining balance</span>
        </div>
        {schedule.map((row, idx) => {
          const remaining = loan.principalAmount - schedule.slice(0, idx + 1).reduce((sum, pmt) => sum + pmt.principalPortion, 0);
          return (
            <div key={row.id} className="grid grid-cols-5 py-2 text-sm border-t border-slate-100">
              <span>{format(row.date, "MMM d")}</span>
              <span className="text-right">${row.amount.toFixed(2)}</span>
              <span className="text-right">${row.principalPortion.toFixed(2)}</span>
              <span className="text-right">${row.interestPortion.toFixed(2)}</span>
              <span className="text-right">${remaining.toFixed(2)}</span>
            </div>
          );
        })}
      </section>
    </div>
  );
}
