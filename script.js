const hamburgerMenu = document.querySelector('.image-icon');
const desktopMenu = document.querySelector('.name-1');
const clickButton = document.querySelector('#close_button');
const navigationNav = document.querySelectorAll('.mobile-Menu-list > li > a');

function clickOn() {
  desktopMenu.style.display = 'flex';
}

function closeMenu() {
  desktopMenu.style.display = 'none';
}

hamburgerMenu.addEventListener('click', clickOn);
clickButton.addEventListener('click', closeMenu);
navigationNav.forEach((each) => each.addEventListener('click', closeMenu));
