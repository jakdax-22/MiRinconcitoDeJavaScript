'use strict';
/*
 * Tabla de multiplicar de un número introducido por pantalla
 */

var numero = parseInt(prompt("Dime el número"));

while (isNaN(numero)){
    alert ("Por favor, introduce un formato válido");
    numero = parseInt(prompt("Dime el número"));    
}

document.write ("<h1> Tabla del " +numero+ "</h1/>");
for (var i = 0; i <=10; i++){
   document.write (numero+ " X " +i+ " = " +(numero * i)+ "<br>");
}

var number = 10;

for (var i = 1; i <=10 ; i++){
    document.write("<h1>Tabla del " +i+ "</h1>");
    for (var j = 0; j <=10; j++){
        document.write (i+ " X " +j+ " = " +(j*i)+ "<br>");
    }
}
