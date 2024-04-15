/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        garamond: ['EB Garamond', 'serif'],
        allura: ['Allura', 'cursive'],
      },

      colors: {
        'main-color-one'  : '#05445e',
        'main-color-two'  : '#02fced',
        'animate'         : '#195c78',
        'buble'           : '#075f83',
      }
    },
  },
  plugins: [],
}

