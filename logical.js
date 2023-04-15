

//funcion para hacer la encriptación
function encriptar(){
    var texto = document.getElementById("texto-a-modificar").value
    if(validar(texto)){
        document.getElementById("imagen").style.display = "none";
        var texto_encriptado = ""
        for (var i = 0; i < texto.length; i++){
            var caracter = texto.charAt(i);
            if (caracter == "a"){
                texto_encriptado += "ai";
            }else if (caracter == "e"){
            texto_encriptado += "enter";
            }else if (caracter == "i"){
                texto_encriptado += "imes";
            }else if (caracter == "o"){
                texto_encriptado += "ober";
            }else if (caracter == "u"){
                texto_encriptado += "ufat";
            }else{
                texto_encriptado += caracter;
            }
        }
        document.getElementById("texto-modificado").innerHTML = "<p id='encriptado-texto'>" + texto_encriptado + "</p> <button id='boton-copiar' onclick='copiarTexto()'>Copiar</button>";

    }else{
        alert("Error! Ingrese un texto correcto")
    }
    
}

//funcion para desencriptar
function desencriptar(){
    var texto = document.getElementById("texto-a-modificar").value
    if(validar(texto)){
        document.getElementById("imagen").style.display = "none";
        var texto_desencriptado = texto.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");
        document.getElementById("texto-modificado").innerHTML = "<p id='encriptado-texto'>" + texto_desencriptado + "</p>";
        document.getElementById("div-copy").innerHTML = "<button id='boton-copiar' onclick='copiarTexto()'>Copiar</button>";
    }else{
        alert("Error! Ingrese solo letras minusculas y sin caracteres!")
    }

}

function validar(texto){
    var isMinus = true;
    var regex = /^[a-z¿?!\s]+$/;
    if (!regex.test(texto)){
        isMinus = false;
    }

    return isMinus;

}

function copiarTexto() {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById("encriptado-texto").innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("Texto copiado!")
}