"use client";

import { motion } from "framer-motion";
import { Server, Database, Cpu } from "lucide-react";
import Section from "@/shared/components/Section";
import { features } from "@/data/portfolio";
import SectionHeader from "../../../shared/components/SectionHeader";

const icons = [<Server key="server" />, <Database key="database" />, <Cpu key="cpu" />];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <Section>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.7 }}
      >
        <SectionHeader
          label="About"
          title="안정적인 구조를 고민합니다"
          description="트랜잭션, 락, 이벤트 처리, 부하 테스트를 통해 실무형 백엔드 시스템을 만들어가고 있습니다."
        />
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="
              group
              rounded-3xl
              border
              border-zinc-200
              bg-white
              p-8
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              hover:border-zinc-300
              "
          >
            <div className="mb-6 text-blue-200">{icons[index]}</div>
            <h3 className="text-xl font-medium">{feature.title}</h3>
            <p className="mt-3 text-zinc-400">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}