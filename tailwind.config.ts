import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#FFF9E6",
          100: "#FFF0BF",
          200: "#FFE699",
          300: "#FFD966",
          400: "#FFCC33",
          500: "#C9A84C",
          600: "#B8942E",
          700: "#9A7B24",
          800: "#7C631D",
          900: "#5E4A15",
        },
        dark: {
          50: "#2A2A2E",
          100: "#232327",
          200: "#1E1E22",
          300: "#19191D",
          400: "#141418",
          500: "#0F0F13",
          600: "#0C0C0F",
          700: "#09090C",
          800: "#060608",
          900: "#030305",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A84C 0%, #FFD966 50%, #B8942E 100%)",
        "dark-gradient": "linear-gradient(180deg, #0F0F13 0%, #19191D 50%, #0F0F13 100%)",
        "card-gradient": "linear-gradient(145deg, rgba(201,168,76,0.08) 0%, rgba(15,15,19,0.95) 100%)",
        "glow-gradient": "radial-gradient(ellipse at center, rgba(201,168,76,0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        "gold-sm": "0 2px 8px rgba(201,168,76,0.15)",
        "gold-md": "0 4px 16px rgba(201,168,76,0.2)",
        "gold-lg": "0 8px 32px rgba(201,168,76,0.25)",
        "gold-glow": "0 0 40px rgba(201,168,76,0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201,168,76,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(201,168,76,0.3)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
