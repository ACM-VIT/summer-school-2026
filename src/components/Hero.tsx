export default function Hero() {
  return (
    <section
      id="top"
      className="relative px-5 sm:px-8 lg:px-12 pt-36 sm:pt-44 pb-20 sm:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 600px at 12% -10%, rgba(220, 84, 36, 0.06), transparent 65%), radial-gradient(900px 600px at 110% 8%, rgba(64, 58, 48, 0.04), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-[1320px]">
        <h1 className="reveal font-display font-medium text-[40px] sm:text-[92px] md:text-[120px] lg:text-[148px] xl:text-[168px] display-tight text-ink max-w-[14ch]">
          Systems for ML.
        </h1>

        <p className="reveal mt-10 sm:mt-12 max-w-2xl text-[18px] sm:text-[19.5px] leading-[1.5] text-ink-soft text-pretty">
The ACM Summer School on Systems for ML offers an intensive 10-day program emphasizing the systems perspective required for building machine learning solutions, while balancing theoretical foundations with practical engineering. The school is women only targeted towards 3rd and 4th year UG women students, and early-stage PG women students.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center gap-3">
          <a href="#curriculum" className="btn-ink">
            See the curriculum
            <span className="btn-island">
              <ArrowGlyph />
            </span>
          </a>
          <a href="#brief" className="btn-paper">
            Read the brief
          </a>
        </div>

        <div className="reveal mt-24 sm:mt-32 hairline" />
        <div className="reveal mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
          <Fact k="When" v="01 to 12 Jun" sub="2026" />
          <Fact k="Where" v="VIT Vellore" sub="Tamil Nadu, India" />
          <Fact k="For" v="Women UG / PG" sub="3rd, 4th year and early MS" />
          <Fact k="Fee" v="₹3,000 + GST" sub="hostel and meals covered" />
        </div>
      </div>
    </section>
  );
}

function Fact({ k, v, sub }: { k: string; v: string; sub: string }) {
  return (
    <div>
      <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-ink-mute">
        {k}
      </div>
      <div className="mt-3 font-display text-[22px] sm:text-[24px] leading-tight tracking-tighter2 text-ink">
        {v}
      </div>
      <div className="mt-1.5 text-[13.5px] text-ink-soft">{sub}</div>
    </div>
  );
}

function ArrowGlyph() {
  return (
    <svg
      width="13"
      height="13"
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
  );
}
