/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'spotify-black': '#181818',
        'spotify-gray': '#a7a7a7',
      },
    },
  },
  plugins: [],
};
