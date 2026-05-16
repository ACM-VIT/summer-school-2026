import { useEffect, useState } from "react";

const links = [
  { href: "#brief", label: "Brief" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#speakers", label: "Faculty" },
  { href: "#coordinators", label: "Coordinators" },
  { href: "#host", label: "Host" },
  { href: "#travel", label: "Travel" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const shell = `inline-flex items-center h-11 rounded-full border transition-all duration-700 ease-haptic ${
    scrolled
      ? "bg-paper/85 backdrop-blur-xl border-ink-line shadow-lift-sm"
      : "bg-paper/60 backdrop-blur-md border-ink-line/60"
  }`;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 pointer-events-none px-3 sm:px-6">
        <div className="pointer-events-auto mx-auto mt-5 flex w-max max-w-full items-center gap-2 sm:gap-2.5">
          {/* Brand */}
          <a href="#top" className={`${shell} pl-3 pr-4 gap-2.5`}>
            <img
              src="/images/logos/acm-mark.png"
              alt="ACM"
              className="w-auto"
              style={{ height: "22px" }}
            />
            <span className="hidden sm:inline-block h-3 w-px bg-ink-line" />
            <span className="hidden sm:flex items-baseline gap-1.5">
              <span className="text-[13.5px] font-medium tracking-tight text-ink">
                Summer School
              </span>
              <span className="font-mono text-[10.5px] text-ink-mute">
                2026
              </span>
            </span>
          </a>

          {/* Nav links */}
          <nav className={`${shell} hidden lg:inline-flex px-1.5 gap-0.5`}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full h-8 inline-flex items-center px-3 text-[13px] text-ink-soft hover:text-ink hover:bg-ink/[0.05] transition-all duration-400 ease-haptic"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <a
            href="mailto:annapurna.j@vit.ac.in"
            className={`${shell} pl-4 pr-2 gap-2.5 group`}
          >
            <span className="text-[13px] text-ink">Contact</span>
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-ink text-paper transition-transform duration-500 ease-haptic group-hover:translate-x-[1px] group-hover:-translate-y-[1px]">
              <svg
                width="11"
                height="11"
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
            </span>
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className={`${shell} lg:hidden relative w-11`}
          >
            <span
              className={`absolute left-1/2 top-1/2 block h-px w-4 -translate-x-1/2 bg-ink transition-transform duration-500 ease-haptic ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 block h-px w-4 -translate-x-1/2 bg-ink transition-transform duration-500 ease-haptic ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-30 lg:hidden transition-opacity duration-700 ease-haptic ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-canvas/95 backdrop-blur-3xl" />
        <div className="relative h-full flex flex-col justify-center px-8 gap-1">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`flex items-baseline gap-4 text-[44px] font-medium leading-tight tracking-tighter2 text-ink transition-all ease-haptic ${
                open
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-6 blur-md"
              }`}
              style={{
                transitionDuration: "700ms",
                transitionDelay: `${open ? 80 + i * 50 : 0}ms`,
              }}
            >
              <span className="font-mono text-[11px] text-ink-mute">
                {String(i + 1).padStart(2, "0")}
              </span>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
