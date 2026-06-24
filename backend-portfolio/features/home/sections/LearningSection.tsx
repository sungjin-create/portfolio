import Section from "@/shared/components/Section";
import SectionHeader from "@/shared/components/SectionHeader";
import SkillBadge from "@/features/home/components/SkillBadge";
import { learningPlans } from "@/data/portfolio";

export default function LearningSection() {
  return (
    <Section>
      <SectionHeader
        label="Growth"
        title="학습과 확장"
        description="서비스 배포와 운영 역량을 높이기 위해 CI/CD, AWS, Docker 기반 인프라를 학습하고 있습니다."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {learningPlans.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-zinc-900">
                {item.title}
              </h3>

              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                {item.status}
              </span>
            </div>

            <p className="mt-5 leading-7 text-zinc-600">
              {item.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}