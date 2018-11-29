if ($('.inject-me').length > 0) {
  var mySVGsToInject = document.querySelectorAll('img.inject-me');

  // Options
  var injectorOptions = {
    evalScripts: 'once',
    pngFallback: 'assets/png',
    each: function (svg) {
    }
  };
  SVGInjector(mySVGsToInject, injectorOptions, function (totalSVGsInjected) {
    // Callback after all SVGs are injected
    if ($(window).width() > 959) {
      var topSideHeight = $('.headerCover').outerHeight(true);
      $('#main section').first().css({"padding-top": topSideHeight});
    }
  });
}

if (document.querySelector('.overlay')) {
  var overlay = document.querySelector('.overlay');
  overlay.onclick = modalClose;
}

if(document.querySelector('.js-modal-btn')) {
  let btns = document.querySelectorAll('.js-modal-btn');
  for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    btn.onclick = function() {
      let id = btn.dataset.id;
      let modal = document.getElementById(id);
      modal.classList.add('modal-active');
      overlay.classList.add('overlay-active');
    }
  }
}

if (document.querySelector('.js-btn-close')) {
  let btnModalClose = document.querySelectorAll('.js-btn-close');
  for (let i = 0; i < btnModalClose.length; i++) {
    let btn = btnModalClose[i];
    btn.onclick = modalClose;
  }
}



function modalClose() {
  let modal = document.querySelector('.modal-active');
  modal.classList.remove('modal-active');
  overlay.classList.remove('overlay-active');
}