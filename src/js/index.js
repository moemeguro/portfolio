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

// mvの高さをデバイス毎に調整する
const mvArea = document.getElementById('mv')
const mvSlide = document.getElementById('mvSlide')
const mvImgs = mvSlide.querySelectorAll('img')
const innerHeight = window.innerHeight
const mvHeight = () => {
  mvArea.style.height = innerHeight + 'px'
  mvImgs.forEach((mvImg) => {
    mvImg.style.height = innerHeight + 'px'
  })
}

window.addEventListener('DOMContentLoaded', function () {
  // DOMContentLoaded 時に初回実行する。
  mvHeight()
})


// 各要素が画面内に現れたら表示する
const fadeinItems = document.querySelectorAll('.fadein');

const options = {
  threshold: 1
};

const observer = new IntersectionObserver(showElements);

fadeinItems.forEach(fadeinItem => {
  observer.observe(fadeinItem);
});

function showElements(entries){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
};
