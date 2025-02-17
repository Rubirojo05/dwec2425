
window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("cursoAcademico").addEventListener("change", añadirSelect);
    document.getElementById("mensaje").addEventListener("click", caracteres);
    document.getElementById("todos").addEventListener("click", seleccionarTodos);
    document.getElementById("ninguno").addEventListener("click", quitarTodos);
    document.getElementById("formulario").addEventListener("change", validarDias);
    document.getElementById("nif").addEventListener("input", validarNIF);
    document.getElementById("formulario").addEventListener("submit", validarFormulario);
}

function añadirSelect(e) {
    if (e.target.value === "añadir") {
        var opcion = document.createElement("option");
        var texto = prompt("Añade un curso académico:");
        opcion.textContent = texto;
        var cont = document.getElementById("cursoAcademico");
        cont.insertBefore(opcion, document.getElementById("añadir"));
        opcion.value = "";
    }
}

function caracteres() {
    var mensaje = document.getElementById("mensaje");

    mensaje.addEventListener("input", function () {
        var caracteresRestantes = 500 - mensaje.value.split('').filter(char => char !== '\n' && char !== '\r').length;
        contador.innerHTML = "Carácteres restantes: " + caracteresRestantes;

        if (caracteresRestantes < 498 && caracteresRestantes > 0) {
            contador.style.color = "green";
        }
        else if (caracteresRestantes < 0) {
            contador.style.color = "red";
        }
        else if (caracteresRestantes >= 498) {
            contador.style.color = "red";
            contador.innerHTML = "El mensaje tiene que tener al menos más de dos carácteres";
        }
    });
}

function seleccionarTodos() {
    for (let i = 0; i < document.getElementsByName("dias").length; i++) {
        if (document.getElementsByName("dias")[i].type === "checkbox" && document.getElementsByName("dias")[i].id !== "ninguno") {
            document.getElementsByName("dias")[i].checked = true;
        }
    }
}

function quitarTodos() {
    for (let i = 0; i < document.getElementsByName("dias").length; i++) {
        if (document.getElementsByName("dias")[i].type === "checkbox") {
            document.getElementsByName("dias")[i].checked = false;
        }
    }
}

function validarDias(e) {
    if (e.target.name === "dias") {
        let seleccionados = 0;
        const dias = document.getElementsByName("dias");

        for (let i = 0; i < dias.length; i++) {
            if (dias[i].checked) {
                seleccionados++;
            }
        }

        if (seleccionados >= 2) {
            document.getElementById("mensajeDias").innerHTML = "";
            return true;
        } else {
            document.getElementById("mensajeDias").innerHTML = "Al menos tienes que seleccionar dos días";
            document.getElementById("mensajeDias").style.color = "red";
            return false;
        }
    }
}

function validarNIF() {
    const nif = document.getElementById("nif").value.toUpperCase();
    const esNumeroValido = nif.slice(0, 8).split('').every(char => !isNaN(char));
    const esLetraValida = nif.charAt(8) >= 'A' && nif.charAt(8) <= 'Z';

    if (!esNumeroValido || !esLetraValida || nif.length !== 9) {
        document.getElementById("mensajeNIF").innerHTML = "Contiene caracteres no válidos.";
        document.getElementById("mensajeNIF").style.color = "red";
        return false;
    }

    const letraCheck = letra(nif.slice(0, 8));
    const letraNIF = nif.charAt(8);

    if (letraCheck !== letraNIF) {
        document.getElementById("mensajeNIF").innerHTML = "La letra del NIF no es válida.";
        document.getElementById("mensajeNIF").style.color = "red";
        return false;
    }
    document.getElementById("mensajeNIF").innerHTML = "";
    return true;
}

function letra(numero) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
    const resto = numero % 23;
    return letras.charAt(resto);
}

//VALIDACIÓN CHECKVALIDITY
function validarFormulario(event) {
    const formulario = document.getElementById("formulario");
    if (!formulario.checkValidity()) {
        event.preventDefault();
        alert("Por favor, completa todos los campos correctamente.");
    }
}
