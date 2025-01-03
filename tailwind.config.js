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
        'bg-black': '#111111',
        'bg-enigma-black': '#111111',
      },

      fontSize: {
        'big-phone-xl': '55vw',
        'big-desktop-xl': '58vw',
      },

      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
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

