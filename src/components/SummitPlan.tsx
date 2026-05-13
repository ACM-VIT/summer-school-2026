import SectionHeader from "./SectionHeader";

type Day = {
  day: string;
  date: string;
  weekday: string;
  arc: "FND" | "SYS" | "PRD" | "CAP";
  title: string;
  pm: string;
};

const days: Day[] = [
  { day: "01", date: "01 Jun", weekday: "Mon", arc: "FND", title: "Mathematical foundations for ML", pm: "Lab: numpy and autograd" },
  { day: "02", date: "02 Jun", weekday: "Tue", arc: "FND", title: "Primer on deep learning", pm: "Lab: training a small transformer" },
  { day: "03", date: "03 Jun", weekday: "Wed", arc: "FND", title: "ML algorithms and implementation", pm: "Lab: from scratch in PyTorch" },
  { day: "04", date: "04 Jun", weekday: "Thu", arc: "SYS", title: "Deep learning systems and implementation", pm: "Lab: kernel inspection" },
  { day: "05", date: "05 Jun", weekday: "Fri", arc: "SYS", title: "GPU architecture", pm: "Lab: CUDA primitives" },
  { day: "06", date: "06 Jun", weekday: "Sat", arc: "SYS", title: "Hardware acceleration for AI", pm: "Lab: mixed precision and sparsity" },
  { day: "07", date: "07 Jun", weekday: "Sun", arc: "SYS", title: "Distributed ML systems", pm: "Lab: data and tensor parallelism" },
  { day: "08", date: "08 Jun", weekday: "Mon", arc: "SYS", title: "Graph systems and AI", pm: "Lab: graph sampling at scale" },
  { day: "09", date: "09 Jun", weekday: "Tue", arc: "PRD", title: "MLOps and production AI", pm: "Lab: drift detection" },
  { day: "10", date: "10 Jun", weekday: "Wed", arc: "PRD", title: "Edge AI and responsibility", pm: "Lab: on device inference" },
  { day: "11", date: "11 Jun", weekday: "Thu", arc: "CAP", title: "Capstone build day", pm: "Workrooms open through the night" },
  { day: "12", date: "12 Jun", weekday: "Fri", arc: "CAP", title: "Demos and departure", pm: "Closing dinner" },
];

const arcLabel: Record<Day["arc"], string> = {
  FND: "Foundations",
  SYS: "Systems",
  PRD: "Production",
  CAP: "Capstone",
};

const arcDot: Record<Day["arc"], string> = {
  FND: "bg-[#7E8466]",
  SYS: "bg-signal",
  PRD: "bg-ink-soft",
  CAP: "bg-signal-deep",
};

export default function SummitPlan() {
  return (
    <section
      id="schedule"
      className="relative py-28 sm:py-40 px-5 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1320px]">
        <SectionHeader title="Schedule." />

        <div className="reveal mt-14 sm:mt-16 bezel-shell">
          <div className="bezel-core overflow-hidden">
            {/* Header row */}
            <div className="hidden md:grid grid-cols-[64px_140px_140px_1fr_1.1fr] gap-x-6 px-7 py-4 font-mono text-[10.5px] tracking-[0.16em] uppercase text-ink-mute border-b border-ink-line">
              <span>Day</span>
              <span>Date</span>
              <span>Track</span>
              <span>Morning lecture</span>
              <span>Afternoon lab</span>
            </div>

            <ol>
              {days.map((d) => (
                <li
                  key={d.day}
                  className="group grid grid-cols-[44px_1fr] md:grid-cols-[64px_140px_140px_1fr_1.1fr] gap-x-4 md:gap-x-6 px-5 md:px-7 py-5 border-b border-ink-line last:border-0 transition-colors duration-300 ease-haptic hover:bg-canvas-soft"
                >
                  <span className="font-mono text-[12.5px] text-ink-mute self-center tabular-nums">
                    {d.day}
                  </span>

                  {/* Mobile collapse */}
                  <div className="md:hidden">
                    <div className="font-mono text-[11px] text-ink-mute">
                      {d.weekday}, {d.date}
                    </div>
                    <div className="mt-1 font-display text-[18px] leading-snug tracking-tighter2 text-ink">
                      {d.title}
                    </div>
                    <div className="mt-2 inline-flex items-center gap-2 text-[12px] text-ink-soft">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${arcDot[d.arc]}`}
                      />
                      {arcLabel[d.arc]}
                      <span className="text-ink-mute">{d.pm}</span>
                    </div>
                  </div>

                  {/* Desktop columns */}
                  <div className="hidden md:flex flex-col self-center">
                    <span className="font-display text-[16px] tracking-tighter2 text-ink">
                      {d.date}
                    </span>
                    <span className="font-mono text-[10.5px] text-ink-mute mt-0.5">
                      {d.weekday}
                    </span>
                  </div>
                  <div className="hidden md:inline-flex items-center gap-2.5 self-center text-[13px] text-ink-soft">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${arcDot[d.arc]}`}
                    />
                    {arcLabel[d.arc]}
                  </div>
                  <div className="hidden md:block self-center font-display text-[17.5px] leading-snug tracking-tighter2 text-ink">
                    {d.title}
                  </div>
                  <div className="hidden md:block self-center text-[13.5px] text-ink-soft">
                    {d.pm}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="reveal mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12.5px] text-ink-soft">
          <Legend dot={arcDot.FND} label="Foundations" />
          <Legend dot={arcDot.SYS} label="Systems" />
          <Legend dot={arcDot.PRD} label="Production" />
          <Legend dot={arcDot.CAP} label="Capstone" />
          <span className="text-ink-mute md:ml-auto">
            Subject to change before the cohort arrives
          </span>
        </div>
      </div>
    </section>
  );
}

function Legend({ dot, label }: { dot: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`h-1.5 w-3 rounded-sm ${dot}`} />
      <span>{label}</span>
    </span>
  );
}
