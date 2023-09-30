/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      backgroundImage: {
        'news-lettern': "url('./src/images/newsletter-bg.png')",
        'blob-bg': "url(./src/images/svg/blobanimation.svg)"
      },
      colors: {
        'pink': '#FB2E86',
        'red': '#FB2448',
        // 'blue': '#2F1AC4',
        // 'offblue': '#151875',
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
        'white': '#ffffff',
        'primary': { //pink
          '50': '#fef1f7',
          '100': '#fee5f1',
          '200': '#ffcbe6',
          '300': '#ffa0cf',
          '400': '#ff66ad',
          '500': '#fb2e86',
          '600': '#ec1667',
          '700': '#cd094d',
          '800': '#a90b41',
          '900': '#8d0e39',
          '950': '#57001d',
        },
        'secondary': { //purple
          '50': '#fbf8fc',
          '100': '#f5eef9',
          '200': '#eee1f3',
          '300': '#e0c9e9',
          '400': '#cba6da',
          '500': '#b682ca',
          '600': '#9f63b5',
          '700': '#8b529e',
          '800': '#734782',
          '900': '#5e3a69',
          '950': '#40214a',
        },
        'tertiary': { //navyblue
          '50': '#f3f6ff',
          '100': '#e9edfe',
          '200': '#d7dffd',
          '300': '#b7c3fb',
          '400': '#8d9bf8',
          '500': '#5f6bf3',
          '600': '#3e41e9',
          '700': '#2d2cd5',
          '800': '#2524b3',
          '900': '#212092',
          '950': '#151875',
        },
        'accent': {
          '50': '#f2f2ff',
          '100': '#e8eaff',
          '200': '#d4d7ff',
          '300': '#b1b5ff',
          '400': '#8586ff',
          '500': '#5b54fe',
          '600': '#4631f6',
          '700': '#371fe2',
          '800': '#2f1ac4',
          '900': '#28179b',
          '950': '#140c69',
        },
        'emphasis': {
          '50': '#f4f5f9',
          '100': '#ebeef4',
          '200': '#dadfeb',
          '300': '#c3cade',
          '400': '#abb1ce',
          '500': '#8a8fb9',
          '600': '#7e80ad',
          '700': '#6b6c97',
          '800': '#58597b',
          '900': '#4b4c64',
          '950': '#2c2c3a',
      },

      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}