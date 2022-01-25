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
        'btn-bg': '#bf9039',
        'btn-hover': '#d9a74a',
        'btn-bg-light': '#d9a74a',
        'nav': '#2b5c77',
        'nav-underline': '#2b5c77',
        'hover': '#74bacc',
        'dark-text': '#2b5c77',
        'light-text': '#dae6fa',
        'accordion-bg': '#a1bfd1',
        'accordion-border': '#2b5c77',
        'dropdown-bg': '#d8e6f2',
        'dropdown-selected-bg': '#c8dbe8',

      },
      animation: {
        'wheel-spin': 'spin 1.5s ease-out',
      },
    },
  },
  plugins: [],
};
