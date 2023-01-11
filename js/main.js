const swiper = new Swiper('.swiper', {
    spaceBetween: 1,
    slidesPerView: 5,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 1000,
    },
  });