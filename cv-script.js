/* 
referencias: https://www.neoguias.com/mostrar-ocultar-elementos-html/
             https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch 
*/
function atrapado(n) {
    switch (n) {
        case 0:
            noveonada()
            document.getElementById("presentacion").style.display = "block";
            break;
        case 1:
            noveonada()
            document.getElementById("estudios").style.display = "block";
            break;
        case 2:
            noveonada()
            document.getElementById("cursos").style.display = "block";
            break;
        case 3:
            noveonada()
            document.getElementById("intereses").style.display = "block";
            break;  
        case 4:
            noveonada()
            document.getElementById("actividades").style.display = "block";
            break;
      }
}
function noveonada() {
    document.getElementById("presentacion").style.display = "none";
    document.getElementById("estudios").style.display = "none";
    document.getElementById("cursos").style.display = "none";
    document.getElementById("intereses").style.display = "none";
    document.getElementById("actividades").style.display = "none";
}    