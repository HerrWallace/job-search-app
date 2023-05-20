/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-grey': '#F7F7F8',
        'blue-main': '#5E96FC',
      },
      fontFamily: {
          'header': ['Poppins']
      }
    },
  },
  plugins: [],
}

