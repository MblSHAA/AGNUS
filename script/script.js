var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
var scrolled;
window.onscroll = function () {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 10) {
    $(".header").css({ backgroundColor: "#19191abf" });
  }
  if (10 > scrolled) {
    $(".header").css({ backgroundColor: "transparent" });
  }
  scrolled2 = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled2 > 650) {
    $(".btn-up").css({ opacity: 1, transform: "translateY(-10px)" });
  }
  if (650 > scrolled2) {
    $(".btn-up").css({ opacity: 0, transform: "translateY(70px)" });
  }
};
// var scrolled2;
// window.onscroll = function () {
//   scrolled2 = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrolled2 > 800) {
//     $(".btn-up").css({ opacity: 1 });
//   }
//   if (800 > scrolled2) {
//     $(".btn-up").css({ opacity: 0 });
//   }
// };
