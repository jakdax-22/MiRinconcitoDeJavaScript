'use strict';

//Localstorage

//Comprobar disponibilidad del localstorage
if (typeof("Storage") !== "undefined")
    console.log("Localstorage disponible");
else 
    console.log("Localstorage no disponible");

//Guardar datos en el localstorage
localStorage.setItem("Kike","Iranzo");

//Recuperara elemento
var almacenado = localStorage.getItem("Kike");
console.log (almacenado);

//Guardar objetos
var json = {
    nombre: "Enrique",
    apellidos : "Iranzo Martínez",
    edad : 56
};
localStorage.setItem("objeto",JSON.stringify(json));


var userjs = JSON.parse(localStorage.getItem("objeto"));
console.log (userjs);

//Borrar elementos
localStorage.removeItem("Kike");
//localStorage.removeItem("Kike");