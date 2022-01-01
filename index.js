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

console.log('Score: 120 / 120\n- [x] ссылку на своё CV, задеплоенное на gh-pages, засабмитилa в rs app (10)\n- [x] вёрстка валидная (10)\n- [x] вёрстка семантическая (20): присутствуют и используются по назначению header, main, footer (5), элемент nav (5), только один заголовок  h1 (5), заголовки h2 (5)\n- в footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс (10)\n- для оформления СV используются css-стили (10)\n- при уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону (10)\n- на странице СV есть фото или аватарка автора, пропорции изображения не искажены, у изображения есть атрибут alt (10)\n- навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a (10)\n- cодержание CV (30): краткую информацию о себе (5), контакты для связи (5), перечень навыков (5), пример кода, добавленный при помощи символов и тегов, а не картинкой (5), перечень выполненных учебных проектов со ссылками на исходный код или страницу приложения (5), информацию об образовании и уровне английского (5)\n- CV выполнено на английском языке (10)')