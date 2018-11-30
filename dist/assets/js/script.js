'use strict';

if ($('.inject-me').length > 0) {
  var mySVGsToInject = document.querySelectorAll('img.inject-me');

  // Options
  var injectorOptions = {
    evalScripts: 'once',
    pngFallback: 'assets/png',
    each: function each(svg) {}
  };
  SVGInjector(mySVGsToInject, injectorOptions, function (totalSVGsInjected) {
    // Callback after all SVGs are injected
    if ($(window).width() > 959) {
      var topSideHeight = $('.headerCover').outerHeight(true);
      $('#main section').first().css({ "padding-top": topSideHeight });
    }
  });
}

if (document.querySelector('.overlay')) {
  var overlay = document.querySelector('.overlay');
  overlay.onclick = modalClose;
}

if (document.querySelector('.js-modal-btn')) {
  var btns = document.querySelectorAll('.js-modal-btn');

  var _loop = function _loop(i) {
    var btn = btns[i];
    btn.onclick = function () {
      var id = btn.dataset.id;
      var modal = document.getElementById(id);
      modal.classList.add('modal-active');
      overlay.classList.add('overlay-active');
    };
  };

  for (var i = 0; i < btns.length; i++) {
    _loop(i);
  }
}

if (document.querySelector('.js-btn-close')) {
  var btnModalClose = document.querySelectorAll('.js-btn-close');
  for (var i = 0; i < btnModalClose.length; i++) {
    var _btn = btnModalClose[i];
    _btn.onclick = modalClose;
  }
}

function modalClose() {
  var modal = document.querySelector('.modal-active');
  modal.classList.remove('modal-active');
  overlay.classList.remove('overlay-active');
}

if (document.querySelector('.tab')) {
  var tabs = document.querySelectorAll('.tab');
  for (var _i = 0; _i < tabs.length; _i++) {
    var tab = tabs[_i];
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
//# sourceMappingURL=script.js.map
