/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      dropShadow: {
        greenglow: [
          '0 0px 20px rgba(34, 236, 8, 0.35)',
          '0 0px 65px rgba(34, 236, 8, 0.4)'
        ]
      },
      colors: {
        hackgreen: '#22EC08'
      },
      fontFamily: {
        sans: ['Minecrafter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}