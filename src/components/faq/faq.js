if ($('.js-hide-wrap').length > 0) {
  $('.js-hide-title').on('click', function() {
    let item = $(this).parents('.js-hide-wrap').find('.js-hide-content');
    item.slideToggle();
  });
}
