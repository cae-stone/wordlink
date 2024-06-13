/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'indiblue': {
          100: '#7857db',
          200: '#5d35d4',
          300: '#4d27bb',
          400: '#3e2097',
          500: '#301976'
        }
      }
    },
  },
  plugins: [],
}


