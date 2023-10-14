document.addEventListener("DOMContentLoaded", function () {
    const botonRojo = document.getElementById("rojo");
    const botonVerde = document.getElementById("verde");
    const botonAmarillo = document.getElementById("amarillo");
    const botonAzul = document.getElementById("azul");
    const botonMorado = document.getElementById("morado");
    const botonClasico = document.getElementById("clasico");
  
    function cambiarVerde() {
        document.documentElement.style.backgroundColor = "#adff2f";
        document.documentElement.style.color = "#000000";
    }

    function cambiarRojo() {
        document.documentElement.style.backgroundColor = "#a90000"; //.documentElement es como poner .html y engloba todo el documento
        document.documentElement.style.color = "#ffffff";
    }

    function cambiarAmarillo() {
        document.documentElement.style.backgroundColor = "#F7F731"; 
        document.documentElement.style.color = "#000000";
    }

    function cambiarAzul() {
        document.documentElement.style.backgroundColor = "#00ffe1";
        document.documentElement.style.color = "#000000"; 
    }

    function cambiarMorado() {
        document.documentElement.style.backgroundColor = "#8600c8"; 
        document.documentElement.style.color = "#ffffff";
    }

    function cambiarClasico() {
        document.documentElement.style.backgroundColor = "#ffffff";
        document.documentElement.style.color = "#000000";
    }

    botonRojo.addEventListener("click", cambiarRojo);
    botonVerde.addEventListener("click", cambiarVerde);
    botonAmarillo.addEventListener("click", cambiarAmarillo);
    botonAzul.addEventListener("click", cambiarAzul);
    botonMorado.addEventListener("click", cambiarMorado);
    botonClasico.addEventListener("click", cambiarClasico);


});
  











    
    
  