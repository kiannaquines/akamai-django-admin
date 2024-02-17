/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      nunito:['Nunito Sans','sans-serif']
    },
    colors: {
      'primary':'#3C50E0',
      'secondary':'#27C08D',
      'gray': '#F1F5F9',
      'dark':'#323948',
      'info':'#293042',
      'danger':'#B31312',
      'orange': '#FFA447',
      'white':'#FFFFFF',
      'main':'#F1F5F9'
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

