import Section from "@/shared/components/Section";
import SectionHeader from "@/shared/components/SectionHeader";
import ProjectCard from "@/features/home/components/ProjectCard";
import FeaturedProjectCard from "@/features/home/components/FeaturedProjectCard";
import { featuredProjects, projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeader
        label="Projects"
        title="문제 해결 과정이 보이는 프로젝트"
        description="단순 구현보다 어떤 문제를 어떻게 해결했는지를 중심으로 정리했습니다."
      />

      <div>
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
          대표 프로젝트
        </p>

        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-14">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
          기타 프로젝트
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}