module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#214EE0',
        black: '#2D2D40',
        grey: '#A4B3C6',
      },
      fontFamily: {
        'codec-pro-bold': ['codecProBold'],
        'codec-pro-bold-italic': ['codecProBoldItalic'],
        'codec-pro-extra-bold': ['codecProExtraBold'],
        'codec-pro-extra-bold-italic': ['codecProExtraBoldItalic'],
        'codec-pro-extra-light-italic': ['codecProExtraLightItalic'],
        'codec-pro-fat': ['codecProFat'],
        'codec-pro-italic': ['codecProItalic'],
        'codec-pro-light': ['codecProLight'],
        'codec-pro-light-italic': ['codecProLightItalic'],
        'codec-pro-news': ['codecProNews'],
        'codec-pro-regular': ['codecProRegular'],
        'hagrid-text': ['HagridTextVariablesGX'],
      },
      fontSize: {
        30: '1.875rem',
        60: '3.75rem',
        25: '1.563rem',
        58: '3.625rem',
        20: '1.25rem',
        24: '1.5rem',
      },
    },
  },
  plugins: [],
};
