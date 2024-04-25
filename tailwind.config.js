/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    fontSize: {
      font_sml_wlc             : '3em',
      font_wlc                 : '5em',
      font_sign                : '1.7em',
      font_mobile_btn          : '1.0rem',
      font_btn                 : '1.4rem',
      sect_mobile_text         : '2.4rem',
      sect_text                : '2.7rem',
      sect_mobile_head         : '1.75rem',
      sect_head                : '3.5rem',
      sect_mobile_p            : '0.75rem',
      sect_p                   : '1.25rem',
    },
    extend: {
      fontFamily: {
        garamond: ['EB Garamond', 'serif'],
        allura: ['Allura', 'cursive'],
        rubik: ['Rubik', 'sans-serif'],
      },

      colors: {
        'main-color-one'         : '#05445e',
        'main-color-two'         : '#02fced',
        'animate'                : '#195c78',
        'nav'                    : '#7f878a',
        'buble'                  : '#075f83',
        'nav-25'                 : 'rgba(5, 68, 94, 0.5)',
        'transparent'            : 'transparent',
        'close-btn'              : '#05729f',
      },

      spacing: {
        '100': '30rem',
      }
    },
  },
  plugins: [],
}

