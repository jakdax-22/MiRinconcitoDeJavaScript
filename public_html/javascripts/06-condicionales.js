'use strict';

//Condicional if
var edad = 80;
var nombre = "Kike Iranzo";

if (edad >= 18){
    console.log (nombre+ " es mayor de edad");
    if (edad === 33){
        console.log ("Todavía eres millenial");
    }
    else if (edad >= 70){
        console.log ("Eres un anciano");
    }
    else 
        console.log ("Ya no eres millenial");
}
else
    console.log (nombre+ " tiene " +edad+ " años, es menor de edad");

//Operadores lógicos
var year = 2023;
if (year !== 2016){
    console.log ("El año no es 2016, realmente es " +year);
}

if (year >= 2000 && year <= 2030){
    console.log ("Estamos en la era actual");
}
else
    console.log ("Estamos en la era postmoderna");

if (year === 2023 || (year === 2023 && year >= 2023 && year ===2033)) {
    console.log ("El año acaba en 3");
}
else
    console.log ("año no registrado");