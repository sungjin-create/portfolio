import {
  ProjectDetail,
  ProjectTroubleItem,
  ProjectTroubleTable,
} from "@/shared/types/project";
import ProjectDetailSection from "../components/ProjectDetailSection";
import ProjectCodeBlock from "../components/ProjectCodeBlock";

type ProjectTroubleshootingProps = {
  project: ProjectDetail;
};

export default function ProjectTroubleshooting({
  project,
}: ProjectTroubleshootingProps) {
  return (
    <ProjectDetailSection
      title="Troubleshooting"
      description="문제의 원인과 해결 과정을 기술적인 의사결정 중심으로 정리했습니다."
    >
      <div className="space-y-8">
        {project.troubleshooting.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-l-4 border-zinc-200 border-l-[#B9D6E6] bg-white/90 p-8 shadow-sm ring-1 ring-white/70 transition-all duration-300 hover:border-[#C7DDE8] hover:shadow-lg"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5D7285]">
                  Trouble Case
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-4xl whitespace-pre-line leading-8 text-zinc-600">
                  {item.summary}
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-2 md:max-w-xs md:justify-end">
                {item.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-[#D9E7EE] bg-[#F3F8FB] px-3 py-1 text-xs font-semibold text-[#547084]"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <TroubleList title="Problem" items={item.problem} />
              <TroubleList title="Cause" items={item.cause} />
            </div>

            <div className="mt-8 space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5D7285]">
                Solution
              </p>

              <div className="grid gap-4">
                {item.solution.map((solution, index) => (
                  <div
                    key={solution.title}
                    className="rounded-2xl border border-[#D9E7EE] bg-[#F6FAFC] p-5"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-start">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#547084] ring-1 ring-[#D9E7EE]">
                        {index + 1}
                      </span>

                      <div>
                        <h4 className="font-semibold text-zinc-900">
                          {solution.title}
                        </h4>

                        <p className="mt-2 whitespace-pre-line leading-7 text-zinc-600">
                          {solution.description}
                        </p>

                        <ul className="mt-4 space-y-2">
                          {solution.points.map((point) => (
                            <li
                              key={point}
                              className="flex gap-3 leading-7 text-zinc-700"
                            >
                              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B9D6E6]" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        {solution.code && (
                          <ProjectCodeBlock
                            title={solution.code.title}
                            language={solution.code.language}
                            code={solution.code.content}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>



            {item.resultTable && <TroubleResultTable table={item.resultTable} />}

            {item.analysis && (
              <div className="mt-6 rounded-2xl border border-[#D9E7EE] bg-[#F6FAFC] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5D7285]">
                  Analysis
                </p>

                <ul className="mt-4 space-y-3">
                  {item.analysis.map((line) => (
                    <li key={line} className="flex gap-3 leading-7 text-zinc-700">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B9D6E6]" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5D7285]">
                Effect
              </p>

              <div className="rounded-2xl border border-[#D9E7EE] bg-[#F6FAFC] p-5">
                <ol className="space-y-3">
                  {item.result.map((result, index) => (
                    <li key={result} className="flex gap-3 leading-7 text-zinc-700">
                      <span className="min-w-7 shrink-0 font-semibold text-[#547084]">
                        {index + 1}.
                      </span>

                      <span>{result}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </article>
        ))}
      </div>
    </ProjectDetailSection>
  );
}

function TroubleList({
  title,
  items,
}: {
  title: string;
  items: ProjectTroubleItem[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-100 bg-slate-50 p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5D7285]">
        {title}
      </p>

      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={`${item.label}-${item.text}`}
            className="flex gap-3 leading-7 text-zinc-700"
          >
            <span className="min-w-8 shrink-0 font-semibold text-[#547084]">
              {item.label}.
            </span>

            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TroubleResultTable({ table }: { table: ProjectTroubleTable }) {
  return (
    <div className="mt-8 rounded-2xl border border-[#D9E7EE] bg-[#F6FAFC] p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5D7285]">
        Test Result
      </p>

      <h4 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900">
        {table.title}
      </h4>

      <p className="mt-2 text-sm leading-6 text-zinc-600">
        1,000건부터 50,000건까지 동시 주문 요청을 발생시켜 비관적 락 방식과
        Redis Lua Script 방식을 비교했습니다.
      </p>

      <div className="mt-5 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#F3F8FB]">
                {table.columns.map((column) => (
                  <th
                    key={column}
                    className="border-b border-[#D9E7EE] px-4 py-3 font-semibold text-[#4A6678]"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {table.rows.map((row, rowIndex) => (
                <tr
                  key={row.join("-")}
                  className={rowIndex % 2 === 0 ? "bg-white" : "bg-[#F6FAFC]"}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`${cell}-${cellIndex}`}
                      className="border-b border-zinc-100 px-4 py-3 text-zinc-700"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}