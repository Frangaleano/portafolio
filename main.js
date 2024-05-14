const botones = {
  sm: document.getElementById("boton-sm"),
  pro: document.getElementById("boton-pro"),
  con: document.getElementById("boton-con"),
  edu: document.getElementById("boton-edu"),
};

const habilidadesAnimadas = new Array(5).fill(false);

const popupTrigger = document.querySelector('.popup-trigger');
const popup = document.getElementById('popup');
const secciones = Array.from(document.querySelectorAll(".ancla-1"));
const modal = document.querySelector("#modal");
const imagenModal = document.getElementById("imagen-modal");
let modalTimer;

document.addEventListener("DOMContentLoaded", () => {
  const pantallaInicio = document.querySelector(".pantalla-inicio");
  const mensajeInicio = pantallaInicio.querySelector("h1");
  const body = document.body;

  setTimeout(() => {
    mensajeInicio.style.opacity = "1";
    mensajeInicio.style.transform = "translateY(0)";
    body.style.overflow = "hidden";

    setTimeout(() => {
      mensajeInicio.style.opacity = "0";
      mensajeInicio.style.transform = "translateY(-20px)";
      pantallaInicio.style.opacity = "0";

      setTimeout(() => {
        pantallaInicio.style.display = "none";
        body.style.overflow = "auto";
      }, 4000);
    }, 4000);
  }, 1000);
});

function inicio() {
  location.reload();
}

function EscucharBotones() {
  secciones.forEach((seccion) => {
    seccion.addEventListener('click', () => {
      secciones.forEach((s) => s.classList.remove('seleccionada'));
      seccion.classList.add('seleccionada');
    });
  });

  popupTrigger.addEventListener('mouseover', () => {
    popup.style.opacity = '1';
    popup.style.transform = 'translate(-32%, -50%) translateX(-50%)';
    popup.style.display = "flex";
  });

  popupTrigger.addEventListener('mouseout', () => {
    popup.style.opacity = '0';
    popup.style.transform = 'translate(-50%, -50%) translateX(-20%)';
  });

  botones.sm.addEventListener("click", () => scrollToSection("section-sm"));
  botones.edu.addEventListener("click", () => scrollToSection("section-edu"));
  botones.pro.addEventListener("click", () => scrollToSection("section-proyectos"));
  botones.con.addEventListener("click", () => scrollToSection("section-contacto"));
}

function mostrarSeccion(sectionId) {
  const section = document.getElementById(sectionId);
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;
  const sectionTop = section.getBoundingClientRect().top;

  if (sectionTop < windowHeight / 1.5) {
    section.classList.add('mostrar');
    if (sectionId === 'section-edu') {
      animarMedidores();
    }
  } else {
    section.classList.remove('mostrar');
  }
}

function animarMedidores() {
  const medidores = document.querySelectorAll('.medidor');

  medidores.forEach((medidor, index) => {
    const valorDeseado = parseFloat(medidor.getAttribute('valor'));
    const sectionEdu = document.getElementById('section-edu');
    const windowHeight = window.innerHeight;
    const sectionEduTop = sectionEdu.getBoundingClientRect().top;
    const isVisible = sectionEduTop < windowHeight / 1.5;

    if (!habilidadesAnimadas[index] && isVisible) {
      animarMedidor(medidor, valorDeseado);
      habilidadesAnimadas[index] = true;
    } else if (!isVisible) {
      habilidadesAnimadas[index] = false;
    }
  });
}

function animarMedidor(medidor, valorDeseado) {
  let valorActual = parseFloat(medidor.value);
  const duraciónAnimación = 2000;
  const startTime = performance.now();

  function actualizarValor() {
    const currentTime = performance.now();
    const tiempoTranscurrido = currentTime - startTime;
    if (tiempoTranscurrido < duraciónAnimación) {
      valorActual = (tiempoTranscurrido / duraciónAnimación) * valorDeseado;
      medidor.value = valorActual.toFixed(2);
      requestAnimationFrame(actualizarValor);
    } else {
      medidor.value = valorDeseado;
    }
  }
  requestAnimationFrame(actualizarValor);
}

function mostrarModal(idCurso) {
  clearTimeout(modalTimer);
  modal.style.display = "block";
  imagenModal.src = obtenerRutaImagen(idCurso);
  modal.style.opacity = "0";
  modalTimer = setTimeout(() => {
    modal.style.opacity = "1";
  }, 10);
  modal.style.transition = "opacity 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
}

function cerrarModal() {
  clearTimeout(modalTimer);
  modal.style.opacity = "0";
  modalTimer = setTimeout(() => {
    modal.style.display = "none";
  }, 1000);
  modal.style.transition = "opacity 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
}

function obtenerRutaImagen(idCurso) {
  const imagenes = {
    curso1: "./assets/imagen-curso1.png",
    curso2: "./assets/imagen-curso2.jpeg",
    curso3: "./assets/imagen-curso3.png",
    curso4: "./assets/imagen-curso4.png",
    curso5: "./assets/imagen-curso5.png",
  };
  return imagenes[idCurso] || "";
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offset = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
}

const toggleMenuOpen = () => {
  document.body.classList.toggle("open");
};

// Función para validar el formulario
function enviarFormulario(event) {
  event.preventDefault(); // Evita la recarga de la página por defecto

  var campos = document.querySelectorAll(".campo");
  var mensajeError = document.getElementById("mensajeError");
  var formCompleto = true;

  // Validación del campo Nombre: debe contener solo letras
  var regexNombre = /^[A-Za-z]+$/;
  var nombre = document.getElementById("nombre");
  if (!regexNombre.test(nombre.value)) {
      nombre.style.border = "1px solid red";
      formCompleto = false;
  } else {
      nombre.classList.remove("campo-invalido");
  }

  // Validación del campo Correo Electrónico: debe tener "@" y ".com"
  var regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  var email = document.getElementById("email");
  if (!regexEmail.test(email.value)) {
      email.style.border = "1px solid red";
      formCompleto = false;
  } else {
      email.classList.remove("campo-invalido");
  }

  if (!formCompleto) {
      mensajeError.innerHTML = "Fíjate si completaste bien todo!";
      mensajeError.style.left = "18%";
      setTimeout(function () {
          mensajeError.style.opacity = "0";
      }, 3000);
  } else {
      // Enviar los datos a través de EmailJS
      emailjs.send('service_jpqf64r', 'template_4qzuycs', {
          nombre: nombre.value,
          email: email.value,
          mensaje: document.getElementById("mensaje").value
      })
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          // Ocultar el formulario y mostrar el mensaje de éxito
          document.getElementById("miFormulario").style.display = "none";
          document.getElementById("mensajeExito").style.display = "block";
      }, function(error) {
          console.log('FAILED...', error);
          mensajeError.innerHTML = "Hubo un error al enviar el formulario.";
          mensajeError.style.display = "block";
      });
  }
}

window.addEventListener('scroll', () => mostrarSeccion("section-sm"));
window.addEventListener('scroll', () => mostrarSeccion("section-proyectos"));
window.addEventListener('scroll', () => mostrarSeccion("section-edu"));
window.addEventListener('scroll', () => mostrarSeccion("section-contacto"));
// Evento de carga de la página
window.addEventListener('load', EscucharBotones);