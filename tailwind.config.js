/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0B",
        coal: "#111112",
        surface: "#161618",
        logic: {
          neon: "#3B82F6",
          "neon-hover": "#2563EB",
          "neon-glow": "rgba(59, 130, 246, 0.2)",
        },
        success: {
          emerald: "#10B981",
          "emerald-glow": "rgba(16, 185, 129, 0.2)",
        },
        meta: {
          steel: "#F9FAFB",
          ghost: "#64748B",
          grid: "rgba(255,255,255,0.05)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        titan: "24px",
        "titan-large": "48px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
