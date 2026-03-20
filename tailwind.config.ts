import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Core palette
        navy: {
          DEFAULT: "#0A0F1C",
          light: "#111827",
          lighter: "#1a2236",
        },
        cream: {
          DEFAULT: "#E8E6E3",
          dark: "#C4C0BA",
          muted: "#9A9590",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#D4B85C",
          dark: "#B8943E",
        },
        // Geography badges
        geo: {
          gcc: "#2D8B6F",
          "gcc-bg": "#1a2f28",
          hk: "#7C5CBF",
          "hk-bg": "#241f33",
          sg: "#3A8B8B",
          "sg-bg": "#1a2f2f",
          global: "#6B7280",
          "global-bg": "#1f2028",
        },
        // Semantic
        warning: "#C4614E",
        // PhiFabric cross-link palette
        phi: {
          cream: "#FAF7F2",
          "cream-dark": "#F0EBE3",
          dark: "#2D2A26",
          "dark-soft": "#3D3A36",
          "warm-gray": "#8C8578",
        },
        // Light mode overrides
        light: {
          bg: "#FAFAF8",
          text: "#1A1A1A",
          muted: "#4A4A4A",
          card: "#FFFFFF",
          border: "#E5E5E5",
        },
      },
      fontFamily: {
        headline: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
      fontSize: {
        "body": ["1.0625rem", { lineHeight: "1.8" }],
        "nav": ["0.8125rem", { lineHeight: "1", letterSpacing: "0.08em" }],
        "meta": ["0.8125rem", { lineHeight: "1.5" }],
      },
      maxWidth: {
        content: "720px",
        mid: "960px",
        outer: "1120px",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
    },
  },
  plugins: [],
};
export default config;
