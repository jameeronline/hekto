import './src/css/index.css'
//import './style.css'


import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'


//Alphine Js
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()


//GlideJS slider
import Glide from '@glidejs/glide'


var glidePartners = new Glide('.glide-partners', {
  type: 'carousel',
  perView: 5,
  autoplay: 1000,
  animationDuration: 3000,
  gap: 80,
  breakpoints: {
      1024: {
          perView: 3,
          gap: 40
      },
      640: {
          perView: 2,
          gap: 24
      },
      480: {
          perView: 1
      }
  },
});

glidePartners.mount();
