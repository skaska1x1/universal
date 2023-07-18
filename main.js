// bookmark
let wrapBoxSvgPathAll = document.querySelectorAll('.wrap-box .title svg path');

wrapBoxSvgPathAll.forEach(item => { item.addEventListener('click', () => item.classList.toggle('active')) })

// slider
const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 500,

    keyboard: {
        enabled: true,
    },
  
    pagination: {
      el: '.swiper-pagination',
    },
  });

// dark mode
const darkModeBtn = document.querySelector('.dark-mode-btn');
const darkModeBtnMoon = document.querySelector('.dark-mode-btn-moon');
const body = document.querySelector('body');

const sunMoon = document.querySelector('.dark-mode-box');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
})
darkModeBtnMoon.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
})
sunMoon.addEventListener('click', () => {
    sun.classList.toggle('visible');
    moon.classList.toggle('visible');
})
// darkModeBtn.addEventListener('click', (event) => {
//   darkModeBtn.classList.toggle('none');
//   event.stopPropagation();
// })

// scroll up/down

const scrollUp = document.querySelector('.scroll-up');
const scrollDown = document.querySelector('.scroll-down');
// const scrollActive = document.querySelector('.scroll-active');

scrollUp.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    })
};

scrollDown.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior:'smooth'
  })
});

// 2 при скроле вниз, ниже 10px сработает событие > добавляет класс active
window.addEventListener("scroll", function (event) {
  scrollDown.classList.toggle("scroll-active", 30 < window.scrollY);
  event.stopPropagation();
  if(window.scrollY >= 968){
    scrollDown.classList.remove("scroll-active");
  }
  scrollUp.classList.toggle("scroll-active", 1796 <= window.scrollY);
  event.stopPropagation();
});







