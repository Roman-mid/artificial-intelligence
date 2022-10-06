
// SLIDER

const mySwiper = new Swiper('.swiper', {
  direction : 'horizontal',
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,

      spaceBetween: 10
    },
        // when window width is >= 540px
        575: {
          slidesPerView: 2,
          spaceBetween: 20,
    
        },
    // when window width is >= 540px
    767: {
      slidesPerView: 3,
      spaceBetween: 20,

    },
    // when window width is >= 720px
    991 : {
        slidesPerView: 3,
        spaceBetween: 15,

    },
    // when window width is >= 960px
    1199 : {
        slidesPerView: 4,
        spaceBetween: 30,

    }
      },
      loop : true,
      stopOnLastSlide : false,
      autoHeight: true,
      autoplay : {
        delay : 3000
      },
})

// mobile-menu
$('.modal-window').on('click', function(e) {
  $('.modal-window').removeClass('active')
})

$('.modal-window').on('click', function(e) {
  $('.menu').removeClass('active')
})

$('.mobile-menu').on('click', function(e) {
  $('.menu').toggleClass('active')
})

$('.mobile-menu').on('click', function(e) {
  $('.modal-window').toggleClass('active')
})



/* 1. Preloder (готовый код, можно использовать в любом проекте) */
$(window).on('load', function () {
  $('#preloader').delay(450).fadeOut('slow');
  $('body').delay(450).css({
    'overflow': 'visible'
  });
});