import Link from "next/link";
import { careers } from "@/data/career";

export default function CareerTimeline() {
  return (
    <section className="border-t border-zinc-200 py-20">
      <div className="mb-14">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
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
            <article
              className="
                rounded-3xl
                border
                border-zinc-200
                bg-white
                p-8
                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-zinc-300
                hover:shadow-lg
              "
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-semibold text-zinc-900">
                    {career.company}
                  </h3>

                  <p className="mt-2 text-lg text-zinc-600">
                    {career.role}
                  </p>
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-zinc-200
                    bg-zinc-50
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-zinc-600
                  "
                >
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
                    className="
                      rounded-full
                      border
                      border-zinc-200
                      bg-zinc-50
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-zinc-700
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-6">
                <span className="text-sm font-medium text-zinc-500">
                  상세 보기
                </span>

                <span className="text-zinc-400 transition group-hover:translate-x-1">
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