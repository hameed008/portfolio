/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        screens: {
          'xs': '450px',

          'sm': '640px',
          // => @media (min-width: 640px) { ... }

          'md': '768px',
          // => @media (min-width: 768px) { ... }

          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }

          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }

          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        }
      },

      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(14deg)' },
          '30%': { transform: 'rotate(-8deg)' },
          '40%': { transform: 'rotate(14deg)' },
          '50%': { transform: 'rotate(-4deg)' },
          '60%': { transform: 'rotate(10deg)' },
          '70%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },

      animation: {
        rotate: 'rotate 2s ease infinite',
      },

      transitionTimingFunction: {
        'cubic-bezier': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      // transitionDuration: {
      //   '0.25s': '250ms',
      // },
      colors: {
        white: '#fff',
        green: '#47a248',
        lightGreen: '#8cc84b',
        black: '#000',
        cyan: '#5ED3F3',
      },

      zIndex: {
        '-5': '-5',
        '-10': '-10',
        '-15': '-15',
        '-20': '-20',
        '-25': '-25',
        '10': '10',
        '20': '20',
        '30': '30',

      },
      fontFamily: {
        'concert-one': ['"Concert One"', 'cursive'],
      },

      utilities: {
        '.no-scroll': {
          overflow: 'hidden',
        },
      },
    },
  },
  plugins: [],
}