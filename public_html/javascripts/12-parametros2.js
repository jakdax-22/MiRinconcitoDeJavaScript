'use strict';

//Parametros REST y SPREAD

function listadoFrutas (fruta1, fruta2, ...todas_las_frutas){
    console.log("Fruta 1: ", fruta1);
    console.log ("Fruta2: ", fruta2);
    console.log (todas_las_frutas);
}
listadoFrutas ("Naranja", "Manzana", "Sandía", "Pera", "Melón", "Coco");

var frutas = ["Naranja", "Manzana"];
listadoFrutas (...frutas, "Sandía", "Pera", "Melón", "Coco");




