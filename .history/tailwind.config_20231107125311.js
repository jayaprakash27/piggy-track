/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:
        {
          'pr-violet': '#392270',
          'pr-lightblue': '#DCF3FF',
          'pr-blue': '#00D1C6',
          'pr-lightpink': '#FFF6E5',
        }
    },
  },
  plugins: [],
}