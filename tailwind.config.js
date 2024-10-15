/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#3175B1',
        brandSelected: '#275A8E',
        brandHover: '#EBF5FF',
        navHover: '#6195C6',
        brand600: '#256094',
        neutralLighter: '#F8F9FA',
        neutralLight: '#E9ECEF'
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

