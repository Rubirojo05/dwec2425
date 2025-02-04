const paises = ['Francia', 'España', 'Australia', 'Italia'];


function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais)
        console.log(`agregado: ${pais}`)
        callback()
    }, 2000);
}

function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises);
        setTimeout(() => {
            nuevoPais('Francia', mostrarPaises);
            setTimeout(() => {
                nuevoPais('Inglaterra', mostrarPaises);
            }, 3000);
        }, 3000);
    }, 3000);
}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais)
        })
    }, 2000);
}

mostrarPaises();
nuevoPais('Alemania', mostrarPaises);