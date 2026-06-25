"use client";

import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import Section from "@/shared/components/Section";
import { profile } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <Section className="flex min-h-screen items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl"
      >
        <p className="mb-6 text-lg font-medium text-zinc-500">
          Backend Developer
        </p>

        <h1 className="text-6xl font-semibold tracking-tight text-zinc-900 md:text-8xl">
          유성진
        </h1>

        <p className="mt-8 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-5xl">
          신뢰할 수 있는 거래 흐름을 설계하는
          <br />
          백엔드 개발자입니다.
        </p>

        <p className="mt-8 max-w-4xl text-xl whitespace-pre-line leading-9 text-zinc-600">
          {profile.description}
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-zinc-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            프로젝트 보기
          </a>

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-7 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
          >
            <SiGithub size={18} />
            GitHub
          </a>
        </div>
      </motion.div>
    </Section>
  );
}