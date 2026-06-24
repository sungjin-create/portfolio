import { ProjectDetail } from "@/shared/types/project";
import ProjectDetailSection from "../components/ProjectDetailSection";
import ProjectDetailBadge from "../components/ProjectDetailBadge";

type ProjectTechStackProps = {
  project: ProjectDetail;
};

export default function ProjectTechStack({ project }: ProjectTechStackProps) {
  if (!project.techGroups) return null;

  return (
    <ProjectDetailSection title="Tech Stack">
      <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white/90 shadow-sm ring-1 ring-white/70">
        <table className="w-full border-collapse text-left">
          <tbody>
            {project.techGroups.map((group) => (
              <tr
                key={group.category}
                className="border-b border-zinc-100 last:border-b-0"
              >
                <th className="w-56 bg-[#F6FAFC] px-6 py-5 text-sm font-semibold text-[#4A6678]">
                  {group.category}
                </th>

                <td className="px-6 py-5">
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <ProjectDetailBadge key={item}>{item}</ProjectDetailBadge>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ProjectDetailSection>
  );
}