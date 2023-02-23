'use strict';

//Programa que pida dos números y que diga cual es el mayor, el menor o si son iguales

var numero1 = Number(prompt ("Dime el primer número"));
var numero2 = Number(prompt ("Dime el segundo número"));

while (numero1 <=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)) {
    alert("Formato incorrecto");
    var numero1 = Number(prompt ("Dime el primer número"));
    var numero2 = Number(prompt ("Dime el segundo número"));
}
if (numero1 > numero2){
    console.log ("El número " +numero1+ " es mayor que el número " +numero2);
    console.log (numero1, numero2);
}

else if (numero1 < numero2){
    console.log ("El número " +numero1+ " es menor que el número " +numero2);
    console.log (numero1, numero2);
}
 else if (numero1 === numero2 ){
     console.log ("Ambos números son iguales");
    console.log (numero1, numero2);
}

else
    console.log ("No sé que has hecho macho");

