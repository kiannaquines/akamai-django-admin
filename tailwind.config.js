/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#ffffff',
          'purple': '#232D3F',
          'midnight': '#121063',
          'metal': '#565584',
          'tahiti': '#3ab7bf',
          'silver': '#ecebff',
          'bubble-gum': '#ff77e9',
          'success': '#22C55E',
      },
    },
    fontFamily: {
      inter:['Inter','sans-serif']
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

