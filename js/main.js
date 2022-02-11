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

    // grid depended on amount of items

    if ($(window).width() < 851) {
        let amount = $('.posts__items').children().length
        $('.posts__items').css('grid-template-rows', `repeat(${amount + 22}, 100px)`)
    }

    else  if ($(window).width() < 1101) {
        let amount = $('.posts__items').children().length
        $('.posts__items').css('grid-template-rows', `repeat(${amount + 6}, 100px)`)
    } else {
        let amount = $('.posts__items').children().length
        $('.posts__items').css('grid-template-rows', `repeat(${amount}, 100px)`)
    }
    

    $(window).resize(function () {
        if ($(window).width() < 851) {
            let amount = $('.posts__items').children().length
            $('.posts__items').css('grid-template-rows', `repeat(${amount + 22}, 100px)`)
        }
        else if ($(window).width() < 1101) {
            let amount = $('.posts__items').children().length
            $('.posts__items').css('grid-template-rows', `repeat(${amount + 6}, 100px)`)
        } else {
            let amount = $('.posts__items').children().length
            $('.posts__items').css('grid-template-rows', `repeat(${amount}, 100px)`)
        }
    })

    

    

})