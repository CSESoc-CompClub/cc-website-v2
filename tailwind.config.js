/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/*.{html,js,jsx}',
    './src/components/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      screens: {
        sone: '100px',
        stwo: '200px',
        sthree: '300px',
        sfour: '400px',
        sfive: '500px',
        ssix: '600px',
        sseven: '700px',
        sm: '640px',
        md: '1024px'
      }
    }
  },
  plugins: [],
}

