module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      font: {
        'calibri': 'Calibri',
      },
      colors: {
        'brown-bg': '#EADCCD',
        'brown-btn-bg': '#483D30',
        'brown-btn-bg-light': '#615240',
        'brown-nav': '#51381F',
        'brown-hover': '#ad8761',
        'brown-text': '#644729',
      },
      animation: {
        'wheel-spin': 'spin 1.5s ease-out',
      },
    },
  },
  plugins: [],
};
