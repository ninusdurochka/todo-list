const navigationBurger = document.querySelector('.navigation__burger')
if (navigationBurger) {
    const navigationTags = document.querySelector('.navigation__tags');
    navigationBurger.addEventListener("click", function (e) {
        navigationBurger.classList.toggle('_active');
        navigationTags.classList.toggle('_active');
    });
}