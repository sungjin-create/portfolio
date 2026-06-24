import { career } from "@/data/career";

export default function CareerTech() {
  return (
    <section className="border-t border-zinc-200 py-20">
      <div className="mb-14">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
          Technical Experience
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
          실무에서 사용한 기술
        </h2>
      </div>

      <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
        <table className="w-full border-collapse text-left">
          <tbody>
            {career.technicalExperience.map((group) => (
              <tr
                key={group.category}
                className="border-b border-zinc-100 last:border-b-0"
              >
                <th className="w-56 bg-zinc-50 px-6 py-6 text-sm font-semibold text-zinc-900">
                  {group.category}
                </th>

                <td className="px-6 py-6">
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-medium text-zinc-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}