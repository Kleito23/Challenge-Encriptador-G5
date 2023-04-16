//Variables texto y botones
let texto = document.getElementById("texto-a-modificar");
let areaTexto = document.getElementById("texto-a-modificar");
let enviarTexto = document.getElementById("texto-modificado");
const botonEncriptar = document.getElementById("button-encriptar");
const botonDesencriptar = document.getElementById("button-desencriptar");
let alerta = document.getElementById("error");
var copiarTexto = document.getElementById("copiar")

//Alerta

areaTexto.addEventListener("input", function(){
    let textoIngresado = texto.value;

    if (textoIngresado != textoIngresado.toLowerCase()) {
        alerta.classList.add("show");

        botonEncriptar.classList.add("disabled");
        botonDesencriptar.classList.add("disabled");

        botonEncriptar.onclick = null;
        botonDesencriptar.onclick = null;
    }else{
        alerta.classList.remove("show");

        if(textoIngresado.length > 0){
            botonEncriptar.classList.remove("disabled");
            botonDesencriptar.classList.remove("disabled");

            botonEncriptar.onclick = cifrar;
            botonDesencriptar.onclick = descifrar;

        }else{
            botonEncriptar.classList.add("disabled");
            botonDesencriptar.classList.add("disabled");

            botonEncriptar.onclick = null;
            botonDesencriptar.onclick = null;           
        }

        function cifrar(){
            let texto = eliminarAcentos(textoIngresado)
            .replace(/a/g,"ai")
            .replace(/e/g,"enter")
            .replace(/i/g,"imes")
            .replace(/o/g,"ober")
            .replace(/u/g,"ufat");

            enviarTexto.innerHTML ="<p id='encriptado-texto'>" + texto + "</p>";

        }

        function descifrar(){
            let texto = eliminarAcentos(textoIngresado)
            .replace(/ai/g,"a")
            .replace(/enter/g,"e")
            .replace(/imes/g,"i")
            .replace(/ober/g,"o")
            .replace(/ufat/g,"u");

            enviarTexto.innerHTML ="<p id='encriptado-texto'>" + texto + "</p>";
        }


        function eliminarAcentos(cadena){
            const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
            return cadena.split('').map( letra => acentos[letra] || letra).join('').toString(); 
        }
        
        }


    });


//Funcion para copiar texto

copiarTexto.addEventListener("click",function(){
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById("encriptado-texto").innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("Texto copiado!")
})
botonEncriptar.addEventListener("click", function(){
    if(botonEncriptar.onclick != null){
        copiarTexto.classList.add("show");
    }else{
        copiarTexto.classList.remove("show");
    }
});

botonDesencriptar.addEventListener("click", function(){
    if(botonEncriptar.onclick == null){
        copiarTexto.classList.add("disabled");
    }else{
        copiarTexto.classList.remove("disabled");
    }
});


