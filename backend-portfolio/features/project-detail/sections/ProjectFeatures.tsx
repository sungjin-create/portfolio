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
            <h3 className="text-xl font-semibold text-zinc-900">
              {feature.title}
            </h3>

            <p className="mt-4 leading-7 text-zinc-600">
              {feature.description}
            </p>
          </ProjectDetailCard>
        ))}
      </div>
    </ProjectDetailSection>
  );
}