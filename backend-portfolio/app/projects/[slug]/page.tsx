import { notFound } from "next/navigation";
import { getProjectDetail, projectDetails } from "@/data/projectDetails";

import ProjectDetailLayout from "@/features/project-detail/components/ProjectDetailLayout";
import ProjectHero from "@/features/project-detail/sections/ProjectHero";
import ProjectOverview from "@/features/project-detail/sections/ProjectOverview";
import ProjectTechStack from "@/features/project-detail/sections/ProjectTechStack";
import ProjectArchitecture from "@/features/project-detail/sections/ProjectArchitecture";
import ProjectFeatures from "@/features/project-detail/sections/ProjectFeatures";
import ProjectTroubleshooting from "@/features/project-detail/sections/ProjectTroubleshooting";
import ProjectPerformance from "@/features/project-detail/sections/ProjectPerformance";
import ProjectLearned from "@/features/project-detail/sections/ProjectLearned";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projectDetails.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectDetailLayout>
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectTechStack project={project} />
      <ProjectArchitecture />
      <ProjectFeatures project={project} />
      <ProjectTroubleshooting project={project} />
      <ProjectPerformance project={project} />
      <ProjectLearned project={project} />
    </ProjectDetailLayout>
  );
}