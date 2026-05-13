import SectionHeader from "./SectionHeader";

type Plate = {
  src: string;
  alt: string;
  caption: string;
  sub: string;
  position?: string;
};

const plates: Plate[] = [
  {
    src: "/images/places/vit-main-building.jpg",
    alt: "VIT main academic building",
    caption: "Main academic building",
    sub: "Channa Reddy Auditorium sits inside the central block",
  },
  {
    src: "/images/places/vit-library.jpg",
    alt: "Periyar Central Library",
    caption: "Periyar Central Library",
    sub: "Twenty four hour reading rooms",
  },
  {
    src: "/images/places/vit-tech-tower.jpg",
    alt: "Technology Tower",
    caption: "Technology Tower",
    sub: "Lecture halls and the SCOPE labs",
  },
  {
    src: "/images/places/vit-sjt.png",
    alt: "Silver Jubilee Tower",
    caption: "Silver Jubilee Tower",
    sub: "Labs, lectures",
  },
];

export default function AboutVIT() {
  return (
    <section
      id="host"
      className="relative py-28 sm:py-40 px-5 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1320px]">
        <SectionHeader title="About VIT." />

        <p className="reveal mt-12 max-w-3xl font-display text-[24px] sm:text-[30px] md:text-[34px] leading-[1.18] tracking-tighter2 text-ink text-pretty">
          A walking campus at the foot of the Eastern Ghats, two and a half
          hours west of Chennai. The school lives entirely inside it.
        </p>

        {/* Bento with matched heights */}
        <div className="reveal mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
          <Figure
            plate={plates[0]}
            className="md:col-span-8 aspect-[16/10] md:aspect-auto md:h-[440px]"
          />
          <Figure
            plate={plates[1]}
            className="md:col-span-4 aspect-[4/5] md:aspect-auto md:h-[440px]"
          />
          <Figure
            plate={plates[2]}
            className="md:col-span-4 aspect-[4/5] md:aspect-auto md:h-[440px]"
          />
          <Figure
            plate={plates[3]}
            className="md:col-span-8 aspect-[16/10] md:aspect-auto md:h-[440px]"
          />
        </div>
      </div>
    </section>
  );
}

function Figure({
  plate,
  className,
}: {
  plate: Plate;
  className?: string;
}) {
  return (
    <figure className={`group relative overflow-hidden rounded-2xl border border-ink-line ${className ?? ""}`}>
      <img
        src={plate.src}
        alt={plate.alt}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-haptic group-hover:scale-[1.025] ${
          plate.position ?? "object-center"
        }`}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 50%, rgba(20,18,16,0.62) 100%)",
        }}
      />
      <figcaption className="absolute bottom-4 left-5 right-5 text-paper">
        <div className="font-display text-[17px] sm:text-[19px] tracking-tighter2">
          {plate.caption}
        </div>
        <div className="mt-1 text-[12px] sm:text-[12.5px] text-paper/80 max-w-md">
          {plate.sub}
        </div>
      </figcaption>
    </figure>
  );
}
