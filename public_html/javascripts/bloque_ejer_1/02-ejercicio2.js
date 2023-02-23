'use strict';

/*
 * Utilizando un bucle, mostrar la suma y la media de los números introducidos hasta introducir un número negativo y ahí mostrar el resultado
 */

var suma = 0;
var media = 0;
var i = 0;
var numero = 1;
while (numero >0){
   var numero =  parseInt(prompt ('Dime un número mayor que 0 (0 o menor para parar el bucle)', 0));
   if (isNaN(numero)){
    alert("Formato no válido");
    break;
   }
   else if (numero <=0)
       break;
   else{
    suma +=numero;
    i++;
   }
}
media = suma / i;
alert ("La media de los números introducidos es: " +media);
alert ("La suma de los números introducidos es: " +suma);