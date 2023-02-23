'use strict';
 /*
  * Calculadora
  * Pide dos números por pantalla, si metes mal un número lo vuelve a pedir 
  * En el cuerpo de la página, en una alerta y por la consola el resultado de sumar, restar, multiplicar y dividir
  */

var numero1 = parseInt(prompt("Introduce el primer número"));
var numero2 = parseInt(prompt("Introduce el segundo número"));

while (isNaN(numero1) || isNaN(numero2)){
    alert ("Formato inválido");
    numero1 = parseInt(prompt("Introduce el primer número"));
    numero2 = parseInt(prompt("Introduce el segundo número"));
}

/*console.log (numero1+ " + " +numero2+ " = " +(numero1 + numero2));
console.log (numero1+ " - " +numero2+ " = " +(numero1 - numero2));
console.log (numero1+ " * " +numero2+ " = " +(numero1 * numero2));
console.log (numero1+ " / " +numero2+ " = " +(numero1 / numero2));

alert (numero1+ " + " +numero2+ " = " +(numero1 + numero2));
alert (numero1+ " - " +numero2+ " = " +(numero1 - numero2));
alert(numero1+ " * " +numero2+ " = " +(numero1 * numero2));
alert (numero1+ " / " +numero2+ " = " +(numero1 / numero2));

document.write ("<body>" +numero1+ " + " +numero2+ " = " +(numero1 + numero2)+ "<br>");
document.write (numero1+ " - " +numero2+ " = " +(numero1 - numero2)+ "<br>");
document.write (numero1+ " * " +numero2+ " = " +(numero1 * numero2)+ "<br>");
document.write (numero1+ " / " +numero2+ " = " +(numero1 / numero2)+ "</body>");
*/
//Otra manera de hacerlo
var resultadoconsola = "La suma es : " +(numero1 + numero2)+ "\n"+
                                          "La resta es: " + (numero1 - numero2)+ "\n"+
                                          "La multiplicación es: " + (numero1 * numero2)+ "\n"+
                                          "La division es: " + (numero1 / numero2)+ "\n";
                                  
var resultadomostrar = "<body>La suma es : " +(numero1 + numero2)+ "<br>"+
                                          "La resta es: " + (numero1 - numero2)+ "<br>"+
                                          "La multiplicación es: " + (numero1 * numero2)+ "<br>"+
                                          "La division es: " + (numero1 / numero2)+ "</body>";
                                  
var resultadoalert = "La suma es : " +(numero1 + numero2)+ "\n"+
                                          "La resta es: " + (numero1 - numero2)+ "\n"+
                                          "La multiplicación es: " + (numero1 * numero2)+ "\n"+
                                          "La division es: " + (numero1 / numero2)+ "\n";

alert (resultadoalert);
console.log(resultadoconsola);
document.write(resultadomostrar);