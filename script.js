


const inputNombre = document.getElementById("nombre");
const mensajesErrores = document.querySelectorAll(".mensajeError");
inputNombre.addEventListener("blur" , function(){
    if( inputNombre.value.length < 3){
        mensajesErrores[0].classList.remove("hidden")
        inputNombre.classList.add("borderError");
        inputNombre.classList.remove("borderCorrecto");
    }
    else{
        mensajesErrores[0].classList.add("hidden")
        inputNombre.classList.remove("borderError");
        inputNombre.classList.add("borderCorrecto");
    }
})
