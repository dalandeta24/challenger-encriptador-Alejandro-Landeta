const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje-encriptado");
const mensajeError = document.getElementById("mensaje-error");


textArea.addEventListener("input", function() {
    if (!validarTexto(this.value)) {
      mensajeError.textContent = "Por favor, ingrese solo letras minúsculas sin acentos.";
    } else {
      mensajeError.textContent = ""; // Limpia el mensaje de error si el texto es válido
    }
  });



//function botonEncriptar(){
    //const textoEncriptado = encriptar(textArea.value);
    //mensaje.value = textoEncriptado
    //textArea.value = "";
    //mensaje.style.backgroundImage = "none";

//}


function botonEncriptar() {
    const texto = textArea.value;
    let mensajeError = document.getElementById("mensaje-error");
  
    if (validarTexto(texto)) {
      const textoEncriptado = encriptar(texto);
      mensaje.value = textoEncriptado;
      textArea.value = "";
      mensaje.style.backgroundImage = "none";
      mensajeError.textContent = ""; // Limpia el mensaje de error
    } else {
      mensajeError.textContent = "Por favor, ingrese solo letras minúsculas sin acentos.";
      mensaje.value = ""; // Limpia el campo de texto encriptado
    }
  }

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptado

    }

function botonDesencriptar(){
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado
        textArea.value = "";
    }


function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado

    }

function limpiarCampo() {
    let textarea = document.getElementById("mensaje-encriptado");
    textarea.value = "";
  }
  
function mostrarNotificacion(mensaje) {
    let notificacion = document.getElementById("mensaje-notificacion");
    notificacion.textContent = mensaje;
    notificacion.style.display = "block";
    setTimeout(() => {
      notificacion.style.display = "none";
    }, 2000);
  }


function validarTexto(texto) {
    return /^[a-z\s]+$/.test(texto); // Permite espacios
  }
  

  