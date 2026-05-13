import SectionHeader from "./SectionHeader";

type Coord = {
  name: string;
  role: string;
  org: string;
  email: string;
};

const coordinators: Coord[] = [
  {
    name: "Annapurna Jonnalagadda",
    role: "Local and academic",
    org: "VIT Vellore",
    email: "annapurna.j@vit.ac.in",
  },
  {
    name: "Ushus E.Z",
    role: "Local",
    org: "VIT Vellore",
    email: "ushus@vit.ac.in",
  },
  {
    name: "Abhishek Bichhawat",
    role: "Academic",
    org: "IIT Gandhinagar",
    email: "abhishek.b@iitgn.ac.in",
  },
];

export default function Coordinators() {
  return (
    <section
      id="coordinators"
      className="relative py-28 sm:py-40 px-5 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1320px]">
        <SectionHeader title="Coordinators." />

        <ul className="reveal mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-ink-line">
          {coordinators.map((c, i) => (
            <li
              key={c.email}
              className={`group relative pt-8 sm:pt-10 pb-10 sm:pb-12 ${
                i > 0 ? "md:border-l border-ink-line md:pl-8 lg:pl-10" : ""
              } ${i < coordinators.length - 1 ? "border-b md:border-b-0 border-ink-line" : ""}`}
            >
              <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-ink-mute">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 font-display text-[28px] sm:text-[34px] leading-[1.05] tracking-tighter2 text-ink">
                {c.name}
              </h3>
              <div className="mt-4 text-[14.5px] text-ink-soft">
                {c.role},{" "}
                <span className="text-ink">{c.org}</span>
              </div>

              <a
                href={`mailto:${c.email}`}
                className="mt-6 inline-flex items-center gap-2 text-[13.5px] text-ink link-quiet"
              >
                <span>{c.email}</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-60 group-hover:opacity-100 transition-opacity duration-400 ease-haptic"
                >
                  <path d="M7 17 17 7" />
                  <path d="M9 7h8v8" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
