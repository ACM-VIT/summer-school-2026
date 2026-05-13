const partners = [
  { src: "/images/logos/acm.svg", alt: "ACM", h: 26 },
  { src: "/images/logos/vit.svg", alt: "VIT Vellore", h: 38 },
  { src: "/images/logos/infosys.svg", alt: "Infosys", h: 22 },
  { src: "/images/logos/iit-bombay.svg", alt: "IIT Bombay", h: 34 },
  { src: "/images/logos/iit-madras.svg", alt: "IIT Madras", h: 34 },
  { src: "/images/logos/iit-gandhinagar.svg", alt: "IIT Gandhinagar", h: 32 },
  { src: "/images/logos/qualcomm.svg", alt: "Qualcomm", h: 20 },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-paper mt-16 sm:mt-24">
      <div className="pt-14 sm:pt-16 pb-2">
        <div
          className="mx-auto max-w-[1320px] relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee">
            {[0, 1].map((dup) => (
              <ul
                key={dup}
                className="flex items-center gap-x-16 sm:gap-x-20 pr-16 sm:pr-20 shrink-0"
                aria-hidden={dup === 1}
              >
                {partners.map((p) => (
                  <li key={`${dup}-${p.alt}`} className="opacity-50">
                    <img
                      src={p.src}
                      alt={p.alt}
                      style={{ height: p.h }}
                      className="w-auto object-contain invert brightness-[1.15]"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-8 lg:px-12 pt-14 pb-10 sm:pt-20 sm:pb-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-12 items-end pb-10 sm:pb-12 border-b border-paper/15">
            <div className="lg:col-span-8">
              <h2 className="font-display font-medium text-[44px] sm:text-[60px] md:text-[72px] display-tight text-paper">
                Vellore, 01 to 12 June.
              </h2>
            </div>
            <ul className="lg:col-span-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-[14px] text-paper/85">
              {[
                ["#brief", "Brief"],
                ["#curriculum", "Curriculum"],
                ["#speakers", "Faculty"],
                ["#coordinators", "Coordinators"],
                ["#host", "Host"],
                ["#travel", "Travel"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="link-quiet hover:text-paper">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 sm:mt-10 flex items-center gap-2 font-mono text-[11.5px] text-paper/55">
            <span>Built with</span>
            <Heart />
            <span>
              by{" "}
              <a
                href="https://acmvit.in"
                target="_blank"
                rel="noreferrer"
                className="text-paper/85 hover:text-paper link-quiet"
              >
                ACM VIT Student Chapter
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Heart() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="rgb(220 84 36)"
      aria-hidden
    >
      <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" />
    </svg>
  );
}
