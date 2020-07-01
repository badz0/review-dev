const open = document.getElementById('open');

const menu = document.querySelector('.menu');
const close = document.querySelector('#close');
const wrapper = document.querySelector('.menu-wrapper');

function toggleMenu() {
  menu.classList.toggle('menu--open');
}

open.addEventListener('click', toggleMenu);

close.addEventListener('click', toggleMenu);

wrapper.addEventListener('click', toggleMenu);



// document.addEventListener('click', function(event) {
//   if (event.target !== menu && menu.classList.contains('menu--open')) {
//     menu.classList.remove('menu--open');
//   }
// }, {capture: true});
