document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector("#header");
  let menu = document.querySelector(".nav");
  let menuBtn = document.querySelector("#menu");
  let overlay = document.querySelector(".overlay");
  let sliderHero = document.querySelector(".hero__slider");
  let sliderWorks = document.querySelector(".works__slider");
  let sliderReviews = document.querySelector(".reviews__slider");
  let btnToTop = document.querySelector("#scroll-up");
  let faqBtn = document.querySelectorAll(".faq__head");

  menuBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("active");
    header.classList.toggle("border-bottom");
    overlay.classList.toggle("shown");
    document.body.classList.toggle("no-scroll");
  });

  for (let i = 0; i < faqBtn.length; i++) {
    faqBtn[i].addEventListener("click", function () {
      this.classList.toggle("active");
      this.closest(".faq__item").classList.toggle("active");
      let faqInfo = this.parentNode.querySelector(".faq__body");
      if (faqInfo.style.maxHeight) {
        faqInfo.style.maxHeight = null;
        faqInfo.classList.remove("shown");
      } else {
        faqInfo.style.maxHeight = faqInfo.scrollHeight * 1.3 + "px";
        faqInfo.classList.add("shown");
      }
    });
  };

  if (btnToTop) {
    btnToTop.addEventListener("click", () => {
      btnToTop.classList.remove("shown");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  let fixHeader = () => {
    if (window.pageYOffset > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    };
  };

  let shownToTopBtn = () => {
    if (btnToTop) {
      if (window.scrollY > 450) {
        btnToTop.classList.add("shown");
      } else {
        btnToTop.classList.remove("shown");
      };
    }
  };

  document.addEventListener('scroll', fixHeader);
  document.addEventListener('scroll', shownToTopBtn);

  if (sliderHero) {
    let swiperHero = new Swiper('.hero__slider', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
      }
    });
  }

  if (sliderWorks) {
    let swiperWorks = new Swiper('.works__slider', {
      slidesPerView: 4,
      loop: true,
      navigation: {
        prevEl: '#slider-works-btn-prev',
        nextEl: '#slider-works-btn-next',
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        421: {
          slidesPerView: "auto",
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        771: {
          slidesPerView: 3,
          spaceBetween: 25
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 25
        },
      }
    });
  }

  if (sliderReviews) {
    let swiperReviews = new Swiper('.reviews__slider', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      navigation: {
        prevEl: `#slider-reviews-btn-prev`,
        nextEl: `#slider-reviews-btn-next`,
      },
      breakpoints: {
        480: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        871: {
          slidesPerView: 2,
          spaceBetween: 30,
        }
      },
    });
  }

  let mql = window.matchMedia('(max-width: 650px)');
  let swiperServices;

  window.addEventListener("resize", function () {
    if (mql.matches == true) {
      swiperServices = new Swiper('.services__slider', {
        loop: true,
        spaceBetween: 20,
        pagination: {
          clickable: true,
          el: '.swiper-pagination',
        },
        breakpoints: {
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          501: {
            slidesPerView: 2,
          }
        },
      });
    } else if (mql.matches === false) {
      swiperServices.destroy(true, true);
    }
  });
});