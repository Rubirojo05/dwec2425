
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
        })
        .catch(error => {
            console.error('Error:', error);
        });
}