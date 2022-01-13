module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: {
          500: "#272739",
          600: "#343346",
          700: "#2D2C41",
          800: "#313045",
        },
        blue: {
          400: "#5DAAE2",
          500: "#2A65FC",
        },
        orange: {
          10: "#EB8C5C",
          20: "#EBA215",
          500: "#DC2828",
          400: "#FF7A00",
          500: "#DC2828",
        }
      },
      width: {
        '61': '60px',
        '74': '74px',
        '376': '376px',
      },
      height: {
        '31': '30px',
        '37': '37px',
        '61': '60px',
        '74': '74px',
        '140': '140px',
      }
    },

  },
  variants: {
    extend: {
      scale: ['active']
    },
  },
  plugins: [],
}
