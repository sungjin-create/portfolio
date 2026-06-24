import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        relative
        mx-auto
        max-w-7xl
        px-10
        py-40
        ${className}
      `}
    >
      {children}
    </section>
  );
}