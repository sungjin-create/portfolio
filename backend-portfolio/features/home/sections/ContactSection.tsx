import { Mail } from "lucide-react";
import Section from "@/shared/components/Section";
import { profile } from "@/data/portfolio";

export default function ContactSection() {
  return (
    <Section>
      <div className="text-center">
        <h2 className="text-3xl font-semibold md:text-5xl">
          함께 일할 준비가 되어 있습니다.
        </h2>

        <p className="mt-6 text-zinc-400">
          안정적인 서비스를 만드는 백엔드 개발자가 되겠습니다.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
        >
          <Mail size={18} />
          Contact Me
        </a>
      </div>
    </Section>
  );
}