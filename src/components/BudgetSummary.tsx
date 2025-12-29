import { format } from "date-fns";
import { calculateWeeklyAvailability, summarizeWeeklyBudget } from "@/lib/finance";
import { categories, weeklyBudget } from "@/lib/sampleData";

export function BudgetSummary() {
  const summary = summarizeWeeklyBudget(weeklyBudget);
  return (
    <section className="card p-6 space-y-4">
      <header className="section-heading">
        <div>
          <p className="text-sm text-slate-600">Week {format(weeklyBudget.weekStart, "LLL d")} → {format(weeklyBudget.weekEnd, "LLL d")}</p>
          <h2 className="text-2xl">Weekly budget</h2>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-600">Available</p>
          <p className="text-2xl text-supportive">${summary.totalAvailable.toFixed(2)}</p>
        </div>
      </header>
      <div className="grid grid-cols-5 text-sm font-semibold text-slate-600">
        <span>Category</span>
        <span className="text-right">Planned</span>
        <span className="text-right">Spent</span>
        <span className="text-right">Transfers</span>
        <span className="text-right">Available</span>
      </div>
      {weeklyBudget.items.map((item) => {
        const category = categories.find((c) => c.id === item.categoryId);
        const available = calculateWeeklyAvailability(item);
        return (
          <div key={item.id} className="grid grid-cols-5 py-3 text-sm border-t border-slate-100 items-center">
            <div>
              <p className="font-semibold">{category?.name}</p>
              <p className="text-xs text-slate-600">Carryover {category?.allowCarryover ? "on" : "off"}</p>
            </div>
            <div className="text-right">${item.planned.toFixed(2)}</div>
            <div className="text-right">${item.spent.toFixed(2)}</div>
            <div className="text-right">${(item.transfersIn - item.transfersOut).toFixed(2)}</div>
            <div
              className={`text-right font-semibold ${available < 0 ? "text-danger" : "text-slate-900"}`}
            >
              ${available.toFixed(2)}
            </div>
          </div>
        );
      })}
      <div className="grid grid-cols-5 pt-3 border-t border-slate-200 text-sm font-semibold">
        <span>Total</span>
        <span className="text-right">${summary.totalPlanned.toFixed(2)}</span>
        <span className="text-right">${summary.totalSpent.toFixed(2)}</span>
        <span className="text-right">–</span>
        <span className="text-right">${summary.totalAvailable.toFixed(2)}</span>
      </div>
    </section>
  );
}
