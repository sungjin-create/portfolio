import { ProjectDetail } from "@/shared/types/project";
import ProjectDetailSection from "../components/ProjectDetailSection";

type ProjectOverviewProps = {
  project: ProjectDetail;
};

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <ProjectDetailSection title="Overview">
      <div className="grid gap-8 md:grid-cols-[1fr_280px]">
        <div className="space-y-5">
          {project.overview.map((item) => (
            <p key={item} className="text-lg leading-8 text-zinc-600">
              {item}
            </p>
          ))}
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <dl className="space-y-5">
            <div>
              <dt className="text-sm font-medium text-zinc-500">Period</dt>
              <dd className="mt-1 font-semibold text-zinc-900">
                {project.period}
              </dd>
            </div>

            <div>
              <dt className="text-sm font-medium text-zinc-500">Role</dt>
              <dd className="mt-1 font-semibold text-zinc-900">
                {project.role}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </ProjectDetailSection>
  );
}