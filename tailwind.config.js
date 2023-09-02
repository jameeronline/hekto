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
      'darlblue': '#0D0E43',
      'offnavyblue': '#3F509E',
      'lightnavyblue': '#EEEFFB',
      'purple': '#7E33E0',
      'offpurple': '#9F63B5',
      'skyblue': '#F2F4FF',
      'pantonepurble': '#E0D3F5',
      'regentgrey': '#8A8FB9',
      'bluishcyan': '#00C1FE',
      'black': '#000000',
      'offwhite': '#F1F1F1',
      'white': '#ffffff'
    },
    fontFamily: {
      josefin: ['Josefin Sans', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}