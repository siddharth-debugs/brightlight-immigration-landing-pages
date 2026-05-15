/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0a1a2a",
          900: "#0f2336",
          800: "#132f46",
          700: "#1d4267",
          600: "#1d629a",
          500: "#2c7ec0",
        },
        gold: {
          50: "#fbf5e6",
          100: "#f8f0e0",
          200: "#ead9b0",
          300: "#dec18f",
          400: "#e8c47c",
          500: "#d4a857",
          600: "#a67e3a",
        },
        cream: "#f8f0e0",
        ink: "#0a0f18",
      },
      fontFamily: {
        display: ['"DM Serif Display"', "ui-serif", "Georgia", "serif"],
        sans: ['"DM Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(10,15,24,0.04), 0 8px 24px rgba(10,15,24,0.06)",
        lift: "0 2px 4px rgba(10,15,24,0.05), 0 20px 48px rgba(10,15,24,0.10)",
        ring: "0 0 0 1px rgba(19,47,70,0.08)",
        gold: "0 12px 32px -8px rgba(212,168,87,0.45)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.5, transform: "scale(0.85)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-dot": "pulse-dot 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
