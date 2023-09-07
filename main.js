const sectionPro = document.getElementById("section-proyectos")
const sectionCon = document.getElementById("section-contacto")
const sectionEdu = document.getElementById("section-educacion")
const sectionInicio = document.getElementById("inicio")
const contenedor = document.querySelector(".contenedor");
const imagen = document.querySelector(".imagen");
const info = document.querySelector(".info");

const botonSM = document.getElementById("boton-sm")
const botonPro = document.getElementById("boton-pro")
const botonCon = document.getElementById("boton-con")

const navInicio = document.getElementById("nav-inicio")

const popupTrigger = document.querySelector('.popup-trigger');
const popup = document.getElementById('popup');



let textoDiablo = document.getElementById("texto-diablo")
let textoCaida = document.getElementById("texto-caida")
let secciones = document.querySelectorAll(".ancla-1")
let anclaRombo = document.getElementById("ancla-rombo")
let isHovered = false;
let modal = document.getElementById("modal");
let imagenModal = document.getElementById("imagen-modal");


function verAnclaRombo() {
  anclaRombo.style.transition = "opacity 1s cubic-bezier(0.68, -0.55, 0.27, 1.55), visibility 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)"
  anclaRombo.style.visibility = "visible"
  anclaRombo.style.opacity = "1"
}

function ocultarAnclaRombo() {
  anclaRombo.style.transition = "opacity 1s cubic-bezier(0.68, -0.55, 0.27, 1.55), visibility 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)"
  anclaRombo.style.visibility = "hidden"
  anclaRombo.style.opacity = "0"
}

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


  contenedor.addEventListener("mouseenter", () => {
    if (!isHovered) {
      imagen.style.transform = "translateY(-15px)";
      imagen.style.transition = "1s  cubic-bezier(0.68, -0.55, 0.27, 1.55)"
      info.style.opacity = 1;
      info.style.transform = "translateY(0%)";
      isHovered = true;
    }
  });

  contenedor.addEventListener("mouseleave", () => {
    imagen.style.transform = "translateY(0)";
    info.style.opacity = 0;
    info.style.transform = "translateY(-15%)";
    isHovered = false;
  });

  // Agrega un evento para mostrar la ventana emergente cuando el mouse esté encima de la palabra
  popupTrigger.addEventListener('mouseover', () => {
    popup.style.opacity = '1';
    popup.style.transform = 'translate(-32%, -50%) translateX(-50%)';
    popup.style.display = "flex"
  });

  // Agrega un evento para ocultar la ventana emergente cuando el mouse salga de la palabra
  popupTrigger.addEventListener('mouseout', () => {
    popup.style.opacity = '0';
    popup.style.transform = 'translate(-50%, -50%) translateX(-10%)';
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

  if (sobreMiSectionTop < windowHeight / 1.5) {
    sobreMiSection.classList.add('mostrar'); // Aplica la clase para mostrar la sección
  } else {
    sobreMiSection.classList.remove('mostrar'); // Oculta la sección si el usuario se desplaza hacia arriba
  }
}

function mostrarSeccionEducacion() {
  const sectionEdu = document.getElementById('section-educacion');
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;

  const sectionEduTop = sectionEdu.getBoundingClientRect().top;

  if (sectionEduTop < windowHeight / 1.5) {
    sectionEdu.classList.add('mostrar'); // Aplica la clase para mostrar la sección
  } else {
    sectionEdu.classList.remove('mostrar'); // Oculta la sección si el usuario se desplaza hacia arriba
  }
}

// Función para mostrar el modal
function mostrarModal(idCurso) {
    modal.classList.add("abierto");
    var rutaImagen = obtenerRutaImagen(idCurso);
    imagenModal.src = rutaImagen;
    setTimeout(function () {
        modal.style.opacity = "1";
    }, 10);
}

// Función para cerrar el modal
function cerrarModal() {
    modal.style.opacity = "0";
    setTimeout(function () {
        modal.classList.remove("abierto");
    }, 10);
}

// Event listener para cerrar el modal haciendo clic fuera de él
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        cerrarModal();
    }
});

// Función para obtener la ruta de la imagen según el id del curso
function obtenerRutaImagen(idCurso) {
  switch (idCurso) {
      case "curso1":
          return "./assets/imagen-curso1.png"; // Reemplaza con la ruta de la imagen para curso1
      case "curso2":
          return "./assets/imagen-curso2.jpeg"; // Reemplaza con la ruta de la imagen para curso2
      case "curso3":
          return "./assets/imagen-curso3.png"; // Reemplaza con la ruta de la imagen para curso3
      case "curso4":
          return "./assets/imagen-curso4.png"; // Reemplaza con la ruta de la imagen para curso4
      default:
          return "";
  }
}

// Función para obtener la ruta de la imagen según el id del curso

// Detectar el desplazamiento de la página en cada seccion
window.addEventListener('scroll', mostrarSeccionSobreMi);

window.addEventListener('scroll', mostrarSeccionEducacion)

//iniciar la pagina

window.addEventListener("load", EscucharBotones);



