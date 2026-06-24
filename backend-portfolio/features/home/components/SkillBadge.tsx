type SkillBadgeProps = {
  name: string;
};

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition hover:border-[#C7DDE8] hover:bg-[#F6FAFC] hover:text-[#4A6678]">
      {name}
    </span>
  );
}
