const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputEmail = document.getElementById("email");
const inputEdad = document.getElementById("edad");
const inputSexos = document.querySelectorAll("input[type='radio']");
const inputIntereses = document.querySelectorAll("input[type='checkbox']");
const inputSelect = document.querySelector("select");
const buttonEnviar = document.querySelector("button");
const mensajesErrores = document.querySelectorAll(".mensajeError");
const modal = document.querySelector("#mymodal");
const bntClose = document.querySelector(".close");
function validarNombre(){
    if( inputNombre.value.length < 3){
        mensajesErrores[0].classList.remove("hidden")
        inputNombre.classList.add("borderError");
        inputNombre.classList.remove("borderCorrecto");
        return false;
    }
    else{
        mensajesErrores[0].classList.add("hidden")
        inputNombre.classList.remove("borderError");
        inputNombre.classList.add("borderCorrecto");
        return true;
    }
}
function validarApellido(){
    if( inputApellido.value.length < 3){
        mensajesErrores[1].classList.remove("hidden")
        inputApellido.classList.add("borderError");
        inputApellido.classList.remove("borderCorrecto");
        return false;
    }
    else{
        mensajesErrores[1].classList.add("hidden")
        inputApellido.classList.remove("borderError");
        inputApellido.classList.add("borderCorrecto");
        return true;
    }
}
function validarEmail(){
    if(! inputEmail.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)){
        mensajesErrores[2].classList.remove("hidden")
        inputEmail.classList.add("borderError");
        inputEmail.classList.remove("borderCorrecto");
        return false;
    }
    else{
        mensajesErrores[2].classList.add("hidden")
        inputEmail.classList.remove("borderError");
        inputEmail.classList.add("borderCorrecto");
        return true;
    }
}
function validarEdad(){
    if(!isNaN(inputEdad.value) && inputEdad.value != ""){
        if(inputEdad.value >= 0 && inputEdad.value <= 100){
            mensajesErrores[3].classList.add("hidden")
            inputEdad.classList.remove("borderError");
            inputEdad.classList.add("borderCorrecto");
            return true;
        }
        else{
            mensajesErrores[3].classList.remove("hidden")
            inputEdad.classList.add("borderError");
            inputEdad.classList.remove("borderCorrecto");
            return false;
        }
    }
    else{
        mensajesErrores[3].classList.remove("hidden")
        inputEdad.classList.add("borderError");
        inputEdad.classList.remove("borderCorrecto");
        return false;
    }
}
function validarIntereses(){
    valido = false
    inputIntereses.forEach(function(elemento){
        if(elemento.checked){
            valido = true;
        }
    })
    if(valido){
        mensajesErrores[5].classList.add("hidden")
        return true;
    }
    else{
        mensajesErrores[5].classList.remove("hidden")
        return false;
    }
}
function validarPais(){
    if(inputSelect.value != ""){
        mensajesErrores[6].classList.add("hidden")
        return true;
    }
    else{
        mensajesErrores[6].classList.remove("hidden")
        return false
    }
}
function validarCampos(){
    if(validarNombre()){
        if(validarApellido()){
            if(validarEmail()){
                if(validarEdad()){
                   if(validarIntereses()){
                        if(validarPais()){
                            return true;
                        }
                        else{
                            inputSelect.focus();
                        }
                   }
                   else{
                       inputIntereses[0].focus();
                   }
                }
                else{
                    inputEdad.focus()
                }
            }
            else{
                inputEmail.focus();
            }
        }
        else{
            inputApellido.focus();
        }
    }
    else{
        inputNombre.focus();
    }
    return false;
}
inputNombre.addEventListener("blur" , validarNombre)
inputApellido.addEventListener("blur" , validarApellido)
inputEmail.addEventListener("blur" , validarEmail)
inputEdad.addEventListener("blur" , validarEdad)
inputSelect.addEventListener("change" , validarPais)
bntClose.addEventListener("click" , function(){
    modal.style.display = "none";
})
buttonEnviar.addEventListener("click" , function(e){
    if(validarCampos()){
        modal.style.display = "block";
        e.preventDefault();
    }
    else{
        e.preventDefault();
    }
})