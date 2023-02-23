'use strict';

//Operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 %  numero2;
alert ("El resultado de la operación es: " +operacion);

//Tipos de datos
var numero_entero = 44;
var cadena_texto = "Hola";
var verdadero_o_falso = true;
var numero_falso = "33";

//Number

numero_falso=Number(numero_falso);

console.log (parseInt(numero_falso) + 8 );

//String
console.log (String(numero_entero) + 5)

//Typeof
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);
console.log(typeof numero_falso);
