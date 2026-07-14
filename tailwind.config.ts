import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        grey: "#9e9e9e",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        assistant: ["Assistant", "sans-serif"],
        merriweather: ["Merriweather", "sans-serif"],
        merriweather_serif: ["Merriweather", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideTop: {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        zoomIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },

        keepCursor: {
          from: { borderColor: "#fff" },
          to: { borderColor: "#fff" },
        },

        blink: {
          "50%": {
            borderColor: "transparent",
          },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slideRight: "slideRight 0.8s ease-out both",
        slideLeft: "slideLeft 0.8s ease-out both",
        slideTop: "slideTop 0.8s ease-out both",
        fadeUp: "fadeUp 0.8s ease-out both",
        fadeIn: "fadeIn 0.8s ease-out both",
        zoomIn: "zoomIn 0.6s ease-out both",
        typing: "typing 4s steps(38,end) forwards",
        keepCursor: "keepCursor 4s linear forwards",
        blink: "blink .8s step-end 4s infinite",
        slideUp: "slideUp 0.8s ease-out both",
        pulseSlow: "pulse 10s cubic-bezier(0.7, 0, 0.9, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
