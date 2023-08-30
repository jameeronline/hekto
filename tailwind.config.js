/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {  
    colors: {
      'pink': '#FB2E86',
      'red': '#FB2448',
      'blue': '#2F1AC4',
      'offblue': '#151875',
      'navyblue': '#151875',
      'offnavyblue': '#3F509E',
      'purple': '#7E33E0',
      'offpurple': '#9F63B5',
      'skyblue': '#F2F4FF',
      'pantonepurble': '#E0D3F5',
    },
    fontFamily: {
      josefin: ['Josefin Sans', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}