'use strict'

// DOM - Document Object Model 

const cambiaColor = (color) => {
  caja.style.background = color;
}


let caja = document.querySelector('#miCaja');
let caja1 = document.querySelector('#miCaja').innerHTML; //Devuelve el texto que esta dentro del HTML
caja.innerHTML = 'TEXTO EN LA CAJA DE JS!!!';

        //Cambiamos los estilos del HTML 

caja.style.background = 'red';
caja.style.padding = '20px';
caja.style.color = 'white';
cambiaColor('green');

        //Modificar las clases y ID

caja.className = 'hola hola2';


console.log(caja);
console.log(caja1);
