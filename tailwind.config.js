module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'calibri': 'Calibri',
        'helvetica': 'Helvetica',
        'georgia': 'Georgia',
        'cambria': 'Cambria',
        'optima': 'Optima',
      },
      colors: {
        'bg': '#bcd1e0',
        'footer-bg': '#bcd1e0',
        'btn-bg': '#CD853F',
        'btn-hover': '#d6995c',
        'btn-bg-light': '#615240',
        'nav': '#2b5c77',
        'nav-underline': '#2b5c77',
        'hover': '#74bacc',
        'dark-text': '#2b5c77',
        'light-text': '#dae6fa',
        'accordion-bg': '#b6cad9',
        'accordion-border': '#2b5c77',

      },
      animation: {
        'wheel-spin': 'spin 1.5s ease-out',
      },
    },
  },
  plugins: [],
};
