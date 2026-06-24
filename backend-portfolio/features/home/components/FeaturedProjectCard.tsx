"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Project } from "@/shared/types/portfolio";

type FeaturedProjectCardProps = {
  project: Project;
};

export default function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block max-w-3xl">
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          rounded-3xl
          border
          border-zinc-200
          bg-white/90
          p-7
          ring-1
          ring-white/70
          shadow-sm

          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-[#C7DDE8]
          hover:shadow-lg
        "
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F8FB] text-[#547084]">
            <Star size={15} className="fill-blue-200 text-blue-200" />
          </span>

          <span className="rounded-full border border-[#D9E7EE] bg-[#F3F8FB] px-3 py-1 text-xs font-semibold tracking-wide text-[#547084]">
            FEATURED
          </span>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-zinc-600">
          {project.desc}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 transition group-hover:border-[#D9E7EE] group-hover:bg-[#F6FAFC]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-zinc-500 transition group-hover:text-[#4A6678]">
          자세히 보기
          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1"
          />
        </div>
      </motion.article>
    </Link>
  );
}
