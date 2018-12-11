'use strict';

if (document.querySelector('.overlay')) {
  var overlay = document.querySelectorAll('.overlay');
  for (var i = 0; i < overlay.length; i++) {
    overlay[i].onclick = function () {
      var modal = this.closest('.modal-wrap');
      modal.classList.remove('modal-active');
    };
  }
}

if (document.querySelector('.js-modal-btn')) {
  var btns = document.querySelectorAll('.js-modal-btn');

  var _loop = function _loop(_i) {
    var btn = btns[_i];
    btn.onclick = function (e) {
      e.preventDefault();
      var id = btn.dataset.id;
      var modal = document.getElementById(id).closest('.modal-wrap');
      modal.classList.add('modal-active');
      if (this.closest('.js-modal')) {
        var zIndex = getComputedStyle(this.closest('.modal-wrap')).zIndex;
        modal.style.zIndex = zIndex + 1;
      }
    };
  };

  for (var _i = 0; _i < btns.length; _i++) {
    _loop(_i);
  }
}

if (document.querySelector('.js-btn-close')) {
  var btnModalClose = document.querySelectorAll('.js-btn-close');
  for (var _i2 = 0; _i2 < btnModalClose.length; _i2++) {
    var _btn = btnModalClose[_i2];
    _btn.onclick = function () {
      var modal = document.querySelector('.modal-active');
      modal.classList.remove('modal-active');
    };
  }
}

if (document.querySelector('.tab')) {
  var tabs = document.querySelectorAll('.tab');
  for (var _i3 = 0; _i3 < tabs.length; _i3++) {
    var tab = tabs[_i3];
    tab.onclick = function () {
      var id = this.dataset.id;
      var target = document.getElementById(id);
      var tabParent = this.closest('.tabs');
      var targetParent = target.closest('.tab-content');
      var tabActive = tabParent.querySelector('.tab-active');
      var targetActive = targetParent.querySelector('.tab-item-active');
      if (this !== tabActive) {
        tabActive.classList.remove('tab-active');
        this.classList.add('tab-active');
      }
      if (target !== targetActive) {
        targetActive.classList.remove('tab-item-active');
        target.classList.add('tab-item-active');
      }
    };
  }
}

function countNumber(item) {
  var max = parseInt(item.innerHTML);
  var k = 0;
  var intervalNumber = setInterval(function () {
    item.innerHTML = k;
    if (max > 100) {
      if (k + 91 < max) {
        k += 91;
      } else {
        if (k + 11 < max) {
          k += 11;
        } else {
          k++;
        }
      }
    } else {
      k++;
    }
    if (k === max) {
      item.innerHTML = max;
      clearInterval(intervalNumber);
    }
  }, 50);
  item.classList.add('done');
}

document.addEventListener("DOMContentLoaded", function () {
  var numbers = [].slice.call(document.querySelectorAll('.js-number'));

  if ("IntersectionObserver" in window) {
    var numberObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var item = entry.target;
          if (!item.classList.contains('done')) {
            countNumber(item);
          }
        }
      });
    });

    numbers.forEach(function (number) {
      numberObserver.observe(number);
    });
  }
});

if ($('.js-hide-wrap').length > 0) {
  $('.js-hide-title').on('click', function () {
    var item = $(this).parents('.js-hide-wrap').find('.js-hide-content');
    item.slideToggle();
  });
}

if ($('.banner__numbers').length > 0) {
  var date = $('.banner__numbers').data('date');
  $('.banner__numbers').countdown(date, function (event) {
    var totalHours = event.offset.totalDays * 24 + event.offset.hours;
    $(this).html(event.strftime('<span class="banner__number">' + totalHours + '</span>' + '<span class="banner__number">%M</span>' + '<span class="banner__number">%S</span>'));
  });
}

$(document).ready(function () {
  if ($('.banner__icons').length > 0) {
    $('.banner__icons').addClass('animate');
  }
});
//# sourceMappingURL=script.js.map
