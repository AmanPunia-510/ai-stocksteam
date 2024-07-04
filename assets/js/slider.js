// REVIEW SLIDER SETTING START HERE
var swiper = new Swiper(".reviewSwiper", {
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3.2,
      spaceBetween: 30,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    2200: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    2500: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});

// Ensure swiper instance is fully initialized before using slideTo
swiper.on("init", function () {
  swiper.slideTo(2, 0);
});

// INITIALIZE SWIPER
swiper.init();