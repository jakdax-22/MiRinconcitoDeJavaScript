'use strict';

//Funciones
// Una función es una agrupación reutilizable de un conjunto de instrucciones
function porConsola (numero1, numero2){
    console.log("Suma: " +(numero1 + numero2));
console.log("Resta: " +(numero1 - numero2));
console.log("Multi: " +(numero1 * numero2));
console.log("División: " +(numero1 / numero2));
console.log ("Sí, soy yo");
console.log ("************************");    
}
function porPantalla (numero1, numero2){
    document.write("Suma: " +(numero1 + numero2)+ "<br>");
    document.write("Resta: " +(numero1 - numero2)+"<br>");
    document.write("Multi: " +(numero1 * numero2)+"<br>");
    document.write("División: " +(numero1 / numero2)+"<br>");
    document.write ("Sí, soy yo <br>");
    document.write("************************");       
}
function calculadora (numero1, numero2, mostrar = false) {
    if (mostrar === false){    
        porConsola (numero1,numero2);
    }
    else {
        porPantalla (numero1, numero2);
    }
}

calculadora(4,2,true);
//calculadora (8,4);

/*for (var i = 1; i <= 10; i++){
    calculadora (3,i);
}
*/
