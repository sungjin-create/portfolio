"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Project } from "@/shared/types/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const card = (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group h-full rounded-[2rem] border border-zinc-200 bg-white/90 p-8 shadow-sm ring-1 ring-white/70 transition hover:-translate-y-2 hover:border-[#C7DDE8] hover:shadow-xl"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-2xl font-semibold text-zinc-900">
          {project.title}
        </h3>

        <ExternalLink
          size={20}
          className="text-blue-200 transition group-hover:text-[#547084]"
        />
      </div>

      <p className="mt-5 leading-7 text-zinc-600">{project.desc}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 transition group-hover:border-[#D9E7EE] group-hover:bg-[#F6FAFC]"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );

  if (project.externalUrl) {
    return (
      <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    );
  }

  return <Link href={`/projects/${project.slug}`}>{card}</Link>;
}
