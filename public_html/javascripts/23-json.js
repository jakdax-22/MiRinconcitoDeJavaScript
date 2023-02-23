'use strict';

//JSON Javascript Object Notation

window.addEventListener('load', () => {
    var pelicula = {
       titulo: "Batman vs Superman",
       year: 2017,
       pais: "Estados Unidos"
   };

   var peliculas = [
       {titulo: "La verdad duele", year: 2016,  pais:"Francia"},
       pelicula
   ];

   var divpeliculas = document.querySelector("#peliculas");
   for (var index in peliculas){
       var p = document.createElement("p");
       p.append(peliculas[index].titulo +"-"+peliculas[index].year+"-"+peliculas[index].pais);
       divpeliculas.append(p);
   }
   
});





