import Background from "@/shared/components/Background";
import HeroSection from "@/features/home/sections/HeroSection";
import AboutSection from "@/features/home/sections/AboutSection";
import ExperienceSection from "@/features/home/sections/ExperienceSection";
import ProjectsSection from "@/features/home/sections/ProjectsSection";
import SkillsSection from "@/features/home/sections/SkillsSection";
import LearningSection from "@/features/home/sections/LearningSection";
import ContactSection from "@/features/home/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC] text-zinc-900">
      <Background />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      {/* <LearningSection /> */}
      <ContactSection />
    </main>
  );
}