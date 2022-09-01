const topMenuList = document.querySelector('.top-menu__list');
const burger = document.querySelector('.burger');

function handleBurger (event) {
    topMenuList.classList.toggle('_active');
    burger.classList.toggle('_active');
}

burger.addEventListener('click', handleBurger)
