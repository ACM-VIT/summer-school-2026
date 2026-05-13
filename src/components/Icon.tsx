// Ultra-light Phosphor-style line icons. 1px stroke, refined geometry.
type IconProps = { className?: string; size?: number };

const base = (size = 16) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export const ArrowUpRight = ({ className, size }: IconProps) => (
  <svg className={className} {...base(size)}>
    <path d="M7 17 17 7" />
    <path d="M9 7h8v8" />
  </svg>
);

export const ArrowRight = ({ className, size }: IconProps) => (
  <svg className={className} {...base(size)}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

export const ArrowDown = ({ className, size }: IconProps) => (
  <svg className={className} {...base(size)}>
    <path d="M12 5v14" />
    <path d="M6 13l6 6 6-6" />
  </svg>
);

export const Spark = ({ className, size }: IconProps) => (
  <svg className={className} {...base(size)}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
  </svg>
);

export const Compass = ({ className, size }: IconProps) => (
  <svg className={className} {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5 13 13l-4.5 2.5L11 11Z" />
  </svg>
);

export const Plane = ({ className, size }: IconProps) => (
  <svg className={className} {...base(size)}>
    <path d="M3 14l8-1 4-9 2 1-2 8 6 1 1 2-7 1-2 6-2-1 1-5-8 1-1-3z" />
  </svg>
);

export const Train = ({ className, size }: IconProps) => (
  <svg className={className} {...base(size)}>
    <rect x="5" y="3" width="14" height="14" rx="3" />
    <path d="M5 11h14M9 17l-2 3M15 17l2 3" />
    <circle cx="9" cy="14" r="0.6" fill="currentColor" />
    <circle cx="15" cy="14" r="0.6" fill="currentColor" />
  </svg>
);

export const Car = ({ className, size }: IconProps) => (
  <svg className={className} {...base(size)}>
    <path d="M4 14l1.5-4.5A3 3 0 0 1 8.4 7.5h7.2a3 3 0 0 1 2.9 2L20 14" />
    <rect x="3" y="14" width="18" height="5" rx="2" />
    <circle cx="7.5" cy="19" r="1.2" />
    <circle cx="16.5" cy="19" r="1.2" />
  </svg>
);

export const Pin = ({ className, size }: IconProps) => (
  <svg className={className} {...base(size)}>
    <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const Calendar = ({ className, size }: IconProps) => (
  <svg className={className} {...base(size)}>
    <rect x="4" y="5" width="16" height="15" rx="2" />
    <path d="M4 9h16M8 3v4M16 3v4" />
  </svg>
);

export const Star = ({ className, size }: IconProps) => (
  <svg className={className} {...base(size)}>
    <path d="M12 4l2.5 5.2 5.7.8-4.1 4 1 5.6L12 17l-5.1 2.6 1-5.6-4.1-4 5.7-.8Z" />
  </svg>
);
