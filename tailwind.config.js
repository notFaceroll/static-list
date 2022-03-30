module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'rgba(149, 157, 255, 0.2) 0px 8px 24px;'
      },
      fontFamily: {
        'spartan': ['Spartan', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern-desktop': 'url(../public/bg-header-desktop.svg)',
      },
      colors: {
        primary: '#5BA4A4',
        neutral: {
          background: '#EFFAFA',
          filterTablets: '#EEF6F6',
          darkGrayishCyan: '#7B8E8E',
          veryDarkGrayishCyan: '#2C3A3A',
        },
      },
    },
  },
  plugins: [],
};
