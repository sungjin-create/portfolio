import Background from "@/shared/components/Background";
import CareerHero from "@/features/career/sections/CareerHero";
import CareerSummary from "@/features/career/sections/CareerSummary";
import CareerProjects from "@/features/career/sections/CareerProjects";
import CareerTech from "@/features/career/sections/CareerTech";
import CareerLearned from "@/features/career/sections/CareerLearned";

export default function CareerPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC] text-zinc-900">
      <Background />

      <div className="relative mx-auto max-w-7xl px-10">
        <CareerHero />
        <CareerSummary />
        <CareerProjects />
        <CareerTech />
        <CareerLearned />
      </div>
    </main>
  );
}