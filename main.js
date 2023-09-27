const sectionInicio = document.getElementById("inicio")
const contenedor = document.querySelector(".contenedor");
const imagen = document.querySelector(".imagen");
const info = document.querySelector(".info");

const botonSM = document.getElementById("boton-sm")
const botonPro = document.getElementById("boton-pro")
const botonCon = document.getElementById("boton-con")
const botonEdu = document.getElementById("boton-edu")

const navInicio = document.getElementById("nav-inicio")

const popupTrigger = document.querySelector('.popup-trigger');
const popup = document.getElementById('popup');

const habilidadesAnimadas = [];
const textRombo3 = document.querySelector(".texto-rombo3")



let textoDiablo = document.getElementById("texto-diablo")
let textoCaida = document.getElementById("texto-caida")
let secciones = document.querySelectorAll(".ancla-1")
let anclaRombo = document.getElementById("ancla-rombo")
let isHovered = false;
let modal = document.querySelector("#modal");
let imagenModal = document.getElementById("imagen-modal");
let modalTimer;




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


function dibujarLineas() {
  const lineas = document.querySelectorAll('.linea');
  lineas.forEach((linea) => {
    linea.style.width = '100%'; // Cambiar el ancho al 100% para dibujar la línea
    linea.style.opacity = "1"
  });
  textRombo3.style.opacity = "1"
}

function ocultarLineas() {
  const lineas = document.querySelectorAll('.linea');
  lineas.forEach((linea) => {
    linea.style.width = '0'; 
    linea.style.opacity = "0"; // Restablecer el ancho a 0 para ocultar la línea
  });
  textRombo3.style.opacity = "0"
}


function EscucharBotones() {
  secciones.forEach(function (seccion) {
    seccion.addEventListener('click', function () {
      secciones.forEach(function (seccion) {
        event.preventDefault(); // Quitar la clase 'seleccionada' de todas las secciones
        seccion.classList.remove('seleccionada');
      });

      // Agregar la clase 'seleccionada' solo a la sección actual
      this.classList.add('seleccionada');
    });
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
  const sectionEdu = document.getElementById('section-edu');
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;

  const sectionEduTop = sectionEdu.getBoundingClientRect().top;

  if (sectionEduTop < windowHeight / 1.5) {
    sectionEdu.classList.add('mostrar'); // Aplica la clase para mostrar la sección
    animarMedidores();
  } else {
    sectionEdu.classList.remove('mostrar'); // Oculta la sección si el usuario se desplaza hacia arriba
  }
}

function mostrarSeccionProyectos() {
  const sectionProyectos = document.getElementById('section-proyectos');
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;

  const sectionProyectosTop = sectionProyectos.getBoundingClientRect().top;

  if (sectionProyectosTop < windowHeight / 1.5) {
    sectionProyectos.classList.add('mostrar'); // Aplica la clase para mostrar la sección
  } else {
    sectionProyectos.classList.remove('mostrar'); // Oculta la sección si el usuario se desplaza hacia arriba
  }
}


function animarMedidores() {
  // Obtener todos los medidores
  const medidores = document.querySelectorAll('.medidor');

  medidores.forEach((medidor) => {
    // Obtener el valor deseado desde el atributo data
    const valorDeseado = parseFloat(medidor.getAttribute('data-valor-deseado'));

    // Verificar si la sección de educación está visible en la pantalla
    const sectionEdu = document.getElementById('section-edu');
    const windowHeight = window.innerHeight;
    const sectionEduTop = sectionEdu.getBoundingClientRect().top;
    const isVisible = sectionEduTop < windowHeight / 1.5;

    // Obtener el índice de la habilidad actual en el NodeList
    const index = Array.from(medidores).indexOf(medidor);

    // Verificar si la habilidad aún no se ha animado y es visible
    if (!habilidadesAnimadas[index] && isVisible) {
      animarMedidor(medidor, valorDeseado);
      habilidadesAnimadas[index] = true; // Marcar la habilidad como animada
    } else if (!isVisible) {
      habilidadesAnimadas[index] = false; // Marcar la habilidad como no animada si no es visible
    }
  });
}

function animarMedidor(medidor, valorDeseado) {
  let valorActual = parseFloat(medidor.value);
  const duracionAnimacion = 3000; // Duración de la animación en milisegundos (3 segundos en este caso)
  const startTime = performance.now(); // Tiempo de inicio de la animación

  function actualizarValor() {
    const currentTime = performance.now();
    const tiempoTranscurrido = currentTime - startTime;

    if (tiempoTranscurrido < duracionAnimacion) {
      valorActual = (tiempoTranscurrido / duracionAnimacion) * valorDeseado;
      medidor.value = valorActual.toFixed(2); // Establecer el valor y redondear a 2 decimales
      requestAnimationFrame(actualizarValor);
    } else {
      medidor.value = valorDeseado; // Establecer el valor deseado cuando la animación esté completa
    }
  }

  requestAnimationFrame(actualizarValor);
}

// Llamar a la función para animar los medidores cuando se hace scroll
window.addEventListener('scroll', animarMedidores);


function mostrarSeccionContacto() {
  const sectionContacto = document.getElementById('section-contacto');
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;

  const sectionContactoTop = sectionContacto.getBoundingClientRect().top;

  if (sectionContactoTop < windowHeight / 1.5) {
    sectionContacto.classList.add('mostrar'); // Aplica la clase para mostrar la sección
  } else {
    sectionContacto.classList.remove('mostrar'); // Oculta la sección si el usuario se desplaza hacia arriba
  }
}

function mostrarModal(idCurso) {
  clearTimeout(modalTimer); // Limpiar el temporizador anterior
  modal.style.display = "block";
  var rutaImagen = obtenerRutaImagen(idCurso);
  imagenModal.src = rutaImagen;
  modal.style.opacity = "0"; // Inicialmente, establece la opacidad en 0
  modalTimer = setTimeout(function () {
    modal.style.opacity = "1"; // Cambia la opacidad a 1 para mostrar suavemente el modal
  }, 10); // Cambia este valor a 10 o el valor que desees para una transición más suave
  modal.style.transition = "opacity 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
}

function cerrarModal() {
  clearTimeout(modalTimer); // Limpiar el temporizador anterior
  modal.style.opacity = "0"; // Establece la opacidad en 0 para ocultar suavemente el modal
  modalTimer = setTimeout(function () {
    modal.style.display = "none"; // Oculta el modal después de la transición
  }, 1000); // Ajusta el tiempo de transición aquí según tus preferencias
  modal.style.transition = "opacity 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
}

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
      return "./assets/imagen-curso4.png";
    case "curso5":
      return "./assets/imagen-curso5.png"; // Reemplaza con la ruta de la imagen para curso4
    default:
      return "";
  }
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offset = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: offset,
      behavior: "smooth" // Esto habilita el desplazamiento suave
    });
  }
}

// Luego, agrega eventos de clic a tus botones de navegación para llamar a esta función:
botonSM.addEventListener("click", function () {
  scrollToSection("section-sm");
});

botonEdu.addEventListener("click", function () {
  scrollToSection("section-edu");
});

botonPro.addEventListener("click", function () {
  scrollToSection("section-proyectos");
});

botonCon.addEventListener("click", function () {
  scrollToSection("section-contacto");
});


// Detectar el desplazamiento de la página en cada seccion
window.addEventListener('scroll', mostrarSeccionSobreMi);

// Detectar el desplazamiento de la página en cada seccion
window.addEventListener('scroll', mostrarSeccionProyectos);

window.addEventListener('scroll', mostrarSeccionEducacion);

window.addEventListener('scroll', mostrarSeccionContacto);
//iniciar la pagina

window.addEventListener("load", EscucharBotones);






