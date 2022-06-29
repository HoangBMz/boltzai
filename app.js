let elToShow = document.querySelectorAll(".show-on-scroll");

let isElInViewPort = (el) => {
  let rect = el.getBoundingClientRect();

  let viewHeight = window.innerHeight || document.documentElement.clientHeight;

  return (
    (rect.top <= 1 && rect.bottom >= 1) ||
    (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
    (rect.top >= 1 && rect.bottom <= viewHeight)
  );
};

function loop() {
  elToShow.forEach((item) => {
    if (isElInViewPort(item)) {
      item.classList.add("start");
    } else {
      item.classList.remove("start");
    }
  });
}

window.onscroll = loop;

loop();

// Đóng mở mobile menu
var header = document.querySelector('.header');
var mobileMenu = document.querySelector('.nav-mobile-btn');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function() {
  var isClosed = header.clientHeight === headerHeight;
  if(isClosed) {
    header.style.height = 'auto';
  } else {
    header.style.height = null;
  }
}