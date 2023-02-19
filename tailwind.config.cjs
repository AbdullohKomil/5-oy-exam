/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        LogIn: '#C9AC8C',
        bgSliderSpan: '#ffffff99',
        profileHeaderActive: '#2D2D2D',
        profileHeader: '#f3f6f9',
        cardBg: '#1E1E1E',
        cardBgLight:'#F5F5F5'
      },
    },
  },
  plugins: [],
};
