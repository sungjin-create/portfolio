import { ProjectDetail } from "@/shared/types/project";
import ProjectDetailSection from "../components/ProjectDetailSection";

type ProjectTroubleshootingProps = {
  project: ProjectDetail;
};

export default function ProjectTroubleshooting({
  project,
}: ProjectTroubleshootingProps) {
  return (
    <ProjectDetailSection title="Troubleshooting">
      <div className="space-y-6">
        {project.troubleshooting.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-zinc-900">
              {item.title}
            </h3>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <TroubleBox label="Problem" content={item.problem} />
              <TroubleBox label="Cause" content={item.cause} />
              <TroubleBox label="Solution" content={item.solution} />
              <TroubleBox label="Result" content={item.result} />
            </div>
          </article>
        ))}
      </div>
    </ProjectDetailSection>
  );
}

function TroubleBox({
  label,
  content,
}: {
  label: string;
  content: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5">
      <p className="text-sm font-semibold text-zinc-500">{label}</p>
      <p className="mt-3 leading-7 text-zinc-700">{content}</p>
    </div>
  );
}