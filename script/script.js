var navMain = document.querySelector('.nav-main');
var navToggle = document.querySelector('.nav-main__toggle');
var link = document.querySelector(".user-list__login");
var popup = document.querySelector(".personal-account");
var close = popup.querySelector(".modal__close");

navMain.classList.remove('nav-main--no-js');

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('nav-main--closed')) {
        navMain.classList.remove('nav-main--closed');
        navMain.classList.add('nav-main--opened');
    } else {
        navMain.classList.add('nav-main--closed');
        navMain.classList.remove('nav-main--opened');
    }
});

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});