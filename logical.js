
function encriptar(){
    document.getElementById("imagen").style.display = "none";
    var texto = document.getElementById("texto-a-modificar").value;
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

    document.getElementById("texto-modificado").innerHTML = "<p id='encriptado-texto'>" + texto_encriptado + "</p>";
    }

}