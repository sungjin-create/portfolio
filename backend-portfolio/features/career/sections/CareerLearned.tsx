import { career } from "@/data/career";
import CareerCard from "../components/CareerCard";

export default function CareerLearned() {
  return (
    <section className="border-t border-zinc-200 py-20">
      <div className="mb-14">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
          Retrospective
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
          실무를 통해 배운 점
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {career.learned.map((item) => (
          <CareerCard key={item} className="p-7">
            <p className="leading-8 text-zinc-600">{item}</p>
          </CareerCard>
        ))}
      </div>
    </section>
  );
}