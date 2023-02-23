'use strict';

//Document Object Model
function cambiacolor(color){
    caja.style.color = color;
}

//Conseguir elementos con un id concreto
//var caja = document.getElementById("micaja");
var caja = document.querySelector ("#micaja");
caja.innerHTML = "Viva el betis cabrones";
caja.style.background = "red";
caja.style.padding = "40px";
caja.style.color = "lightblue";
caja.class = "Hola";
caja.className = "hola";
caja.className = "hola2";

//conseguir elementos por su etiqueta
var todoslosDivs = document.getElementsByTagName('div');
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
console.log(todoslosDivs);
var contenidoEnTexto = todoslosDivs [2].textContent;
console.log (contenidoEnTexto);
var div2 = todoslosDivs[2];
todoslosDivs[2].innerHTML = "Viva el betis";
console.log(todoslosDivs[2].textContent);

//todoslosDivs.forEach((valor, indice)=> { Foreach no se puede usar para HTML Collection
for (var valor in todoslosDivs){
       console.log (valor);
       if (typeof(todoslosDivs[valor].textContent) === 'string'){
       var parrafo =  document.createElement("p");
       var texto = document.createTextNode(todoslosDivs[valor].textContent);
       parrafo.appendChild(texto);
       document.querySelector("#miseccion").appendChild(parrafo);
       }
        //});
   }
seccion.append(hr);

//Conseguir elementos por su clase css
console.log(caja);

var divsrojos = document.getElementsByClassName("rojo");
var divsamarillo = document.getElementsByClassName("amarillo");

divsamarillo[0].style.background="yellow";


for (var div in divsrojos){
    console.log(divsrojos[div]);
    if (divsrojos[div].className === "rojo")
    divsrojos[div].style.background="red";
}
console.log (divsrojos);
console.log (divsamarillo);

//Haciendo lo mismo pero con query selector
var id = document.querySelector("#encabezado");
console.log(id);

var clase = document.querySelector(".rojo");
console.log(clase);

var etiqueta = document.querySelector("div");
console.log(etiqueta);

