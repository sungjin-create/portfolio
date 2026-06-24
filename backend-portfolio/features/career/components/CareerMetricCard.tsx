type CareerMetricCardProps = {
  label: string;
  value: string;
};

export default function CareerMetricCard({
  label,
  value,
}: CareerMetricCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
      <p className="text-sm font-medium text-zinc-500">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900">
        {value}
      </p>
    </div>
  );
}