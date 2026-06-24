import { ProjectDetail } from "@/shared/types/project";
import ProjectDetailSection from "../components/ProjectDetailSection";
import ProjectDetailCard from "../components/ProjectDetailCard";

type ProjectFeaturesProps = {
  project: ProjectDetail;
};

export default function ProjectFeatures({ project }: ProjectFeaturesProps) {
  return (
    <ProjectDetailSection title="Key Features">
      <div className="grid gap-6 md:grid-cols-3">
        {project.features.map((feature) => (
          <ProjectDetailCard key={feature.title}>
            <div className="mb-5 h-1 w-10 rounded-full bg-[#B9D6E6]" />

            <h3 className="text-xl font-semibold text-zinc-900">
              {feature.title}
            </h3>

            <p className="mt-4 whitespace-pre-line leading-7 text-zinc-600">
              {feature.description}
            </p>
          </ProjectDetailCard>
        ))}
      </div>
    </ProjectDetailSection>
  );
}