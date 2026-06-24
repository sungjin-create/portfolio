import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { ProjectDetail } from "@/shared/types/project";

type ProjectHeroProps = {
  project: ProjectDetail;
};

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="py-24">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <p className="mb-4 text-sm font-medium tracking-[0.18em] text-zinc-500 uppercase">
        Project Detail
      </p>

      <h1 className="text-5xl font-semibold tracking-tight text-zinc-900 md:text-7xl">
        {project.title}
      </h1>

      <p className="mt-6 text-2xl font-medium text-zinc-700">
        {project.subtitle}
      </p>

      <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-600">
        {project.description}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            <SiGithub size={18} />
            GitHub
          </a>
        )}
      </div>
    </section>
  );
}