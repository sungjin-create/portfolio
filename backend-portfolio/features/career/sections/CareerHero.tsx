import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CareerHero() {
  return (
    <section className="py-28">
      <Link
        href="/"
        className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
        Career
      </p>

      <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-zinc-900 md:text-7xl">
        실무 경험
      </h1>

      <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-600">
        기업 MDM, ERP 인터페이스, 기준정보 관리 시스템을 개발하며
        데이터 정합성과 안정성을 고민했습니다.
      </p>
    </section>
  );
}