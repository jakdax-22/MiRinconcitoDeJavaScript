'use strict';

var categorias = ["Acción", "Terror","Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

var cine = [categorias, peliculas];

//console.log (cine[0][1]);
//console.log (cine [1][2]);

peliculas.push("Batman");
console.log (cine[1]);

var elemento = prompt ("Introduce tu película");
do{
    if (elemento === "Acabar")
        break;
    peliculas.push(elemento);
    elemento = prompt ("Introduce una película");
}
while (elemento !== "Acabar")
//Eliminar último elemento de un array
//peliculas.pop();
console.log (peliculas);

//Eliminar elemento del array
var indice = peliculas.indexOf("Gran torino");
if (indice > -1){
    peliculas.splice(indice,1);
}
console.log (peliculas);

// Join para convertir array a texto
var peliculasstring = peliculas.join();

console.log (peliculasstring);

//Convertir string a array
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log (cadena_array);

//Ordenar un array
console.log (peliculas.sort());
console.log (peliculas.reverse());

//For in

for (let pelicula in peliculas){
    document.write (peliculas[pelicula]+ "<br>");
}

//Busquedas
var busqueda = peliculas.find (pelicula => pelicula === "Batman");

console.log (busqueda);

busqueda = peliculas.findIndex (pelicula => pelicula === "Batman");
console.log (busqueda);

var numeros = [10,20,50,80,12];

//Comprobar que haya un número mayor que una cifra en un array de números
busqueda = numeros.some (numero => numero >=20);
console.log (busqueda);
