'use strict';
//Tipo de datos concreto
type alfanumerico = string | number;


// string
//let cadena: string | number = "ENRIQUEIRANZO";
let cadena: alfanumerico = "ENRIQUEIRANZO";
cadena = 12;

//number
let edad: number = 12;

//booleano

let verdadero:boolean = true;

//Any

let cualquiera:any = "Hola";

cualquiera = 22;

//Arrays

var lenguajes: Array <String> = ["PHP","JS","CSS","TS"]

let years: number [] = [22,33,4,6,8];

//Let vs Var

var numero1 = 10;
var numero2 = 12;

if (numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;

    console.log (numero1,numero2);
}

console.log (numero1,numero2);

//Mostrar

console.log (cadena,edad,verdadero,cualquiera,lenguajes,years);