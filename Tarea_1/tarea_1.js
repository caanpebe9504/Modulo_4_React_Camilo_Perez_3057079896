let mensaje1 = document.getElementById("mensaje1")
let mensaje2 = document.getElementById("mensaje2")
let mensaje3 = document.getElementById("mensaje3")

let boton = document.getElementById("boton")

boton.addEventListener("mouseenter",mostrarMensaje)
boton.addEventListener("mouseleave", ocultarMensaje)

function mostrarMensaje(){

    setTimeout(() =>{

        mensaje1.innerHTML = "Soy el primer texto en aparecer desde JS."
        mensaje1.style.margin = "50px"
        mensaje1.style.background = "beige"

    }, 1000)

    setTimeout(() =>{

        mensaje2.innerHTML = "Soy el segundo texto en aparecer desde JS."
        mensaje2.style.margin = "50px"
        mensaje2.style.background = "lightgray"
    
    }, 2000)

    setTimeout(() =>{

        mensaje3.innerHTML = "Soy el tercer texto en aparecer desde JS."
        mensaje3.style.margin = "50px"
        mensaje3.style.background = "lightblue"
    
    },3000)

    setTimeout(() => {
        boton.innerHTML = "¡Aleja el mouse!"
    },3500)
    
}

function ocultarMensaje(){
    
    setTimeout(() => {

        mensaje1.innerHTML = "Me ocultaré primero."

    },1000)

    setTimeout(() => {
        mensaje1.innerHTML = ""
        mensaje1.style.background = "white"
    },1500)

    setTimeout(() => {

        mensaje2.innerHTML = "Me ocultaré segundo."

    },2000)

    setTimeout(() => {
        mensaje2.innerHTML = ""
        mensaje2.style.background = "white"
    },2500)

    setTimeout(() => {

        mensaje3.innerHTML = "Me ocultaré tercero."

    },3000)

    setTimeout(() => {
        mensaje3.innerHTML = ""
        mensaje3.style.background = "white"
    },3500)
}