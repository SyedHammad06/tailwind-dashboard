const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/svg/**/*.{js, ts, jsx, tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#e5e4ee',
      secondary: '#181623',
      tableLight: '#2b2b2c',
      tableDark: '#040113',
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
      red: colors.red,
      green: colors.green,
      gray: colors.gray,
      black: colors.black,
    },
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      primary: '#e5e4ee',
      light: '#A5A2B8',
      secondary: '#352E5B',
    }),
    screens: {
      sm: '640px',
      md: '769px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
