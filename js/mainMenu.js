// Получаем элементы списка меню
var menuItems = document.querySelectorAll('.tag, .nav__elem');

// Перебираем элементы списка меню и добавляем обработчик события наведения курсора
menuItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        // Добавляем класс hover текущему элементу списка меню
        this.classList.add('hover');
    });

    item.addEventListener('mouseout', function() {
        // Удаляем класс hover у текущего элемента списка меню
        this.classList.remove('hover');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.href;
    let menuLinks = document.querySelectorAll(".section__name");

    menuLinks.forEach(function (link) {
        if (currentPage.includes(link.getAttribute("href"))) {
            link.classList.add("current");
        }
    });


});
