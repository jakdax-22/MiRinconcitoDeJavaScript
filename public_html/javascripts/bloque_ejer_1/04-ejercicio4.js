'use strict';

/*
 * Mostrar todos los números impares que hay entre dos números introducidos por el usuario
 */
var numero1 = parseInt(prompt("Dime el primer número"));
var numero2 = parseInt(prompt("Dime el segundo número"));

if (numero1 > numero2){
    for (var i = numero2;  i < numero1; i++){
        if (i % 2 !== 0){
            console.log (i);
        }
    }
}
else if (numero1 < numero2) {
    for (var i = numero1; i < numero2; i++){
        if (i % 2 !==0){
            console.log (i);
        }
    }
}
else if (numero1 === numero2)
    alert ("Ambos números son iguales");

else
    alert ("Formato incorrecto");