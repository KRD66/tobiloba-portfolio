

  /** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'brand-primary': '#020A51',
          'brand-secondary': '#14B8A6',
          'brand-bg': '#F9FAFB',
          'navbar-bg': '#DADDFB',
          'hero-text': '#E6E8FD',
        },
        fontFamily: {
          comfortaa: ['Comfortaa', 'sans-serif'],
        },
      },
    },
    plugins: [
      require('tailwind-scrollbar-hide')
    ],
  };

