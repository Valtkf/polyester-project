/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./other.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#0c0a09",
        secondary: "#ea580c",
        tartiary: "#16a34a",
        hovertartiary: "#22c55e",
        cyan: "#22d3ee",
        stonedark: "#292524",
        stone: "#44403c",
      },
      backgroundImage: {
        hero: "url(./images/bghomepage.jpeg)",
      },
    },
  },
  plugins: [],
};
