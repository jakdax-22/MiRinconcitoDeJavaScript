'use strict';
// Pruebas let y var

//Prueba con var
alert ("hola");
var numero = 40;
console.log(numero);//Valor 40

if (true){
    var numero = 50; //Valor 50
    console.log(numero);
}

console.log(numero);//Valor 50

//Prueba con let
let texto = "Curso de JS";
console.log(texto); //El valor es e l mismo

if (true){
    let texto = "Erpepe"; //El valor va a seguir siendo el mismo
    console.log (texto);
}

console.log (texto); //El valor volverá a ser el primero definido, no hace caso al if