// показать меню

const menuContainer = document.querySelector('.menu');
const langArrow = document.querySelector('.menu-header__row-arrow');
const hiddenLanguages = document.querySelectorAll('.menu-header__hidden-row');

const showMenu = () => {
  menuContainer.classList.toggle('menu-hidden');
}

document.querySelector('.icon-menu').addEventListener('click', showMenu);
document.querySelector('.menu-header__icons-arrow').addEventListener('click', showMenu);

//показать языки
const toggleLanguagesList = () => {
  hiddenLanguages.forEach(language => language.classList.toggle('menu-header__hidden-row'));
  langArrow.classList.toggle('menu-header__row-rotate-arrow');
}

const hideLanguagesList = () => {
  hiddenLanguages.forEach(language => language.classList.add('menu-header__hidden-row'));
  langArrow.classList.remove('menu-header__row-rotate-arrow');
}


//выбор языка
const languages = {
  'RU': 'assets/flag-ru.svg',
  'EN': 'assets/flag-en.svg',
  'BE': 'assets/flag-be.svg'
};
const langArray = Object.keys(languages);
const languagesArray = document.querySelector('.menu-header__main');
const chosenLanguages = document.querySelector('.menu-header__row-lang_arrow');
const langHeaderArray = document.querySelectorAll('.menu-header__row-lang');
const selectLang = document.querySelectorAll('.menu-header__row')[0];

selectLang.addEventListener('click', toggleLanguagesList);

const languageSelection = (e) => {
  const langContainer = e.target.closest('.menu-header__row');
  const langValue = langContainer.querySelector('span').innerText;
  const filteredLanguages = langArray.filter(item => item !== langValue);
  chosenLanguages.querySelector('span').innerText = langValue;
  chosenLanguages.querySelector('img').src = languages[langValue];
  for (let i = 1; i < langHeaderArray.length; i++) {
    langHeaderArray[i].querySelector('span').innerText = filteredLanguages[i-1];
    langHeaderArray[i].querySelector('img').src = languages[filteredLanguages[i-1]];
    langHeaderArray[i].parentNode.addEventListener('click', hideLanguagesList);
  }
}

languagesArray.addEventListener('click', languageSelection);


// поиск

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

// второй уровень меню - всплытие справа
const externalMenu = document.querySelector('.menu-external');
const innerMenu = document.querySelector('.menu-inner');
const externalRows = document.querySelectorAll('.menu-body__row');

const moveInnerMenu = (e) => {
  let target = e.target;
  let targetValue = target.innerText;
  if (target.querySelectorAll('.menu-body__row-image').length > 0) {
    document.querySelector('.menu-inner__selected_title').innerHTML = targetValue;
    innerMenu.style.right = "0";
  } 
}

const moveOutInnerMenu = () => {
  innerMenu.style.right = "-110%";
  closeAccordion();
}

document.querySelector('.menu-inner__selected').addEventListener('click', moveOutInnerMenu);
externalRows.forEach(el => el.addEventListener('click', moveInnerMenu));

//третий уровень меню - аккордеон

const toggleAccordion = () => {
  document.querySelector('.menu-inner__lvl-3').classList.toggle('menu-inner__lvl-3_hidden');
}

const closeAccordion = () => {
  document.querySelector('.menu-inner__lvl-3').classList.add('menu-inner__lvl-3_hidden');
}

const lvl2Items = document.querySelectorAll('.menu-inner__lvl-2_name');
lvl2Items.forEach(item => {
  const lvl3List = item.querySelectorAll('.menu-inner__lvl-3');
  if (lvl3List.length > 0) {
    let arrow = document.createElement('img');
    arrow.src = 'assets/down-arrow.svg';
    arrow.classList.add('menu-inner__lvl-3_arrow');
    const lvl2Title = item.querySelector('.menu-inner__lvl-2_title');
    lvl2Title.appendChild(arrow);
    lvl2Title.addEventListener('click', toggleAccordion);
  }
})


