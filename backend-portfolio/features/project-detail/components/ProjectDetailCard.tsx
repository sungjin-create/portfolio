import { ReactNode } from "react";

type ProjectDetailCardProps = {
  children: ReactNode;
  className?: string;
};

export default function ProjectDetailCard({
  children,
  className = "",
}: ProjectDetailCardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-zinc-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:border-zinc-300
        hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
}