import SectionHeader from "./SectionHeader";
import { Plane, Train, Car, Pin } from "./Icon";

type Mode = {
  icon: React.ReactNode;
  badge: string;
  title: string;
  distance: string;
  duration: string;
  note: string;
};

const modes: Mode[] = [
  {
    icon: <Plane size={14} />,
    badge: "By air",
    title: "Chennai, MAA",
    distance: "138 km",
    duration: "2 h 30 m by road",
    note: "Nearest international airport. Pre paid taxis run about ₹2,800.",
  },
  {
    icon: <Plane size={14} />,
    badge: "By air",
    title: "Bengaluru, BLR",
    distance: "243 km",
    duration: "4 h by road",
    note: "Useful when routing via Bengaluru. Shatabdi runs direct to Katpadi.",
  },
  {
    icon: <Train size={14} />,
    badge: "By rail",
    title: "Katpadi Junction, KPD",
    distance: "5 km",
    duration: "15 m to campus",
    note: "Vande Bharat, Shatabdi and several express trains stop here.",
  },
  {
    icon: <Car size={14} />,
    badge: "By road",
    title: "NH48 corridor",
    distance: "Direct",
    duration: "To the gate",
    note: "From Chennai 2 h 30 m, from Bengaluru 4 h on the Chennai Bangalore highway.",
  },
];

export default function HowToReach() {
  return (
    <section
      id="travel"
      className="relative py-28 sm:py-40 px-5 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1320px]">
        <SectionHeader title="Travel." />

        <p className="reveal mt-12 max-w-2xl font-display text-[24px] sm:text-[28px] leading-[1.22] tracking-tighter2 text-ink text-pretty">
          Vellore sits on the Chennai to Bengaluru corridor. Most of the
          cohort arrives by flight into Chennai, or by train to Katpadi
          Junction five kilometres from the campus gate.
        </p>

        <ul className="reveal mt-16 sm:mt-20 border-y border-ink-line divide-y divide-ink-line">
          {modes.map((m, i) => (
            <li
              key={m.title}
              className="grid grid-cols-1 md:grid-cols-[120px_1.4fr_1.2fr_2fr] gap-y-3 gap-x-8 py-7 sm:py-9 group transition-colors duration-400 ease-haptic hover:bg-paper/50 rounded-md md:px-2"
            >
              <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-mute self-center">
                <span className="opacity-70">{m.icon}</span>
                {m.badge}
              </span>

              <span className="font-display text-[24px] sm:text-[28px] leading-tight tracking-tighter2 text-ink self-center">
                {m.title}
              </span>

              <span className="inline-flex items-baseline gap-3 self-center">
                <span className="font-display text-[22px] tracking-tighter2 text-ink tabular-nums">
                  {m.distance}
                </span>
                <span className="font-mono text-[11.5px] text-ink-mute">
                  {m.duration}
                </span>
              </span>

              <span className="text-[14.5px] leading-[1.55] text-ink-soft self-center">
                {m.note}
              </span>

              <span className="hidden md:flex items-center justify-end self-center text-ink-mute group-hover:text-ink transition-colors duration-400 col-start-4">
                <span aria-hidden className="text-[18px] leading-none">
                  &rsaquo;
                </span>
              </span>

              <span className="md:hidden inline-flex items-center gap-1 text-[11.5px] font-mono tracking-[0.16em] uppercase text-signal">
                <span>0{i + 1}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="reveal mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="inline-flex items-center gap-3 text-[14.5px] text-ink">
            <Pin size={14} className="text-signal" />
            <span className="font-display text-[18px] tracking-tighter2">
              VIT Vellore, Katpadi, Tamil Nadu 632 014
            </span>
          </div>
          <a
            href="https://maps.google.com/?q=VIT+Vellore"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[13.5px] text-ink link-quiet"
          >
            <span>Open in Maps</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7" />
              <path d="M9 7h8v8" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
