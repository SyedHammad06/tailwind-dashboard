const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#e5e4ee',
      secondary: '#181623',
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
    textColor: {
      light: '#A5A2B8',
      dark: '#352E5B',
      white: colors.white,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
