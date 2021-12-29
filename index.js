//Burger header
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-nav');
    const menuCloseItem = document.querySelector('.menu-close');
    const menuSnapItem = document.querySelector('.header-link');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-nav-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
    });
    menuSnapItem.addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
    });
}());