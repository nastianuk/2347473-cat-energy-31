/* в этот файл добавляет скрипты*/
const brgBtn = document.querySelector ('.main-nav__toggle');
const clsBtn = document.querySelector ('.main-nav__toggle-close');
const navList = document.querySelector ('.main-nav__list');

brgBtn.onclick = function () {
  brgBtn.classList.add ('main-nav__toggle--opened');
  clsBtn.classList.remove ('main-nav__toggle-close--closed');
  navList.classList.remove ('main-nav__list--nojs');
};

clsBtn.onclick = function () {
  clsBtn.classList.add ('main-nav__toggle-close--closed');
  brgBtn.classList.remove ('main-nav__toggle--opened');
  navList.classList.add ('main-nav__list--nojs');
};
