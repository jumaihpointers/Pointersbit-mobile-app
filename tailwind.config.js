/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c1': '#0C134F',
        'c2': '#1D267D',
        'c3': '#0C134F',
        'c4': '#D4ADFC'

      },
    },
  },
  plugins: [],
}

