import { ProjectDetail } from "@/shared/types/project";
import ProjectDetailSection from "../components/ProjectDetailSection";

type ProjectLearnedProps = {
  project: ProjectDetail;
};

export default function ProjectLearned({ project }: ProjectLearnedProps) {
  return (
    <ProjectDetailSection title="What I Learned">
      <ul className="space-y-4">
        {project.learned.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-zinc-200 bg-white/90 p-5 whitespace-pre-line leading-7 text-zinc-700 shadow-sm ring-1 ring-white/70 transition hover:border-[#C7DDE8]"
          >
            {item}
          </li>
        ))}
      </ul>
    </ProjectDetailSection>
  );
}