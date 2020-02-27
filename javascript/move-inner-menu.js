const externalMenu = document.querySelector('.menu-external');
const innerMenu = document.querySelector('.menu-inner');
const externalRows = document.querySelectorAll('.menu-body__row');

const moveInnerMenu = (e) => {
  let target = e.target;
  let targetValue = target.innerText;

  if (target.parentNode.querySelectorAll('.menu-body__row-image').length > 0) {
    document.querySelector('.menu-inner__selected_title').innerHTML = targetValue;
    innerMenu.style.right = "0";
  } 
}

const closeAccordion = () => {
  document.querySelector('.menu-inner__lvl-3').classList.add('menu-inner__lvl-3_hidden');
}

const moveOutInnerMenu = () => {
  innerMenu.style.right = "-110%";
  closeAccordion();
}

document.querySelector('.menu-inner__selected').addEventListener('click', moveOutInnerMenu);
externalRows.forEach(el => el.addEventListener('click', moveInnerMenu));

externalMenu.addEventListener('click', closeSearchBar);




