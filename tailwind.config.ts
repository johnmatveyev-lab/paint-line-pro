import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#0A1628",
          950: "#06101c",
        },
        ivory: {
          50: "#F8F7F4",
          100: "#f1efe9",
          200: "#e3dfd4",
        },
        teal: {
          400: "#2dd4bf",
          500: "#00C2A8",
          600: "#0d9488",
          700: "#0f766e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(10, 22, 40, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
