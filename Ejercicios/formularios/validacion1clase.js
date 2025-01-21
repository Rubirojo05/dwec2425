
//Funcion para validar el formulario

window.onload = inicio;
function inicio() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}

//Como seleccionar dentro del formulario

var formulario1 = document.getElementById("miFormulario");

function validarNombre() {
    var elemento = document.getElementById("nombre");
    limpiarError(elemento);
    if (elemento.value == "") {
        alert("El campo nombre no puede estar vacio");
        error(elemento);
        return false;
    }
    return true;
}

function validarTelefono() {
    var elemento = document.getElementById("telefono");
    limpiarError(elemento);
    if (isNaN(elemento.value) || elemento.value == "") {
        alert("El campo telefono debe ser numerico");
        error(elemento);
        return false;
    }
    return true;
}

function validarFecha() {
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var anio = document.getElementById("anio").value;

    var fecha = new Date(anio, mes - 1, dia);
    if (isNaN(fecha) || fecha.value == "") {
        alert("La fecha introducida no es valida");
        return false;
    }
    return true;
}

function validarCheck() {
    var campoCheck = document.getElementById("mayor");
    if (!campoCheck.checked) {
        alert("Debes ser mayor de edad");
        return false;
    } else if (campoCheck.value == "") {
        alert("Debes rellenar el checkbox");
        return false;
    } return true;
}

function validar(e) {
    if (validarNombre() && validarTelefono() && validarFecha() && validarCheck() && confirm("¿Esta seguro de que quiere enviar?")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}

function limpiarError(elemento) {
    elemento.className = "";
}

