// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2ECC71",
        dark: "#1A1A2E",
        light: "#F5F5F5",
        secondary: "#FFFFFF",
        black: "#000000",
        gray: "#1E1E1E",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        assistant: ["Assistant", "sans-serif"],
        merriweather: ["Merriweather", "sans-serif"],
        merriweather_serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
