'use strict';
var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth() + 1;
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();
var textoHora = `
    El año es: ${year}
    El mes es: ${mes}
    El dia es: ${dia}
    La hora es: ${hora}:${minutos}:${segundos}
`;
console.log (fecha);
console.log (textoHora);
console.log(Math.ceil((Math.random()*1000)));

