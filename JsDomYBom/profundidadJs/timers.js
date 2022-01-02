'use strict'
window.addEventListener('load', () => { 

      //Timers 
let encabezadoH1 = document.querySelector('h1');
let encabezadoH2 = document.querySelector('h2');
let detener = document.querySelector('#detener');
let reiniciar = document.querySelector('#reiniciar');

          //Set Interval 

const intervalo = () => { 
  let tiempoSetInterval = setInterval(() => { //se le pasa el codigo a ejecutar y luego en milisegundos el tiempoSetInterval que se va a ejecutar en intervalos
    console.log('Set interval ejecutado');
  
    if (encabezadoH1.style.fontSize == '50px') {
      encabezadoH1.style.fontSize = '30px';
    } else { 
      encabezadoH1.style.fontSize = '50px';
    }
  }, 500); 

  return tiempoSetInterval; //Esto nos devuelve la variable y luego lo podemos detener y luego reiniciar
};
let tiempo = intervalo();

          // Set Timeout

let tiempoSetTimeout = setTimeout (() => { 
  console.log('Set Timeout ejecutado (Solo se ejecuta 1 vez)');

  encabezadoH2.style.fontSize = '60px';
}, 3000)

          // Reinicia el Set interval 

reiniciar.addEventListener('click', () => { 
  console.log(`Has reiniciado el Set Interval`);
  intervalo();

});

          // Detener el Set Interval

detener.addEventListener('click', () => { 
  clearInterval(tiempo);     //IMPORTANTE pasarle como parametro la variable que tiene el set interval
  console.log(`Se a detenido el Set interval`);
});







});