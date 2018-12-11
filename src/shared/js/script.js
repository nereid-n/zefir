if (document.querySelector('.overlay')) {
  var overlay = document.querySelectorAll('.overlay');
  for (let i = 0; i < overlay.length; i++) {
    overlay[i].onclick = function() {
      let modal = this.closest('.modal-wrap');
      modal.classList.remove('modal-active');
    };
  }
}

if(document.querySelector('.js-modal-btn')) {
  let btns = document.querySelectorAll('.js-modal-btn');
  for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    btn.onclick = function(e) {
      e.preventDefault();
      let id = btn.dataset.id;
      let modal = document.getElementById(id).closest('.modal-wrap');
      modal.classList.add('modal-active');
      if(this.closest('.js-modal')) {
        let zIndex = getComputedStyle(this.closest('.modal-wrap')).zIndex;
        modal.style.zIndex = zIndex + 1;
      }
    }
  }
}

if (document.querySelector('.js-btn-close')) {
  let btnModalClose = document.querySelectorAll('.js-btn-close');
  for (let i = 0; i < btnModalClose.length; i++) {
    let btn = btnModalClose[i];
    btn.onclick = function() {
      let modal = document.querySelector('.modal-active');
      modal.classList.remove('modal-active');
    };
  }
}

if (document.querySelector('.tab')) {
  let tabs = document.querySelectorAll('.tab');
  for (let i = 0; i < tabs.length; i++) {
    let tab = tabs[i];
    tab.onclick = function() {
      let id = this.dataset.id;
      let target = document.getElementById(id);
      let tabParent = this.closest('.tabs');
      let targetParent = target.closest('.tab-content');
      let tabActive = tabParent.querySelector('.tab-active');
      let targetActive = targetParent.querySelector('.tab-item-active');
      if (this !== tabActive) {
        tabActive.classList.remove('tab-active');
        this.classList.add('tab-active');
      }
      if (target !== targetActive) {
        targetActive.classList.remove('tab-item-active');
        target.classList.add('tab-item-active');
      }
    }
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
      }
      else {
        if (k + 11 < max) {
          k += 11;
        }
        else {
          k++;
        }
      }
    }
    else {
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
