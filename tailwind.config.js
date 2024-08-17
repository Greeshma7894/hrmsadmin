/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        "min-w-1245" : { min: "1245px"},
        "max-w-1245" : { max: "1245px"},
        "max-w-1124" : { max: "1124px"},
        "max-w-1024" : { max: "1024px"},
      }
    },
  },
  plugins: [],
}
  

