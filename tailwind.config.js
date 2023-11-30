const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--makro-primary)',
        secondary: 'var(--makro-secondary)',
        info: 'var(--makro-info)',
        danger: 'var(--makro-danger)',
        gray: colors.gray,
        green: colors.green,
        black: colors.black,
        white: colors.white
      }
    },
  },
  plugins: [],
}
