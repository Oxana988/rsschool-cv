//Burger header
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-nav');
    const menuCloseItem = document.querySelector('.menu-close');
    const menuLinksItem = document.querySelectorAll('.header-link');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-nav-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
    });
    if (window.innerWidth >= 767) {
        for (let i = 0; i < menuLinksItem.length; i += 1) {
            menuLinksItem[i].addEventListener('click', () => {
                menu.classList.remove('header-nav-active');
            });
        }
    }
}());