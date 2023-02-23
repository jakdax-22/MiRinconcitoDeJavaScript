'use strict';


    var formulario = document.querySelector("#formulario");
    formulario.addEventListener('submit', () =>{
        var pelicula = formulario.querySelector("#addpelicula").value;
        if (pelicula.trim().length > 0){
            localStorage.setItem(pelicula, pelicula);         
        }            
    });
      var insertar = document.querySelector("#lista");
      for (var i in localStorage){
          if (typeof(localStorage[i]) === 'string'){
              var li = document.createElement("li");
              li.append(localStorage[i]);
              insertar.append(li);
          }
      }
     var peliculab = document.querySelector("#formularioBorrado");
     peliculab.addEventListener('submit',() => {
         var borrar = peliculab.querySelector("#borrapelicula").value;
         if (borrar.trim().length > 0){
             localStorage.removeItem(borrar);
            }         
     });


