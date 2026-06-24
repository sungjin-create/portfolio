type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#5D7285]">
        {label}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-4xl whitespace-pre-line text-lg leading-8 text-zinc-600">
          {description}
        </p>
      )}
    </div>
  );
}
