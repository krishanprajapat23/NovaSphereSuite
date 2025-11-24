// on ready function
jQuery(document).ready(function ($) {
  // header fix for Position fixed
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $("header").addClass("header-fixed animated fadeInDown");
    } else {
      $("header").removeClass("header-fixed animated fadeInDown");
    }
  });
});


//wow js
new WOW().init();


//slider section


  $(document).ready(function(){
    $('.slick-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      infinite:false,
      prevArrow: $('.prev-arrow'),
      nextArrow: $('.next-arrow'),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });

