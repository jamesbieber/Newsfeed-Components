
const toggleMenu = () => {
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu;
menu = document.querySelector('.menu');

const menuButton;
menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu);