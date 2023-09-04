const sectionSM = document.getElementById("section-sm")
const sectionPro = document.getElementById("section-proyectos")
const sectionCon = document.getElementById("section-contacto")
const sectionInicio = document.getElementById("inicio")

const botonSM = document.getElementById("boton-sm")
const botonPro = document.getElementById("boton-pro")
const botonCon = document.getElementById("boton-con")

const navInicio = document.getElementById("nav-inicio")



let textoDiablo = document.getElementById("texto-diablo")
let textoCaida = document.getElementById("texto-caida")
let secciones = document.querySelectorAll(".ancla-1")




function verTextoDiablo() {
  textoDiablo.style.transition = "opacity 2s cubic-bezier(0.68, -0.55, 0.27, 1.55), visibility 2s cubic-bezier(0.68, -0.55, 0.27, 1.55)"
  textoDiablo.style.visibility = "visible"
  textoDiablo.style.opacity = "1"
}

function ocultarTextoDiablo() {
  textoDiablo.style.transition = "opacity 3s cubic-bezier(0.68, -0.55, 0.27, 1.55), visibility 3s cubic-bezier(0.68, -0.55, 0.27, 1.55)"
  textoDiablo.style.visibility = "hidden"
  textoDiablo.style.opacity = "0"
}

function verTextoCaida() {
  textoCaida.style.transition = "opacity 2s cubic-bezier(0.68, -0.55, 0.27, 1.55), visibility 2s cubic-bezier(0.68, -0.55, 0.27, 1.55)"
  textoCaida.style.visibility = "visible"
  textoCaida.style.opacity = "1"
}

function ocultarTextoCaida() {
  textoCaida.style.transition = "opacity 3s cubic-bezier(0.68, -0.55, 0.27, 1.55), visibility 3s cubic-bezier(0.68, -0.55, 0.27, 1.55)"
  textoCaida.style.visibility = "hidden"
  textoCaida.style.opacity = "0"
}


function EscucharBotones() {

  secciones.forEach(function (seccion) {
    seccion.addEventListener('click', function () {
      // Quitar la clase 'seleccionada' de todas las secciones
      secciones.forEach(function (seccion) {
        seccion.classList.remove('seleccionada');
      });

      // Agregar la clase 'seleccionada' solo a la sección actual
      this.classList.add('seleccionada');
    });
  });
}

function inicio() {
  location.reload()
}

function mostrarSeccionSobreMi() {
  const sobreMiSection = document.getElementById('section-sm');
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;

  const sobreMiSectionTop = sobreMiSection.getBoundingClientRect().top;

  if (sobreMiSectionTop < windowHeight / 1) {
    sobreMiSection.classList.add('mostrar'); // Aplica la clase para mostrar la sección
  } else {
    sobreMiSection.classList.remove('mostrar'); // Oculta la sección si el usuario se desplaza hacia arriba
  }
}

// Detectar el desplazamiento de la página
window.addEventListener('scroll', mostrarSeccionSobreMi);

// Asegúrate de que el evento 'load' esté configurado correctamente
window.addEventListener("load", EscucharBotones);



