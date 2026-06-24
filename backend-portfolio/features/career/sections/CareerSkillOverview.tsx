export default function CareerSkillOverview() {
  return (
    <section className="border-t border-zinc-200 py-20">
      <div className="mb-14">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
          Experience
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
          실무 경험 기술
        </h2>
      </div>

      <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
        <table className="w-full border-collapse">
          <tbody>
            <Row
              title="Backend"
              skills={[
                "Java",
                "Spring Framework",
                "JSP",
              ]}
            />

            <Row
              title="Database"
              skills={[
                "Oracle",
                "PostgreSQL",
                "SQL",
              ]}
            />

            <Row
              title="Integration"
              skills={[
                "ERP Interface",
                "SAP",
                "Workflow",
              ]}
            />

            <Row
              title="Tools"
              skills={[
                "SVN",
                "Jenkins",
                "DBeaver",
                "Eclipse",
              ]}
            />
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Row({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <tr className="border-b border-zinc-100 last:border-0">
      <th className="w-56 bg-zinc-50 px-6 py-6 text-left text-sm font-semibold">
        {title}
      </th>

      <td className="px-6 py-6">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border
                border-zinc-200
                bg-white
                px-3
                py-1
                text-sm
                font-medium
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </td>
    </tr>
  );
}