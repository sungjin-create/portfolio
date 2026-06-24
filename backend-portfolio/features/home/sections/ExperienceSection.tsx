import Link from "next/link";
import Section from "@/shared/components/Section";
import SectionHeader from "@/shared/components/SectionHeader";
import { experiences } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <Section>
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <SectionHeader
          label="Experience"
          title="실무 경험"
          description="솔루션 백엔드 개발자로 근무하며 기준정보 관리 시스템 개발, 데이터 정비, 인터페이스 개선 업무를 수행했습니다."
        />

        <Link
          href="/career"
          className="shrink-0 text-sm font-medium text-zinc-500 transition hover:text-zinc-900 md:mt-10"
        >
          전체 경력 보기 →
        </Link>
      </div>

      <div className="space-y-6">
        {experiences.map((experience) => (
          <Link
            key={experience.company}
            href={`/career/${experience.slug}`}
            className="group block"
          >
            <article className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-zinc-300 group-hover:shadow-lg">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-900">
                    {experience.company}
                  </h3>

                  <p className="mt-2 text-lg font-medium text-zinc-700">
                    {experience.role}
                  </p>
                </div>

                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-600">
                  {experience.period}
                </span>
              </div>

              <p className="mt-6 max-w-4xl leading-8 text-zinc-600">
                {experience.description}
              </p>

              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-2xl border border-zinc-100 bg-zinc-50 px-5 py-4 text-sm text-zinc-700"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-6">
                <span className="text-sm font-medium text-zinc-500">
                  경력 상세 보기 →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </Section>
  );
}