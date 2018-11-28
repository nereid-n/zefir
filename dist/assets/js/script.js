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
//# sourceMappingURL=script.js.map
