const searchIcon = document.querySelector('.menu-header__icons-search');
const searchContainer = document.querySelector('.menu-header__search');

const searchBarActivation = () => {
    searchIcon.classList.add('menu-header__search-close-icon');
    searchIcon.src = 'assets/close.svg';

    searchContainer.classList.remove('menu-header__search-hidden');
    searchContainer.style.zIndex = '1';

    searchIcon.addEventListener('click', closeSearchBar);
    searchIcon.removeEventListener('click', searchBarActivation);
}

const closeSearchBar = () => {
  searchIcon.classList.remove('menu-header__search-close-icon');
  searchIcon.src = 'assets/search.svg';
  searchContainer.classList.add('menu-header__search-hidden');
  searchIcon.addEventListener('click', searchBarActivation);
}

searchIcon.addEventListener('click', searchBarActivation);