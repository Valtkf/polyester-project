/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./other.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0c0a09",
        secondary: "#ea580c",
        tartiary: "#16a34a",
        hovertartiary: "#22c55e",
        cyan: "#0891b2",
      },
    },
  },
  plugins: [],
};
