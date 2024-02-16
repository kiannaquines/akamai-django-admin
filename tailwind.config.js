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
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#F31559',
      'secondary': '#FF52A2',
      'warning': '#FFB07F',
      'info': '#FFECAF',
      'green': '#65B741',
      'white': '#FFFFFF',
      'blue': '#223e9c',
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

