import { ReactNode } from "react";

type ProjectDetailSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export default function ProjectDetailSection({
  title,
  description,
  children,
}: ProjectDetailSectionProps) {
  return (
    <section className="border-t border-zinc-200 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="mt-4 max-w-3xl whitespace-pre-line text-lg leading-8 text-zinc-600">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}