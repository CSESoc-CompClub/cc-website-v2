/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/*.{html,js,jsx}',
    './src/components/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      animation: {
        oddCards: 'oddCards 1s ease-in',
        evenCards: 'evenCards 1s ease-in',
        articles: 'articles 1s ease-in',
      },
      keyframes: {
        evenCards: {
          '0%, 25%': {
            opacity: '0',
          },
					'0%, 50%': {
						transform: 'translateX(100px)',
					},
        },
        oddCards: {
          '0%, 25%': {
            opacity: '0',
          },
					'0%, 50%': {
						transform: 'translateX(-100px)',
					},
        },
        articles: {
          '0%, 25%': {
            opacity: '0',
          },
          '0%, 30%': {
            transform: 'translateY(50px)',
          },
          '50%, 55%' : {
            transform: 'skew(1deg)',
          },
        }
      }
    },
  },
  plugins: [],
}
