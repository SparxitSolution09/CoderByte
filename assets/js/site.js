$(document).ready(function () {
  //gallery slider
  $(".gallery-slider").slick({
    dots: false,
    infinite: true,
    arrows: false,
    centerMode: true,
    centerPadding: '142px',
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          centerPadding: '19px',
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '29px',
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });
  // lazy load js
  $('.lazy').lazy({
    effect: "fadeIn",
    effectTime: 1000,
    threshold: 0
  });
  $('.gallery-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.lazy').lazy({
      bind: "event",
      delay: 0
    });
  });
});
