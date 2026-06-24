import Link from "next/link";
import { careers } from "@/data/career";

export default function CareerTimeline() {
  return (
    <section className="border-t border-zinc-200 py-20">
      <div className="mb-14">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#5D7285]">
          Timeline
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
          경력 타임라인
        </h2>
      </div>

      <div className="space-y-6">
        {careers.map((career) => (
          <Link
            key={career.slug}
            href={`/career/${career.slug}`}
            className="group block"
          >
            <article className="rounded-3xl border border-l-4 border-zinc-200 border-l-[#B9D6E6] bg-white/90 p-8 shadow-sm ring-1 ring-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#C7DDE8] hover:shadow-lg">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-3xl font-semibold text-zinc-900">
                    {career.company}
                  </h3>

                  <p className="mt-2 text-lg text-zinc-600">{career.role}</p>
                </div>

                <span className="rounded-full border border-[#D9E7EE] bg-[#F3F8FB] px-4 py-2 text-sm font-medium text-[#547084]">
                  {career.period}
                </span>
              </div>

              <p className="mt-6 max-w-4xl leading-8 text-zinc-600">
                {career.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {career.achievements.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition group-hover:border-[#D9E7EE] group-hover:bg-[#F6FAFC]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-6">
                <span className="text-sm font-medium text-zinc-500 transition group-hover:text-[#4A6678]">
                  상세 보기
                </span>

                <span className="text-blue-200 transition group-hover:translate-x-1 group-hover:text-[#547084]">
                  →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}