interface MetricCardProps {
  label: string;
  value: string;
  helper?: string;
  tone?: "default" | "success" | "warning" | "danger";
}

const toneMap: Record<NonNullable<MetricCardProps["tone"]>, string> = {
  default: "text-slate-900",
  success: "text-supportive",
  warning: "text-caution",
  danger: "text-danger",
};

export function MetricCard({ label, value, helper, tone = "default" }: MetricCardProps) {
  return (
    <div className="card p-4 space-y-1">
      <p className="text-sm text-slate-600">{label}</p>
      <p className={`text-2xl font-semibold ${toneMap[tone]}`}>{value}</p>
      {helper && <p className="text-xs text-slate-500">{helper}</p>}
    </div>
  );
}
