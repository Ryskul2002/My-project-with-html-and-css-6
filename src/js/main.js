$(document).ready(function () {
    $('.burger').on('click' ,function () {
   $('.header__menu').toggleClass('header__menu_bot')
    })
    $('.footer__btn').on('click', function () {
        $('.overlay').addClass('overlay__active')
    })
});