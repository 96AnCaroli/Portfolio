let menuVisible = false;

//Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if(menuVisible) {
        document.getElementById("nav").classList ="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

//ocultar el menu una vez seleccionada una opción
function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
