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
        "min-w-1270" : { min: "1270px"},
        "min-w-1260" : { min: "1260px"},
        "min-w-1800" : { min: "1800px"},
        "max-w-1245" : { max: "1245px"},
        "max-w-1124" : { max: "1124px"},
        "max-w-1024" : { max: "1024px"},
        "max-w-2560" : { max: "2560px"}
      }
    },
  },
  plugins: [],
}
  

