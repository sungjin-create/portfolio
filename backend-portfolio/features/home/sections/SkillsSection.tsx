import Section from "@/shared/components/Section";
import SectionHeader from "@/shared/components/SectionHeader";
import SkillBadge from "@/features/home/components/SkillBadge";
import { skillGroups } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <Section>
      <SectionHeader
        label="Skills"
        title="기술 스택"
        description="백엔드 개발, 데이터베이스, 인프라와 개발 도구를 중심으로 사용해온 기술입니다."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-zinc-900">
              {group.category}
            </h3>

            <div className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}