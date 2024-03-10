/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  theme: {
    extend: {
      screens: {
        '400px': '400px',
      },
      width: {
        '9/10': '90%'
      },
      colors: {
        'black-20%': 'rgba(0,0,0,0.2)'
      },
      space: {
        '2.5': '6rem'
      }
    },
  },
  plugins: [],
}

