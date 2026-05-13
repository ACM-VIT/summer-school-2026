import { useState } from "react";
import SectionHeader from "./SectionHeader";

type Topic = { n: number; title: string; brief: string };
type Track = {
  key: "FND" | "SYS" | "PRD";
  label: string;
  span: string;
  blurb: string;
  topics: Topic[];
};

const tracks: Track[] = [
  {
    key: "FND",
    label: "Foundations",
    span: "Days 01 to 03",
    blurb: "The grammar of modern ML. Three days of revision and primer.",
    topics: [
      {
        n: 1,
        title: "Mathematical foundations for ML",
        brief: "Linear algebra, probability and optimisation, recalled and applied.",
      },
      {
        n: 2,
        title: "Primer on deep learning",
        brief: "From the perceptron to transformers, with the training story.",
      },
      {
        n: 3,
        title: "ML algorithms and implementation",
        brief: "How the classical algorithms are written in modern frameworks.",
      },
    ],
  },
  {
    key: "SYS",
    label: "Systems",
    span: "Days 04 to 08",
    blurb: "Where the engineering lives. Hardware, parallelism, graph.",
    topics: [
      {
        n: 4,
        title: "Deep learning systems",
        brief: "Compilation, kernels and the runtime stack underneath PyTorch.",
      },
      {
        n: 5,
        title: "GPU architecture",
        brief: "Streaming multiprocessors, memory hierarchy, occupancy.",
      },
      {
        n: 6,
        title: "Hardware acceleration for AI",
        brief: "Tensor cores, sparsity, mixed precision and inference accelerators.",
      },
      {
        n: 7,
        title: "Distributed ML systems",
        brief: "Data, tensor and pipeline parallelism. Collectives and topology.",
      },
      {
        n: 8,
        title: "Graph systems and AI",
        brief: "Graph neural networks, sampling and large graph infrastructure.",
      },
    ],
  },
  {
    key: "PRD",
    label: "Production",
    span: "Days 09 to 10",
    blurb: "Models meeting the world. Pipelines, edge, responsibility.",
    topics: [
      {
        n: 9,
        title: "MLOps and production AI",
        brief: "Pipelines, feature stores, drift and the lifecycle of a deployed model.",
      },
      {
        n: 10,
        title: "Edge AI",
        brief: "Inference on phones, NPUs and embedded hardware. Quantisation.",
      },
      {
        n: 11,
        title: "Responsible AI",
        brief: "Fairness, robustness, privacy and the engineering choices behind them.",
      },
    ],
  },
];

export default function Curriculum() {
  const [active, setActive] = useState<Track["key"]>("FND");
  const current = tracks.find((t) => t.key === active)!;

  return (
    <section
      id="curriculum"
      className="relative py-28 sm:py-40 px-5 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1320px]">
        <SectionHeader title="Curriculum." />

        {/* Track switcher (mobile friendly, scrolls if needed) */}
        <div className="reveal mt-12 sm:mt-14 -mx-5 sm:mx-0 px-5 sm:px-0 overflow-x-auto no-scrollbar">
          <div className="inline-flex items-center gap-1 rounded-full border border-ink-line bg-paper p-1 w-max">
            {tracks.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                aria-pressed={active === t.key}
                className={`relative inline-flex items-center rounded-full px-4 sm:px-5 h-9 text-[13px] whitespace-nowrap transition-all duration-500 ease-haptic ${
                  active === t.key
                    ? "bg-ink text-paper shadow-ink-press"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                <span>{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Track header */}
        <div
          key={active}
          className="reveal in mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-2"
        >
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-mute whitespace-nowrap">
            {current.span}
          </span>
          <p className="text-[15px] sm:text-[16px] leading-[1.55] text-ink-soft">
            {current.blurb}
          </p>
        </div>

        {/* Topics list */}
        <ol
          key={`${active}-list`}
          className="reveal in mt-10 border-t border-ink-line"
        >
          {current.topics.map((t, i) => (
            <li
              key={t.n}
              className="group grid grid-cols-[36px_1fr] sm:grid-cols-[64px_1.1fr_1.4fr] gap-x-4 sm:gap-x-10 py-6 sm:py-9 border-b border-ink-line transition-colors duration-500 ease-haptic hover:bg-paper/50"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="font-mono text-[12px] sm:text-[12.5px] tracking-[0.04em] text-ink-mute pt-1 sm:self-center tabular-nums">
                {String(t.n).padStart(2, "0")}
              </span>
              <h3 className="font-display text-[20px] sm:text-[24px] md:text-[28px] leading-[1.1] tracking-tighter2 text-ink sm:self-center">
                {t.title}
              </h3>
              <p className="text-[14px] sm:text-[14.5px] leading-[1.55] text-ink-soft sm:self-center max-w-md col-start-2 sm:col-start-3 mt-2 sm:mt-0">
                {t.brief}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
