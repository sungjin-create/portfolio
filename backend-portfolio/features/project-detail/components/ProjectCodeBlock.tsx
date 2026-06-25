import { codeToHtml } from "shiki";

type ProjectCodeBlockProps = {
  title: string;
  language: string;
  code: string;
};

function stripIndent(code: string) {
  const lines = code.replace(/^\n|\n$/g, "").split("\n");

  const minIndent = lines
    .filter((line) => line.trim().length > 0)
    .reduce((min, line) => {
      const indent = line.match(/^ */)?.[0].length ?? 0;
      return Math.min(min, indent);
    }, Infinity);

  return lines.map((line) => line.slice(minIndent)).join("\n");
}

export default async function ProjectCodeBlock({
  title,
  language,
  code,
}: ProjectCodeBlockProps) {
  const html = await codeToHtml(stripIndent(code), {
    lang: language,
    theme: "github-light",
  });

  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-[#D9E7EE] bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-[#D9E7EE] bg-[#F6FAFC] px-4 py-3">
        <p className="text-xs font-semibold tracking-[0.16em] text-[#5D7285]">
          {title}
        </p>

        <span className="rounded-full border border-[#D9E7EE] bg-white px-2.5 py-1 text-xs font-medium text-[#547084]">
          {language}
        </span>
      </div>

      <div
        className="[&_pre]:m-0 [&_pre]:overflow-x-auto [&_pre]:bg-[#FBFCFD!important] [&_pre]:p-4 [&_pre]:text-sm [&_pre]:leading-7"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}