/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      inter:['Inter','sans-serif']
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'white': '#ffffff',
    //   'purple': '#232D3F',
    //   'midnight': '#121063',
    //   'metal': '#565584',
    //   'tahiti': '#3ab7bf',
    //   'silver': '#ecebff',
    //   'bubble-gum': '#ff77e9',
    //   'bermuda': '#78dcca',
    // },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

