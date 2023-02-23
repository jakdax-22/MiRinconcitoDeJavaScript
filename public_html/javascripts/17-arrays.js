'use strict';

//Arrays, matrices o como lo quieras llamar

var nombre = "pepito";
var nombres = ["Kike Iranzo","Pepe Pepez",89,false];

// Otra manera de definirlo
var lenguajes = new Array ("php", "js","go","java","c#", "C", "Pascal");

console.log (nombres, lenguajes);

console.log (nombres[2]);
console.log (nombres[0]);

//Arrays avanzados
console.log(nombres.length);

//Buscar un elemento específico (empezando por 0)
var elemento = Number(prompt ("Que elemento del array quieres?"));
//alert (nombres[elemento]);

//Corrigiendo que devuelva error

if (elemento >=nombres.length)
    alert("Introduce el número correcto menor que "+nombres.length);
else
    alert (nombres[elemento]);

//Recorrer array completo mostrando el resultado por pantalla

document.write ("<h1>Lenguajes de programación</h1>");
/*
for (var i = 0; i < lenguajes.length;i++){
    document.write(lenguajes[i]+"<br>");
}
*/
lenguajes.forEach ((elemento, indice,arr) =>{
    console.log (arr);
    document.write (indice+ " " +elemento+"<br>");
});

