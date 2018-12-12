if ($('.reviews__slider').length > 0) {
  $('.reviews__slider').slick({
    slidesToShow: 3,
    nextArrow: '<button class="slider__btn slider__next"><img src="assets/images/icons/arrow.svg" alt=""></button>',
    prevArrow: '<button class="slider__btn slider__prev"><img src="assets/images/icons/arrow.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
}
