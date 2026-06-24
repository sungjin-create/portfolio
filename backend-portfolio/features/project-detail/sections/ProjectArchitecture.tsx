import ProjectDetailSection from "../components/ProjectDetailSection";

const flows = [
  "Client",
  "Order API",
  "Redis Stock Reservation",
  "Order DB",
  "Kafka Event",
  "Consumer",
];

export default function ProjectArchitecture() {
  return (
    <ProjectDetailSection title="Architecture">
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="grid gap-4 md:grid-cols-6">
          {flows.map((flow, index) => (
            <div key={flow} className="flex items-center gap-4 md:block">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-5 text-center text-sm font-semibold text-zinc-800">
                {flow}
              </div>

              {index < flows.length - 1 && (
                <div className="text-zinc-300 md:mt-4 md:text-center">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </ProjectDetailSection>
  );
}