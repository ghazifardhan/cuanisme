import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cuan: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
          accent: "#00f59b",
        },
        surface: {
          50: "#181e29",
          100: "#141923",
          200: "#0f141c",
          300: "#0a0d13",
          base: "#06080c",
          card: "#0d1119",
          border: "#1f293d",
          hover: "#182233",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(16, 185, 129, 0.25)",
        "glow-lg": "0 0 40px -10px rgba(16, 185, 129, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
