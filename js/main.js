$(function () {



    $('.filter-style').styler();

    $('.menu__burger').on('click', function () {
        $('.menu__burger').toggleClass('menu__burger--active');
        $('.menu__list').toggleClass('menu__list--active');

    })


    $(window).resize(function () {
        if ($(window).width() > 768) {
            $('.menu__burger').removeClass('menu__burger--active');
            $('.menu__list').removeClass('menu__list--active');
        }
    })
})