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
          title="커머스 백엔드의 안정적인 흐름을 고민합니다"
          description={"주문 생성, 결제 승인, 재고 선점, 이벤트 발행처럼 상태 변화가 많은 도메인에서 \n 데이터 정합성과 장애 대응을 함께 고려하는 백엔드 개발자를 지향합니다."}
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
            <p className="mt-3 text-zinc-400 whitespace-pre-line">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}