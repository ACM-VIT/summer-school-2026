import SectionHeader from "./SectionHeader";

const stats = [
  { v: "10", l: "Residential days" },
  { v: "11", l: "Topics taught" },
  { v: "5", l: "Faculty in residence" },
  { v: "60", l: "Cohort size" },
];

export default function About() {
  return (
    <section
      id="brief"
      className="relative py-28 sm:py-40 px-5 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1320px]">
        <SectionHeader title="Brief." />

        <div className="reveal mt-12 grid grid-cols-1 lg:grid-cols-12 gap-y-10 gap-x-12">
          <p className="lg:col-span-8 font-display text-[26px] sm:text-[32px] md:text-[36px] leading-[1.2] tracking-tighter2 text-ink text-pretty">
            A residential programme on the{" "}
            <span className="text-signal">engineering</span> behind modern
            machine learning. Eleven topics across ten days, taught at VIT
            Vellore, reserved for women undergraduates and early
            postgraduates, sponsored by Infosys.
          </p>

          <div className="lg:col-span-4 lg:pl-8 lg:border-l border-ink-line">
            <p className="text-[15.5px] leading-[1.65] text-ink-soft text-pretty">
              Mornings for lectures, afternoons in the lab. The first three
              days are foundations, the next five are systems, the last
              three are about putting models into production.
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.65] text-ink-soft text-pretty">
              Selection closed in February. This site is the public brief
              and the travel notes for arriving students.
            </p>
          </div>
        </div>

        {/* Rule divided stat strip */}
        <div className="reveal mt-20 sm:mt-28 border-t border-ink-line">
          <dl className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ink-line">
            {stats.map((s, i) => (
              <div
                key={s.l}
                className={`px-2 sm:px-6 py-8 sm:py-10 ${
                  i < 2 ? "border-b md:border-b-0 border-ink-line" : ""
                }`}
              >
                <dt className="font-display text-[64px] sm:text-[80px] md:text-[96px] leading-none tracking-tightest text-ink tabular-nums">
                  {s.v}
                </dt>
                <dd className="mt-4 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-mute">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
