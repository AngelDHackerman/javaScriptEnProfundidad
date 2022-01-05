'use strict'
window.addEventListener('load', () => { 

let fecha = new Date(); // con el objeto Date obtenemos la hora y fecha.

let year = fecha.getFullYear(); // Asi obtenemos el año.
let month = fecha.getMonth(); // Asi se obtiene el mes pero la cuenta comienza desde 0.
let day = fecha.getDate(); // Asi se obtiene el dia.
let hora = fecha.getHours(); //Asi se obtiene la hora.
let minutos = fecha.getMinutes(); //Asi se obtiene los minutos
let segundos = fecha.getSeconds();

let textoHora = `
  El año es: ${year}
  El mes es: ${month}  
  El dia es: ${day}
  La hora es: ${hora}:${minutos}:${segundos}
`;

console.log(textoHora);







































})