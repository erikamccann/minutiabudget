import { format } from "date-fns";
import { calculateRunningBalance, creditCardAccruals } from "@/lib/finance";
import { transactions } from "@/lib/sampleData";

export default function TransactionsPage() {
  const ledger = calculateRunningBalance(transactions, 750);
  const creditView = creditCardAccruals(transactions, new Date().toISOString());

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase text-primary-foreground">Transactions</p>
        <h1 className="text-3xl">Cash-based transaction journal</h1>
        <p className="text-slate-700 max-w-2xl">
          Every transaction is tagged with type, category, and optional event. Payments are never treated as
          transfers so that accruals and repayments stay distinct.
        </p>
      </header>

      <section className="card p-6 space-y-4">
        <header className="section-heading">
          <div>
            <p className="text-sm text-slate-600">Ordering by date with running balance</p>
            <h2 className="text-xl">Ledger</h2>
          </div>
          <p className="text-sm text-slate-600">Opening balance: $750</p>
        </header>
        <div className="grid grid-cols-5 text-sm font-semibold text-slate-600">
          <span>Date</span>
          <span>Type</span>
          <span>Category</span>
          <span className="text-right">Amount</span>
          <span className="text-right">Running balance</span>
        </div>
        {ledger.ledger.map((line) => {
          const txn = transactions.find((t) => t.id === line.id)!;
          const sign = txn.transactionType === "INCOME" ? "+" : "-";
          return (
            <div key={txn.id} className="grid grid-cols-5 py-2 text-sm border-t border-slate-100">
              <span>{format(txn.date, "MMM d")}</span>
              <span className="font-semibold">{txn.transactionType}</span>
              <span>{txn.categoryId}</span>
              <span className="text-right">{sign}${txn.amount.toFixed(2)}</span>
              <span className="text-right">${line.balance.toFixed(2)}</span>
            </div>
          );
        })}
      </section>

      <section className="card p-6 space-y-4">
        <header className="section-heading">
          <div>
            <p className="text-sm text-slate-600">Accrued charges vs payments for credit</p>
            <h2 className="text-xl">Accrued vs paid</h2>
          </div>
        </header>
        <div className="grid grid-cols-4 text-sm font-semibold text-slate-600">
          <span>Scope</span>
          <span className="text-right">Accrued</span>
          <span className="text-right">Paid</span>
          <span className="text-right">Net</span>
        </div>
        <div className="grid grid-cols-4 py-2 text-sm border-t border-slate-100">
          <span>Credit cards</span>
          <span className="text-right">${creditView.accrued.toFixed(2)}</span>
          <span className="text-right">${creditView.paid.toFixed(2)}</span>
          <span className="text-right">${creditView.net.toFixed(2)}</span>
        </div>
      </section>
    </div>
  );
}
