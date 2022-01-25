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
        'bg': '#DDF1FF',
        'footer-bg': '#DDF1FF',
        'btn-bg': '#96482C',
        'btn-hover': '#bf5e3b',
        'btn-bg-light': '#c26c4e',
        'nav': '#234B60',
        'nav-underline': '#234B60',
        'hover': '#74bacc',
        'dark-text': '#234B60',
        'light-text': '#dae6fa',
        'accordion-bg': '#cce6ff',
        'accordion-border': '#234B60',
        'dropdown-bg': '#edf8ff',
        'dropdown-selected-bg': '#b3d1e6',

      },
      animation: {
        'wheel-spin': 'spin 1.5s ease-out',
      },
    },
  },
  plugins: [],
};
