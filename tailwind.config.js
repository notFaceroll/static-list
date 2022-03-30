module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      width: {
        'dynamic': 'clamp(3rem, 90vw, 56rem)'
      },
      fontFamily: {
        'spartan': ['Spartan', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern-desktop': 'url(../public/bg-header-desktop.svg)',
        'hero-pattern-mobile': 'url(../public/bg-header-mobile.svg)'
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
