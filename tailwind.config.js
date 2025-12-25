/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 🌙 Dark mode enabled via class

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },

      boxShadow: {
        glow: "0 0 30px rgba(59,130,246,0.5)", // blue glow
      },
    },
  },

  plugins: [],
}
