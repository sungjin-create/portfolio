import { ReactNode } from "react";

type CareerCardProps = {
  children: ReactNode;
  className?: string;
};

export default function CareerCard({
  children,
  className = "",
}: CareerCardProps) {
  return (
    <div
      className={`rounded-3xl border border-zinc-200 bg-white/90 p-8 shadow-sm ring-1 ring-white/70 transition-all duration-300 hover:border-[#C7DDE8] hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}