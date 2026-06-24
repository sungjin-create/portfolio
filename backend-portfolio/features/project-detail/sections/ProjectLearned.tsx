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
            className="rounded-2xl border border-zinc-200 bg-white p-5 leading-7 text-zinc-700 shadow-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </ProjectDetailSection>
  );
}