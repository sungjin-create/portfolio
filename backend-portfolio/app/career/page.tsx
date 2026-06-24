import Background from "@/shared/components/Background";

import CareerHero from "@/features/career/sections/CareerHero";
import CareerSummary from "@/features/career/sections/CareerSummary";
import CareerTimeline from "@/features/career/sections/CareerTimeline";
import CareerSkillOverview from "@/features/career/sections/CareerSkillOverview";

export default function CareerPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC] text-zinc-900">
      <Background />

      <div className="relative mx-auto max-w-7xl px-10">
        <CareerHero />
        <CareerSummary />
        <CareerTimeline />
        <CareerSkillOverview />
      </div>
    </main>
  );
}