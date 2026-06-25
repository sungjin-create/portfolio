import { ProjectDetail } from "@/shared/types/project";
import ProjectDetailSection from "../components/ProjectDetailSection";

type ProjectArchitectureProps = {
  project: ProjectDetail;
};

export default function ProjectArchitecture({ project }: ProjectArchitectureProps) {
  if (!project.architectureImage) return null;

  return (
<ProjectDetailSection title="Architecture">
  <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm ring-1 ring-white/70 md:p-8">
    <img
      src={project.architectureImage}
      alt={`${project.title} architecture diagram`}
      className="mx-auto w-full max-w-3xl object-contain"
    />
  </div>
</ProjectDetailSection>
  );
}