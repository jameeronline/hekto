import './src/css/index.css'
//import './style.css'


import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'


//Alphine Js
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()



//List.js - product filter
import List from 'list.js';

var options = {
    valueNames: [
        { data: ['product-category'] }
    ]
};

var latestProductList = new List('grid-latest-products', options);


const latestProductFilters = document.querySelectorAll('#latest-products-filter a');

latestProductFilters.forEach(el => {
    el.addEventListener('click', () => {
        let itemVal = el.dataset.filter;
        if(itemVal == '*'){
            latestProductList.filter();
        }else{
            latestProductList.filter(function(item) {
                if (item.values()['product-category'] == itemVal) {
                    return true;
                } else {
                    return false;
                }
            });
        }
    });
})

//GlideJS slider
import Glide from '@glidejs/glide'

//Categories slide
var glideCategories = new Glide('#glide-featured', {
    type: 'carousel',
    startAt: 1,
    animationDuration: 1000,
    autoplay: false,
    rewind: true,
    perView: 4,
    gap: 32,
    classes: {
        nav: {
            active: '[&>*]:bg-primary-500',
        }
    },
    breakpoints: {
        1024: {
            perView: 2
        },
        640: {
            perView: 1
        }
    },
});

glideCategories.mount();

//Categories slide
var glideCategories = new Glide('#glide-categories', {
    type: 'carousel',
    focusAt: 1,
    animationDuration: 1000,
    autoplay: false,
    rewind: true,
    perView: 4,
    gap: 48,
    classes: {
        nav: {
            active: '[&>*]:bg-primary-500',
        }
    },
    breakpoints: {
        1024: {
            perView: 3
        },
        640: {
            perView: 2
        },
        480: {
            perView: 1
        }
    },
});

glideCategories.mount();

//Trending slide
var glideTrending = new Glide('#glide-trending', {
    type: 'carousel',
    startAt: 1,
    animationDuration: 1000,
    autoplay: false,
    rewind: true,
    perView: 4,
    gap: 24,
    classes: {
        nav: {
            active: '[&>*]:bg-primary-500',
        }
    },
    breakpoints: {
        1024: {
            perView: 2
        },
        640: {
            perView: 1
        }
    },
});

glideTrending.mount();

//Partners slide
var glidePartners = new Glide('#glide-partners', {
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
