window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validarNombre() {
    var elemento = document.getElementById("nombre");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir un nombre");
        }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "El nombre debe tener entre 2 y 15 caracteres");
        }
        return false;
    }
        return true;
    }

function validarEdad() {
    var elemento = document.getElementById("edad");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir una edad");
        }
        if (elemento.validity.rangeUnderflow) {
            error2(elemento, "La edad debe ser mayor de 18 años");
        }
        if (elemento.validity.rangeOverflow) {
            error2(elemento, "La edad debe ser menor de 100 años");
            return false;
        }
        return true;
    }
}

    function validarTelefono() {
        var elemento = document.getElementById("telefono");
        if (!elemento.checkValidity()) {
            if (elemento.validity.valueMissing) {
                error2(elemento, "Debe introducir un telefono");
            }
            if (elemento.validity.patternMismatch) {
                error2(elemento, "El telefono debe tener 9 digitos");
                return false;
            }
        }
        return true;
    }

    function validar(e) {
        borraError();
        if (validarNombre() && validarEdad() && validarTelefono() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        } else {
            e.preventDefault();
            return false;
        }
    }

    function error(elemento) {
        document.getElementById("mensajeError").innerHTML = elemento.validationMessage;
        elemento.className = "error";
        elemento.focus();
    }

    function borraError() {
        var formulario = document.forms[0];
        for (var i = 0; i < formulario.elements.length; i++) {
            formulario.elements[i].className = "";
        }
    }
    function error2(elemento, mensaje) {
        document.getElementById("mensajeError").innerHTML = mensaje;
        elemento.className = "error";
        elemento.focus();
    }