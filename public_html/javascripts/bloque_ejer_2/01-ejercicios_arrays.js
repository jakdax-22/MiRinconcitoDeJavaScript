'use strict';

/*
 * Pida 6 números por pantalla y los meta en un array
 * Mostrar el array entero en el cuerpo de la página y en la consola
 * Ordenarlo y mostrarlo
 * Invertir su orden y mostrarlo
 * Mostrar cuantos elementos tiene el array
 * Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice
 */
var numeros = [];
var numero = 0;
function mostrarArray(elementos, texto = ""){
    document.write ("<h2>Contenido del array " +texto+ "</h2><ul>");
    elementos.forEach((numero,indice) =>{
         document.write("<li>"+indice+ "--> " +numero+ "</li>");
         console.log(indice+ "--> " +numero);

    });
    document.write("</ul>");
}
for (var i = 0; i < 6; i++){
    numero = prompt ("Dime un número (Solo números)");
    while (isNaN (numero)){
        alert ("Eso no es un número paleto");
        numero = prompt ("Dime un número (Solo números");
    }
    numeros.push(parseInt(numero));
}


mostrarArray(numeros);
document.write ("<br>");

//Ordenar y mostrar
numeros.sort(function (a, b){
    return a-b});
mostrarArray (numeros,"ordenado");

//Revertir y mostrar
numeros.sort(function (a, b){
    return b-a});
mostrarArray (numeros,"ordenado descendente");

console.log ("El array tiene "+numeros.length+ " elementos");

var busqueda = Number(prompt("Dime el elemento a buscar"));
var busquedaelemento = numeros.find (elemento => elemento === busqueda);
var busquedaindice = numeros.findIndex (indice => indice === busqueda);
if (busquedaelemento !== -1 && busquedaindice !==-1)
    console.log ("El elemento que has buscado es: " +busquedaelemento+ " encontrado en la posicion " +busquedaindice);
else
    console.log ("No se ha podido encontrar el elemento buscado, lo siento");