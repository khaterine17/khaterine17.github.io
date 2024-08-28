//creo una funcion que se ejecutara cuando hago click en el boton
function muestra_oculta(id) {
    //declaro la funcion y paso por parametro el selector de referencia que quiero ocultar/mostrar
    let div = document.getElementById(id);
    //uso el condicional IF para saber si el DIV esta oculto (Display: none) o si esta visible 
    if (div.style.display == "none"){ 
      div.style.display = "flex";
    } 
    else {
      div.style.display = "none";
    }
}
