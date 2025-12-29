import { format } from "date-fns";
import { projectCashRequirements } from "@/lib/finance";
import { allocations } from "@/lib/sampleData";

export default function CalendarPage() {
  const forecast = projectCashRequirements({
    obligations: [
      { label: "Rent", date: new Date().toISOString(), amount: 1200 },
      { label: "Subscriptions", date: new Date().toISOString(), amount: 85 },
    ],
    expectedIncome: [{ label: "Paycheck", date: new Date().toISOString(), amount: 1500 }],
    allocations: allocations.map((a) => ({ label: a.eventId, date: a.date, amount: a.amount })),
    currentCash: 1800,
    includePlannedSpend: true,
  });

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase text-primary-foreground">Calendar</p>
        <h1 className="text-3xl">Required cash by selected date</h1>
        <p className="text-slate-700 max-w-2xl">
          Pick any date to see obligations due, expected income before then, and excess cash once requirements are met.
        </p>
      </header>

      <section className="card p-6 space-y-4">
        <header className="section-heading">
          <div>
            <p className="text-sm text-slate-600">Inputs are transparent and editable</p>
            <h2 className="text-xl">Cash requirement</h2>
          </div>
          <p className="text-sm text-slate-600">As of {format(new Date(), "PPP")}</p>
        </header>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <h3 className="font-semibold">Obligations</h3>
            {forecast.requiredCash > 0 ? (
              <ul className="list-disc list-inside text-slate-700">
                <li>Rent: $1200</li>
                <li>Subscriptions: $85</li>
                <li>Planned allocations: ${allocations.reduce((sum, a) => sum + a.amount, 0).toFixed(2)}</li>
              </ul>
            ) : (
              <p>No obligations before this date.</p>
            )}
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Projected income</h3>
            <ul className="list-disc list-inside text-slate-700">
              <li>Paycheck: $1500</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm font-semibold">
          <div className="card p-4">
            <p className="text-slate-600 text-xs">Required cash</p>
            <p className="text-xl">${forecast.requiredCash.toFixed(2)}</p>
          </div>
          <div className="card p-4">
            <p className="text-slate-600 text-xs">Projected cash</p>
            <p className={`text-xl ${forecast.projectedCash >= 0 ? "text-supportive" : "text-danger"}`}>
              ${forecast.projectedCash.toFixed(2)}
            </p>
          </div>
          <div className="card p-4">
            <p className="text-slate-600 text-xs">Excess available</p>
            <p className={`text-xl ${forecast.excess > 0 ? "text-supportive" : "text-slate-900"}`}>
              ${forecast.excess.toFixed(2)}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
