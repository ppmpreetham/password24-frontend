/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'enigma-green': '#22EC08',
      },

      fontSize: {
        'big-xl': '45rem',
      },

      fontFamily: {
        'calcio': ['Calcio', 'sans-serif'],
        'mondwest': ['Mondwest', 'sans-serif'],
        'neuebit': ['NeueBit', 'sans-serif'],
        'montreal-medium': ['Montreal-Medium', 'sans-serif'],
        'montreal-book': ['Montreal-Book', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

