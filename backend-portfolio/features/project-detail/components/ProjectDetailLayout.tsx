import { ReactNode } from "react";
import Background from "@/shared/components/Background";

type ProjectDetailLayoutProps = {
  children: ReactNode;
};

export default function ProjectDetailLayout({
  children,
}: ProjectDetailLayoutProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC] text-zinc-900">
      <Background />

      <div className="relative mx-auto max-w-7xl px-10">
        {children}
      </div>
    </main>
  );
}