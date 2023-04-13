function mostrarMensaje() { //elemento para ocultarlo
document.getElementById('text2').style.display = "block";
}

function ocultarMensaje() {
    document.getElementById('text2').style.display = "none";  //oculta
}

function agrandarLetra(){
    var caja3 = document.getElementById("caja3"); // busco el elemento
            var fontSize = window.getComputedStyle(caja3.querySelector("p")).getPropertyValue("font-size");        
            var currentFontSize = parseFloat(fontSize); // Convierte el tamaño 
            var newFontSize = currentFontSize + 6; //aumento a 6px
            caja3.querySelector("p").style.fontSize = newFontSize + "px";//retorna a la letra normal
}