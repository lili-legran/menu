const menuContainer = document.querySelector('.menu');

const showMenu = () => {
  menuContainer.classList.toggle('menu-hidden');
  closeSearchBar();
}

document.querySelector('.icon-menu').addEventListener('click', showMenu);
document.querySelector('.menu-header__icons-arrow').addEventListener('click', showMenu);
