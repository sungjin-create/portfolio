type ProjectDetailBadgeProps = {
  children: string;
};

export default function ProjectDetailBadge({
  children,
}: ProjectDetailBadgeProps) {
  return (
    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700">
      {children}
    </span>
  );
}