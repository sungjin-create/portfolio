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
      <div className="rounded-3xl border border-zinc-200 bg-white/90 p-8 shadow-sm ring-1 ring-white/70">
        <div className="grid gap-4 md:grid-cols-6">
          {flows.map((flow, index) => (
            <div key={flow} className="flex items-center gap-4 md:block">
              <div className="rounded-2xl border border-[#D9E7EE] bg-[#F6FAFC] px-4 py-5 text-center text-sm font-semibold text-[#4A6678]">
                {flow}
              </div>

              {index < flows.length - 1 && (
                <div className="text-blue-200 md:mt-4 md:text-center">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </ProjectDetailSection>
  );
}