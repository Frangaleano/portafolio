const sectionSM = document.getElementById("section-sm")
const botonSM = document.getElementById("boton-sm")
const sectionInicio = document.getElementById("inicio")
const navInicio = document.getElementById("nav-inicio")

function EscucharBotones() {
  sectionSM.style.display = "none"

  botonSM.addEventListener("click", ()=> {
    sectionInicio.style.display = "none"
    sectionSM.style.display = "flex"
  })






}










window.addEventListener("load", EscucharBotones(), {
  
})