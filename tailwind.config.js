/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F7F3EC',
          200: '#EFEAE1',
          300: '#E3DACD',
        },
        forest: {
          500: '#3B5E50',
          800: '#2C4A3E',
          900: '#1D332B',
        },
        terracotta: {
          400: '#E09F87',
          600: '#C87D65',
          700: '#A9624C',
        },
        charcoal: {
          800: '#2C2A29',
          900: '#1A1918',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        script: ['Pinyon Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
