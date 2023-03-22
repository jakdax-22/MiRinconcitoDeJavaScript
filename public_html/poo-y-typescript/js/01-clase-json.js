'use strict';

var bicicleta = {
   color: 'Rojo',
   modelo: 'BMX',
   frenos: 'Disco',
   velocidadmaxima: '60 km',
   
   cambiaColor: function (nuevo_color) {
       this.color = nuevo_color;
   },
};
console.log (bicicleta);

bicicleta.cambiaColor('pepe');

console.log (bicicleta);


