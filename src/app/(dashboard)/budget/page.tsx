import { format } from "date-fns";
import { BudgetSummary } from "@/components/BudgetSummary";
import { buildTransferAuditTrail, calculateWeeklyAvailability } from "@/lib/finance";
import { categories, weeklyBudget } from "@/lib/sampleData";

export default function BudgetPage() {
  const auditTrail = buildTransferAuditTrail(weeklyBudget.items);

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase text-primary-foreground">Weekly Budget</p>
        <h1 className="text-3xl">Weekly-first planning with transparent math</h1>
        <p className="text-slate-700 max-w-2xl">
          Each category shows planned, spent, transfers, and availability. Transfers are logged for auditability and
          can be undone without hidden automation.
        </p>
        <p className="text-sm text-slate-600">Week starts on Monday: {format(weeklyBudget.weekStart, "PPP")}</p>
      </header>

      <BudgetSummary />

      <section className="card p-6 space-y-4">
        <header className="section-heading">
          <div>
            <p className="text-sm text-slate-600">Transfers are explicit, reversible, and explained</p>
            <h2 className="text-xl">Transfer history</h2>
          </div>
        </header>
        <div className="grid grid-cols-4 text-sm font-semibold text-slate-600">
          <span>Category</span>
          <span className="text-right">Net transfer</span>
          <span className="text-right">Available</span>
          <span className="text-right">Notes</span>
        </div>
        {auditTrail.map((line) => {
          const item = weeklyBudget.items.find((i) => i.id === line.itemId);
          if (!item) return null;
          const category = categories.find((c) => c.id === item.categoryId);
          if (!item) return null;
          const available = calculateWeeklyAvailability(item);
          return (
            <div key={line.itemId} className="grid grid-cols-4 py-2 text-sm border-t border-slate-100">
              <span>{category?.name ?? line.itemId}</span>
              <span className="text-right">${line.netTransfer.toFixed(2)}</span>
              <span className="text-right">${available.toFixed(2)}</span>
              <span className="text-right text-slate-600">Undo supported via API</span>
            </div>
          );
        })}
      </section>
    </div>
  );
}
