/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      inter:['Inter','sans-serif']
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

