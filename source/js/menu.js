const body = document.querySelector('body');
const toggle = document.querySelector('.main-header__toggle');
const navigationList = document.querySelector('.main-header__navigation');
const userToolList = document.querySelector('.main-header__user-tools');

if (body.classList.contains('nojs')) {
  body.classList.remove('nojs');
}

toggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (toggle.classList.contains('menu-opened')) {
    toggle.classList.remove('menu-opened');
    navigationList.classList.remove('menu-opened');
    userToolList.classList.remove('menu-opened');
  } else {
    toggle.classList.add('menu-opened');
    navigationList.classList.add('menu-opened');
    userToolList.classList.add('menu-opened');
  }
})
