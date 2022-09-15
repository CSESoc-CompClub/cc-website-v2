/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/*.{html,js,jsx}',
    './src/components/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      animation: {
        articles: 'articles 1s ease-in',
      },
      keyframes: {
        articles: {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '25%': {
            transform: 'rotate(-30deg)',
          },
          '75%' : {
            transform: 'rotate(30deg)',
          },
        }
      }
    },
  },
  plugins: [],
}
