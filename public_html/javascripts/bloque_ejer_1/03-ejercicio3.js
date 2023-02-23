'use strict';

/*
 * Hacer un programa que muestre todos los números entre 2 números introducidos por el usuario
 */
var numero1=0;
var numero2=0;
var i = 0;
numero1 = parseInt(prompt("Dime el primer número"));
numero2 = parseInt(prompt("Dime el segundo número"));

if (numero1 < numero2){
    for ( i = numero1; i < numero2; i++){
       if (i === numero2 -1){
           console.log (i);
       }
        else
        console.log (i+ ", ");       
    }
}
else {
    for (i = numero2; i < numero1; i++){
       if (i === numero1 -1){
           console.log (i);
       }
        else
        console.log (i+ ", ");    
        }
}
