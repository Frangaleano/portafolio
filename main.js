const sectionSM = document.getElementById('sectionSobreMi')
const botonPerfil = document.getElementById('perfil')


const toggleMenu = () => {
  document.body.classList.toggle("open");
  irSobreMi(botonPerfil)
};

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  speed: 750,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function irSobreMi(botonPerfil) {
  botonPerfil.addEventListener('click', () => {
    inicio()
  })
}

function inicio() {
  location.reload()
}