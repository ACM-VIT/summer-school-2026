import SectionHeader from "./SectionHeader";

type Speaker = {
  name: string;
  role: string;
  affiliation: string;
  focus: string;
  photo?: string;
  initials: string;
  link: string;
};

const speakers: Speaker[] = [
  {
    name: "Manisha Padala",
    role: "Assistant Professor, CSE",
    affiliation: "IIT Gandhinagar",
    focus: "Fairness in ML, game theory and mechanism design.",
    photo: "/images/speakers/manisha.png",
    initials: "MP",
    link: "https://iitgn.ac.in/faculty/cse/manisha",
  },
  {
    name: "Mythili Vutukuru",
    role: "Associate Professor, CSE",
    affiliation: "IIT Bombay",
    focus: "Operating systems, networking, virtualisation and systems for ML.",
    photo: "/images/speakers/mythili.jpg",
    initials: "MV",
    link: "https://www.cse.iitb.ac.in/~mythili/",
  },
  {
    name: "Ayon Chakraborty",
    role: "Assistant Professor, CSE",
    affiliation: "IIT Madras",
    focus: "Mobile sensing, IoT and wireless networks. SENSE Group.",
    photo: "/images/speakers/ayon.jpg",
    initials: "AC",
    link: "https://www.cse.iitm.ac.in/~ayon/",
  },
  {
    name: "Gopalakrishnan Srinivasan",
    role: "Assistant Professor, CSE",
    affiliation: "IIT Madras",
    focus: "Neuromorphic ML, energy efficient hardware for edge AI.",
    photo: "/images/speakers/gopalakrishnan.webp",
    initials: "GS",
    link: "https://rbcdsai.iitm.ac.in/people/gopalakrishnan_srinivasan/",
  },
  {
    name: "Sushim Shrivastava",
    role: "Senior Director, Engineering",
    affiliation: "Qualcomm India",
    focus: "Full stack software architecture for Edge AI and NPUs.",
    photo: "/images/speakers/sushim.png",
    initials: "SS",
    link: "https://www.linkedin.com/in/sushim/",
  },
];

export default function Speakers() {
  return (
    <section
      id="speakers"
      className="relative py-28 sm:py-40 px-5 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1320px]">
        <SectionHeader title="Faculty." />

        <ul className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-5 md:gap-x-6 gap-y-10 md:gap-y-12">
          {speakers.map((s, i) => (
            <li
              key={s.name}
              className={`reveal ${
                i === speakers.length - 1
                  ? "md:col-start-2 md:justify-self-center md:max-w-[260px] lg:col-start-auto lg:max-w-none lg:justify-self-stretch"
                  : ""
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <a
                href={s.link}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <figure>
                  <div className="bezel-shell">
                    <div className="bezel-core overflow-hidden relative aspect-[4/5] bg-ink">
                      {s.photo ? (
                        <img
                          src={s.photo}
                          alt={s.name}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-haptic group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink-soft to-ink">
                          <span className="font-display text-[68px] tracking-tightest text-paper/95">
                            {s.initials}
                          </span>
                        </div>
                      )}
                      <span className="absolute top-3 left-3 font-mono text-[10.5px] tracking-[0.16em] uppercase text-paper/80">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-haptic"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent 50%, rgba(20,18,16,0.75) 100%)",
                        }}
                      />
                      <p className="absolute bottom-4 left-4 right-4 text-[12.5px] leading-snug text-paper opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-700 ease-haptic">
                        {s.focus}
                      </p>
                    </div>
                  </div>

                  <figcaption className="mt-5">
                    <h3 className="font-display text-[18.5px] sm:text-[20px] leading-tight tracking-tighter2 text-ink">
                      {s.name}
                    </h3>
                    <div className="mt-1.5 text-[12.5px] text-ink-soft">
                      {s.role}
                    </div>
                    <div className="text-[12.5px] text-ink-mute">
                      {s.affiliation}
                    </div>
                  </figcaption>
                </figure>
              </a>
            </li>
          ))}
        </ul>

        <p className="reveal mt-12 text-[13.5px] text-ink-mute">
          Two more guest lectures to be confirmed in May. Write to the
          coordinators for the working list.
        </p>
      </div>
    </section>
  );
}
