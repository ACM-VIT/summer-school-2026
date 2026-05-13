/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "rgb(245 242 234 / <alpha-value>)",
          soft: "rgb(250 247 240 / <alpha-value>)",
          deep: "rgb(238 234 224 / <alpha-value>)",
        },
        paper: "rgb(254 252 247 / <alpha-value>)",
        ink: {
          DEFAULT: "rgb(20 18 16 / <alpha-value>)",
          soft: "rgb(64 58 48 / <alpha-value>)",
          mute: "rgb(124 118 104 / <alpha-value>)",
          line: "rgb(214 207 192 / <alpha-value>)",
        },
        signal: {
          DEFAULT: "rgb(220 84 36 / <alpha-value>)",
          soft: "rgb(248 218 198 / <alpha-value>)",
          deep: "rgb(170 56 22 / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter2: "-0.035em",
      },
      transitionTimingFunction: {
        haptic: "cubic-bezier(0.32, 0.72, 0, 1)",
        spring: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      borderRadius: {
        "2xl-soft": "1.25rem",
        "3xl-soft": "1.75rem",
      },
      boxShadow: {
        "lift-sm":
          "0 1px 0 rgba(255, 252, 244, 0.7) inset, 0 1px 2px rgba(20, 18, 16, 0.03), 0 12px 28px -22px rgba(20, 18, 16, 0.18)",
        lift:
          "0 1px 0 rgba(255, 252, 244, 0.8) inset, 0 2px 4px rgba(20, 18, 16, 0.04), 0 24px 60px -36px rgba(20, 18, 16, 0.22)",
        "ink-press":
          "0 1px 0 rgba(255, 255, 255, 0.18) inset, 0 12px 32px -16px rgba(20, 18, 16, 0.45)",
      },
      keyframes: {
        ping_soft: {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "80%,100%": { transform: "scale(2.4)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        ping_soft: "ping_soft 1.9s cubic-bezier(0, 0, 0.2, 1) infinite",
        marquee: "marquee 70s linear infinite",
      },
    },
  },
  plugins: [],
};
