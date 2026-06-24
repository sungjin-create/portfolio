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
            className="rounded-3xl border border-zinc-200 bg-white/90 p-8 shadow-sm ring-1 ring-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#C7DDE8] hover:shadow-lg"
          >
            <div className="mb-5 h-1 w-10 rounded-full bg-[#B9D6E6]" />

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
