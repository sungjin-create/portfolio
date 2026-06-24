import { ProjectDetail } from "@/shared/types/project";
import ProjectDetailSection from "../components/ProjectDetailSection";

type ProjectPerformanceProps = {
  project: ProjectDetail;
};

export default function ProjectPerformance({ project }: ProjectPerformanceProps) {
  if (!project.performance) return null;

  return (
    <ProjectDetailSection title="Performance">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
          <p className="text-sm font-medium text-zinc-500">Test Tool</p>
          <p className="mt-3 text-2xl font-semibold text-zinc-900">
            {project.performance.testTool}
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:col-span-2">
          <p className="text-sm font-medium text-zinc-500">Scenario</p>
          <p className="mt-3 text-2xl font-semibold text-zinc-900">
            {project.performance.scenario}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {project.performance.results.map((result) => (
          <div
            key={result}
            className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-center font-semibold text-zinc-800"
          >
            {result}
          </div>
        ))}
      </div>
    </ProjectDetailSection>
  );
}