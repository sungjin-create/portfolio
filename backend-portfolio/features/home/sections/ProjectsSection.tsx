import Section from "@/shared/components/Section";
import SectionHeader from "@/shared/components/SectionHeader";
import ProjectCard from "@/features/home/components/ProjectCard";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeader
        label="Projects"
        title="문제 해결 과정이 보이는 프로젝트"
        description="단순 구현보다 어떤 문제를 어떻게 해결했는지를 중심으로 정리했습니다."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}