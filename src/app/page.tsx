import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/budget", label: "Weekly Budget" },
  { href: "/transactions", label: "Transactions" },
  { href: "/assets", label: "Assets & Loans" },
  { href: "/events", label: "Events / Goals" },
  { href: "/calendar", label: "Calendar" },
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase text-primary-foreground">Minutia Budget</p>
        <h1 className="text-3xl">Clarity-first weekly budgeting and forecasting</h1>
        <p className="text-slate-700 max-w-2xl">
          Built for explainability, weekly control, and cash-based awareness. Navigate directly to the area
          you want to explore.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="card p-4 hover:shadow-md transition">
            <h2 className="text-xl">{link.label}</h2>
            <p className="text-sm text-slate-600">Jump into the {link.label} workspace.</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
