const topMenuList = document.querySelector('.top-menu__list');
const burger = document.querySelector('.burger');

function handleBurger (event) {
    document.body.classList.toggle('_no-scroll')
    topMenuList.classList.toggle('_active');
    burger.classList.toggle('_active');
}

burger.addEventListener('click', handleBurger)


