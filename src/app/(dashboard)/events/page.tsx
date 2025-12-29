import { format } from "date-fns";
import { buildAllocationPlan } from "@/lib/finance";
import { allocations, events } from "@/lib/sampleData";

export default function EventsPage() {
  const allocationPlan = buildAllocationPlan(allocations, 500, 1800);

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase text-primary-foreground">Events & Goals</p>
        <h1 className="text-3xl">Secondary tagging with traceable allocations</h1>
        <p className="text-slate-700 max-w-2xl">
          Events track allocated, spent, and remaining budget. Allocations move virtual money only—never touching
          bank balances—to keep intent clear and reversible.
        </p>
      </header>

      <section className="card p-6 space-y-4">
        <header className="section-heading">
          <div>
            <p className="text-sm text-slate-600">Every allocation has a source, date, and destination</p>
            <h2 className="text-xl">Goals</h2>
          </div>
        </header>
        <div className="grid grid-cols-5 text-sm font-semibold text-slate-600">
          <span>Name</span>
          <span className="text-right">Target</span>
          <span className="text-right">Allocated</span>
          <span className="text-right">Remaining</span>
          <span className="text-right">Target date</span>
        </div>
        {events.map((event) => (
          <div key={event.id} className="grid grid-cols-5 py-2 text-sm border-t border-slate-100">
            <span>{event.name}</span>
            <span className="text-right">${event.targetAmount.toFixed(2)}</span>
            <span className="text-right">${event.allocated.toFixed(2)}</span>
            <span className="text-right">${(event.targetAmount - event.allocated).toFixed(2)}</span>
            <span className="text-right">{format(event.targetDate, "MMM d, yyyy")}</span>
          </div>
        ))}
      </section>

      <section className="card p-6 space-y-4">
        <header className="section-heading">
          <div>
            <p className="text-sm text-slate-600">Guardrails keep allocations from breaking cash floor</p>
            <h2 className="text-xl">Allocation attempts</h2>
          </div>
          <p className="text-sm text-slate-600">Cash floor: $500 | Cash available: $1,800</p>
        </header>
        <div className="grid grid-cols-4 text-sm font-semibold text-slate-600">
          <span>Destination</span>
          <span className="text-right">Amount</span>
          <span className="text-right">Source</span>
          <span className="text-right">Status</span>
        </div>
        {allocationPlan.approved.map((allocation) => {
          const destination = events.find((event) => event.id === allocation.eventId);
          return (
            <div key={allocation.id} className="grid grid-cols-4 py-2 text-sm border-t border-slate-100">
              <span>{destination?.name}</span>
              <span className="text-right">${allocation.amount.toFixed(2)}</span>
              <span className="text-right">{allocation.source}</span>
              <span className="text-right text-supportive">Approved</span>
            </div>
          );
        })}
        {allocationPlan.rejected.map((allocation) => {
          const destination = events.find((event) => event.id === allocation.eventId);
          return (
            <div key={allocation.id} className="grid grid-cols-4 py-2 text-sm border-t border-slate-100">
              <span>{destination?.name}</span>
              <span className="text-right">${allocation.amount.toFixed(2)}</span>
              <span className="text-right">{allocation.source}</span>
              <span className="text-right text-danger">Rejected (cash floor)</span>
            </div>
          );
        })}
      </section>
    </div>
  );
}
