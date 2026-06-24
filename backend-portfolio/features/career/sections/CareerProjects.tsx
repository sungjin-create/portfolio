import { career } from "@/data/career";
import CareerCard from "../components/CareerCard";

export default function CareerProjects() {
  return (
    <section className="border-t border-zinc-200 py-20">
      <div className="mb-14">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
          Projects
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
          프로젝트 경력
        </h2>
      </div>

      <div className="space-y-8">
        {career.projects.map((project, index) => (
          <CareerCard key={project.title}>
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-500">
                  Project {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
                  {project.title}
                </h3>
              </div>

              <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-600">
                {project.period}
              </span>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <InfoBox label="고객사" value={project.client} />
              <InfoBox label="인원" value={project.team} />
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-zinc-900">
                프로젝트 개요
              </h4>
              <p className="mt-3 leading-8 text-zinc-600">
                {project.overview}
              </p>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <ListBlock title="담당 업무" items={project.responsibilities} />
              <ListBlock title="주요 성과" items={project.achievements} />
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-zinc-900">사용 기술</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </CareerCard>
        ))}
      </div>
    </section>
  );
}

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5">
      <p className="text-sm font-medium text-zinc-500">{label}</p>
      <p className="mt-2 font-semibold text-zinc-900">{value}</p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-lg font-semibold text-zinc-900">{title}</h4>

      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-7 text-zinc-600">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}