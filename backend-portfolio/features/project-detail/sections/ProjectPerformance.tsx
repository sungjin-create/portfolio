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
        <div className="rounded-3xl border border-zinc-200 bg-white/90 p-7 shadow-sm ring-1 ring-white/70">
          <div className="mb-5 h-1 w-10 rounded-full bg-[#B9D6E6]" />
          <p className="text-sm font-medium text-[#5D7285]">Test Tool</p>
          <p className="mt-3 text-2xl font-semibold text-zinc-900">
            {project.performance.testTool}
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white/90 p-7 shadow-sm ring-1 ring-white/70 md:col-span-2">
          <div className="mb-5 h-1 w-10 rounded-full bg-[#B9D6E6]" />
          <p className="text-sm font-medium text-[#5D7285]">Scenario</p>
          <p className="mt-3 whitespace-pre-line text-2xl font-semibold text-zinc-900">
            {project.performance.scenario}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {project.performance.results.map((result) => (
          <div
            key={result}
            className="rounded-2xl border border-[#D9E7EE] bg-[#F6FAFC] p-5 text-center font-semibold text-[#4A6678]"
          >
            {result}
          </div>
        ))}
      </div>
    </ProjectDetailSection>
  );
}