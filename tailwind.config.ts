import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      colors: {
        bg: {
          dark: "#0B0B0F",
          card: "#111118",
          hover: "#16161F",
        },
        purple: {
          400: "#C084FC",
          500: "#A855F7",
          600: "#9333EA",
          700: "#7C3AED",
          800: "#6D28D9",
          900: "#4C1D95",
        },
        violet: {
          400: "#A78BFA",
          500: "#8B5CF6",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "purple-gradient": "linear-gradient(135deg, #7C3AED 0%, #9333EA 50%, #A855F7 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.05) 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(124,58,237,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(168,85,247,0.6)" },
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
