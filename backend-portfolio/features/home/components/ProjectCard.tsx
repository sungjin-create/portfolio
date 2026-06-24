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
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group h-full rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-zinc-300 hover:shadow-xl"
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold text-zinc-900">
            {project.title}
          </h3>

          <ExternalLink
            size={20}
            className="text-zinc-400 transition group-hover:text-zinc-900"
          />
        </div>

        <p className="mt-5 leading-7 text-zinc-600">{project.desc}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.article>
    </Link>
  );
}