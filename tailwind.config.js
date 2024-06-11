/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'indiblue': {
          100: '#301976',
          200: '#3e2097',
          300: '#4d27bb',
          400: '#5d35d4',
          500: '#7857db'
        }
      }
    },
  },
  plugins: [],
}


