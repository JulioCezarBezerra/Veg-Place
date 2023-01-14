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


////CHATGPT

const form = document.getElementById("registration-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const address = form.elements.address.value;

  // Send data to server
});