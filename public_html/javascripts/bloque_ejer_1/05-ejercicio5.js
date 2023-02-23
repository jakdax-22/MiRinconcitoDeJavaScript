'use strict';

/*
 * Muestra todos los números divisores de un número introducido en un prompt
 */

var numero = parseInt(prompt("Dime el número"));

for (var i = 0; i<=numero;i++){
    if (numero % i === 0){
        console.log (i);
    }
}
