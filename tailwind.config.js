/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'primary': '#F31559',
          'secondary': '#FF52A2',
          'warning': '#FFB07F',
          'info': '#FFECAF',
          'success': '#65B741',
          'white': '#FFFFFF',
      },
    },
    fontFamily: {
      nunito:['Nunito Sans','sans-serif']
    },
  },
  backgroundColor: {
      'primary': '#F31559',
      'secondary': '#FF52A2',
      'warning': '#FFB07F',
      'info': '#FFECAF',
      'white': '#FFFFFF',
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

