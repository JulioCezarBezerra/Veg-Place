const swiper = new Swiper('.swiper', {
    spaceBetween: 1,
    slidesPerView: 5,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 500,
    },
  });

var mySwiper = new Swiper ('.swiper', {
    // opções de configuração
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        }
    }
});


const botaoMenu = document.querySelector('#botao_header')
const menu = document.querySelector('#cabecalho_principal_nav')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('cabecalho_principal_nav--ativo')
})