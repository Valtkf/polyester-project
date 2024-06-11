/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./other.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#0110851",
        'secondary': "#ea580c",
        'tartiary': "#16a34a",
        'cyan': "#0891b2"
      }
    },
  },
  plugins: [],
}

