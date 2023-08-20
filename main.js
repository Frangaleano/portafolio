const sectionSM = document.getElementById("section-sm")
const botonSM = document.getElementById("boton-sm")
const sectionInicio = document.getElementById("inicio")
const navInicio = document.getElementById("nav-inicio")
const botonInicio = document.getElementById("nombre-inicio")

let textoDiablo = document.getElementById("texto-diablo")
let textoCaida = document.getElementById("texto-caida")


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
  sectionSM.style.display = "none"

  botonSM.addEventListener("click", ()=> {
    sectionInicio.style.display = "none"
    sectionSM.style.display = "flex"
  })


  botonInicio.addEventListener("click", () => {
    sectionInicio.style.display = "flex"
    sectionSM.style.display = "none"
  })

}


window.addEventListener("load", EscucharBotones(), {
  
})