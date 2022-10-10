/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/*.{html,js,jsx}',
    './src/components/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '1024px'
      }
    }
  },
  plugins: [],
}

