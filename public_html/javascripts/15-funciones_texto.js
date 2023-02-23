'use strict';

// Transformación de textos

var numero = 444;
var texto1 = "           Bienvenido al curso de Javascript curso de Enrique Iranzo           ";
var texto2 = "Es muy buen curso, la verdad, todo sea dicho";

var dato = numero.toString();
dato = texto1.toUpperCase();
dato = texto2.toLowerCase();

console.log (dato);

//Calcular longitud de un texto
var nombre = "kike";
nombre = ["hola" , "pepe"];
console.log (nombre.length);

//Concatenar

var textototal = texto1+" "+texto2;
var textototal2 = texto1+ " ".concat(texto2);

console.log (textototal);
console.log (textototal2);

var busqueda = texto1.indexOf("curso");

if (busqueda !== -1){
    console.log ("Encontrado");
}
else
    console.log ("No encontrado");

//Otra manera sería search
busqueda = texto1.search("curso");

//Método match
busqueda = texto1.match(/curso/g);
console.log (busqueda);

//Método substr
busqueda = texto1.substr(14,5);
console.log (busqueda);

//CharAt
busqueda = texto1.charAt(20);
console.log (busqueda);

//startsWith
busqueda = texto1.startsWith("curs");
console.log (busqueda);

//Includes
busqueda = texto1.includes("curso");
console.log (busqueda);


//Cambio de texto
//Replace, si no se especifica solo reemplaza la primera coincidencia, para que reemplace todas / /g
busqueda = texto1.replace(/curso/g, "pepe");
console.log (busqueda);

//Slice
busqueda = texto1.slice(14,22);
console.log (busqueda);

//Split
busqueda = texto1.split(" ");
console.log (busqueda);

//Trim
busqueda = texto1.trim();
console.log (busqueda);






