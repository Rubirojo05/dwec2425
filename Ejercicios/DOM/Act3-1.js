//ACT 2.2

//Elemento con id "input2"
let contenidoInput2 = document.getElementById("input2");
console.log(contenidoInput2);

//La colección de párrafos
let parrafos = document.getElementsByTagName("p");
console.log(parrafos);

//Lo mismo pero sólo de los párrafos que hay dentro del div "lipsum"
let parrafosLipsum = document.getElementById("div#lipsum").getElementsByTagName("p");
console.log(parrafosLipsum);

//El formulario (ojo, no la colección con el formulario sino sólo el formulario)
let formulario = document.getElementsByTagName("form")[0];
console.log(formulario);

//Todos los inputs
let inputs = document.getElementsByTagName("input");
console.log(inputs);

//Sólo inputs con nombre 'sexo'
let inputsSexo = document.getElementsByName("sexo");
console.log(inputsSexo);

//Los items de lista de la clase 'important' (Sólo los LI)

