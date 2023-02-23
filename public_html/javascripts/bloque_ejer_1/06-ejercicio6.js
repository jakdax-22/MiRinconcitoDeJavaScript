'use strict';

/*
 * Que nos diga si un número es par o impar
 */

var numero = parseInt(prompt("Dime el número"));

while (isNaN(numero)){
    alert("Por favor introduce un número");
    numero = parseInt(prompt("Dime el número"));
}

if (numero % 2 === 0){
    console.log ("El número es par");
}
else 
    console.log ("El número es impar");