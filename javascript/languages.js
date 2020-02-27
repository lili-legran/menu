const langArrow = document.querySelector('.menu-header__row-arrow');
const hiddenLanguages = document.querySelectorAll('.menu-header__hidden-row');

const toggleLanguagesList = () => {
  hiddenLanguages.forEach(language => language.classList.toggle('menu-header__hidden-row'));
  langArrow.classList.toggle('menu-header__row-rotate-arrow');
}

const hideLanguagesList = () => {
  hiddenLanguages.forEach(language => language.classList.add('menu-header__hidden-row'));
  langArrow.classList.remove('menu-header__row-rotate-arrow');
}

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