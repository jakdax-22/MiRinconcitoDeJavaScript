'use strict';

var texto = "Hola Mundo, soy una variable global";
var numero = 12;

function holaMundo (texto){
    var hola_mundo = "Texto dentro de función";
    console.log (texto.toString());
    console.log (typeof(numero));
}

holaMundo (texto);


