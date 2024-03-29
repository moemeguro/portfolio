'use strict'
// import 文を使って sub.js ファイルを読み込む。
import hello from "./sub.js";

// sub.jsに定義されたJavaScriptを実行する。
// hello();

// メニュー
const menu = document.getElementById('menu')
const button = document.getElementById('menu-button')

let isOpen = false

function updateAriaAttribute() {
  const expanded = isOpen ? 'true' : 'false'
  const hidden = isOpen ? 'false' : 'true'

  button.setAttribute('aria-expanded', expanded)
  menu.setAttribute('aria-hidden', hidden)
}

function openMenu() {
  isOpen = true
  updateAriaAttribute()
}

function closeMenu() {
  isOpen = false
  updateAriaAttribute()
}

function togglemenu() {
  if (isOpen) {
    closeMenu()
  } else {
    openMenu()
  }
}

button.addEventListener('click', () => {
  togglemenu()
})

const links = document.querySelectorAll('.header__link')
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    closeMenu();
  })
})


// import Swiper JS
import Swiper from 'swiper/bundle';

const photoSwiper = new Swiper('.swiper',{
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  speed: 3000,
   pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


