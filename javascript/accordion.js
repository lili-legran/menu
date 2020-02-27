const toggleAccordion = () => {
  document.querySelector('.menu-inner__lvl-3').classList.toggle('menu-inner__lvl-3_hidden');
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