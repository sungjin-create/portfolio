import CareerMetricCard from "../components/CareerMetricCard";

export default function CareerSummary() {
  return (
    <section className="border-t border-zinc-200 py-20">
      <div className="grid gap-6 md:grid-cols-4">
        <CareerMetricCard
          label="총 경력"
          value="2년 2개월"
        />

        <CareerMetricCard
          label="프로젝트"
          value="2건"
        />

        <CareerMetricCard
          label="정비 데이터"
          value="210만 건+"
        />

        <CareerMetricCard
          label="일 처리량"
          value="1,100건+"
        />
      </div>
    </section>
  );
}