'use strict';

//Bucle while

var year = 2023;

while ( year !== 1991){
    console.log( "Estamos en el año "+year );
    year--;
    
    if (year === 2000) {
        break;
    }
}
        
// Do while

var years = 20;

do {
    alert ("Solo cuando sea diferente a 20");
    years = 20;
}
while (years !==20);


