if ($('.banner__numbers').length > 0) {
  let date = $('.banner__numbers').data('date');
  $('.banner__numbers').countdown(date, function(event) {
    var totalHours = event.offset.totalDays * 24 + event.offset.hours;
    $(this).html(event.strftime('<span class="banner__number">' + totalHours + '</span>' +
                                '<span class="banner__number">%M</span>' +
                                '<span class="banner__number">%S</span>'));
  });
}

$(document).ready(function() {
  if ($('.banner__icons').length > 0) {
    $('.banner__icons').addClass('animate');
  }
});
