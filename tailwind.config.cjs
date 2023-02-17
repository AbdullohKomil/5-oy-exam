/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        LogIn: '#C9AC8C',
        bgSliderSpan: '#ffffff99',
      },
    },
  },
  plugins: [],
};
