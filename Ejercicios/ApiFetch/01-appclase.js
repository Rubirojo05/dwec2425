
const cargarTxTBtn = document.querySelector('#cargarTxt');
cargarTxTBtn.addEventListener('click', obtenerDatosTxt);

function obtenerDatosTxt() {
    const url = 'datos.txt';
    fetch(url)
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            console.log(datos);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const cargarJsonBtn = document.querySelector('#cargarJSON');
cargarJsonBtn.addEventListener('click', obtenerDatosJson);

function obtenerDatosJson() {
    const url = 'empleado.json';
    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(datos => {
            console.log(datos);
            mostrarHTML(datos);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const cargarJsonArrayBtn = document.querySelector('#cargarJSONarray');
cargarJsonArrayBtn.addEventListener('click', obtenerDatosJsonArray );

function obtenerDatosJsonArray() {
    const url = 'empleados.json';
    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(datos => {
            datos.forEach(empleado => mostrarHTML(empleado));
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function mostrarHTML ({empresa, id, nombre, trabajo}){
    const contenido = document.querySelector('#contenido');
    
    const empleados = `
    <p>Empleado: ${nombre}</p>
    <p>ID: ${id}</p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>
    `;

    contenido.innerHTML += empleados;
}

