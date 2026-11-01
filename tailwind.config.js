/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      // Change these two colors to re-theme the whole site.
      colors: {
        brand: "#8b5cf6", // violet
        accent: "#22d3ee", // cyan
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        load: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "spin-slow": "spin-slow 12s linear infinite",
        "spin-reverse": "spin-slow 18s linear infinite reverse",
        "fade-in": "fade-in 0.3s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        load: "load 2.2s ease-in-out forwards",
      },
      spacing: {
        34: "8.5rem",
      },
    },
  },
  plugins: [],
};
