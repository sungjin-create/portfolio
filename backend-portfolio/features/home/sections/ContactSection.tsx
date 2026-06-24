import { Mail } from "lucide-react";
import Section from "@/shared/components/Section";
import SectionHeader from "@/shared/components/SectionHeader";
import { profile } from "@/data/portfolio";

export default function ContactSection() {
  return (
    <Section>
      <SectionHeader
        label="Contact"
        title="함께 일할 준비가 되어 있습니다."
        description="안정적인 서비스를 함께 만들어갈 기회를 기다리고 있습니다."
      />

      <div className="space-y-4">
        <a
          href={`mailto:${profile.email}`}
          className="
            inline-flex
            items-center
            gap-3

            rounded-2xl
            border
            border-zinc-200

            bg-white

            px-5
            py-4

            text-base
            font-medium
            text-zinc-700

            shadow-sm

            transition-all
            duration-300

            hover:border-zinc-300
            hover:shadow-md
          "
        >
          <Mail size={18} />
          {profile.email}
        </a>

        <div>
          <a
            href="https://github.com/sungjin-create"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-sm
              font-medium
              text-zinc-500

              transition
              hover:text-zinc-900
            "
          >
            Github →
          </a>
        </div>
      </div>
    </Section>
  );
}