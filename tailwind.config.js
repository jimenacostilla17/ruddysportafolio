/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily:{
          allan: ['Allan', 'cursive'],
        }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Lobster', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}