type ProjectDetailBadgeProps = {
  children: string;
};

export default function ProjectDetailBadge({
  children,
}: ProjectDetailBadgeProps) {
  return (
    <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-[#C7DDE8] hover:bg-[#F6FAFC] hover:text-[#4A6678]">
      {children}
    </span>
  );
}