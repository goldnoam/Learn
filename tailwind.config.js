/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'Heebo', 'sans-serif'],
      },
      colors: {
        card: '#1e293b',
        cardHover: '#334155',
      }
    },
  },
  plugins: [],
}