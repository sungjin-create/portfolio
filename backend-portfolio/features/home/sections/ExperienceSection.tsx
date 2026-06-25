import Link from "next/link";
import Section from "@/shared/components/Section";
import SectionHeader from "@/shared/components/SectionHeader";
import { experiences } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <Section>
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="mb-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#5D7285]">
            Experience
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
              경력
            </h2>

            <span className="rounded-full border border-[#D9E7EE] bg-[#F3F8FB] px-4 py-1.5 text-base font-semibold text-[#547084] md:mt-2 md:px-5 md:py-2 md:text-lg">
              총 경력 2년 2개월
            </span>
          </div>

          <p className="mt-5 max-w-4xl whitespace-pre-line text-lg leading-8 text-zinc-600">
            솔루션 백엔드 개발자로 근무하며 기준정보 관리 시스템 개발, 데이터 정비,
            인터페이스 개선 업무를 수행했습니다.
          </p>
        </div>

        {/* <Link
          href="/career"
          className="shrink-0 text-sm font-medium text-zinc-500 transition hover:text-[#4A6678] md:mt-10"
        >
          전체 경력 보기 →
        </Link> */}
      </div>

      <div className="space-y-6">
        {experiences.map((experience) => (
          <Link
            key={experience.company}
            href={`/career/${experience.slug}`}
            className="group block"
          >
            <article className="rounded-3xl border border-l-4 border-zinc-200 border-l-[#B9D6E6] bg-white/90 p-8 shadow-sm ring-1 ring-white/70 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#C7DDE8] group-hover:shadow-lg">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="flex flex-wrap items-center gap-3 text-2xl font-semibold text-zinc-900">
                    <span>{experience.company}</span>

                    {experience.companyLabel && (
                      <span className="rounded-full border border-[#D9E7EE] bg-[#F3F8FB] px-3 py-1 text-sm font-medium text-[#547084]">
                        {experience.companyLabel}
                      </span>
                    )}
                  </h3>
                  <p className="mt-3 text-base font-semibold text-[#547084] md:text-lg">
                    {experience.period.replace(" - ", " ~ ")}
                    {experience.duration && (
                      <span className="ml-2 text-sm font-medium text-zinc-500 md:text-base">
                        · {experience.duration}
                      </span>
                    )}
                  </p>
                  <p className="mt-2 text-lg font-medium text-zinc-700">
                    {experience.role}
                  </p>
                </div>

                {/* <span className="rounded-full border border-[#D9E7EE] bg-[#F3F8FB] px-4 py-2 text-sm font-medium text-[#547084]">
                  {experience.period}
                </span> */}
              </div>

              <p className="mt-6 max-w-4xl leading-8 text-zinc-600 whitespace-pre-line">
                {experience.description}
              </p>

              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-2xl border border-zinc-100 bg-slate-50 px-5 py-4 text-sm leading-6 text-zinc-700 transition group-hover:border-[#D9E7EE] group-hover:bg-[#F6FAFC]"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-6">
                <span className="text-sm font-medium text-zinc-500 transition group-hover:text-[#4A6678]">
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
