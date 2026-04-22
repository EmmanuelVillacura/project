/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F9F6F0',
        'wood': '#5C3A21',
        'gold': '#C9A87C',
        'terracotta': '#B85C38',
        'brown': '#3E2A1F',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
