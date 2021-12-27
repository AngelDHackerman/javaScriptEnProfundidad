'use strict'

//Eventos, es una funcion que se ejecuta cuando sucede algo.

      //Eventos de raton.

const cambiarColor = () => { 
  console.log('Me has dado click');

  let bg = boton.style.background;
  if (bg == 'green') {
    boton.style.background = 'red';
  } else if (bg == 'green' || bg == 'red') { 
    boton.style.background = 'yellow';
  } else  { 
    boton.style.background = 'green';
  };

  boton.style.padding = '10px';
  boton.style.border = '1px solid #ccc';
};
let boton = document.querySelector('#boton'); 

          //Evento Click
boton.addEventListener('click', (() => { //se usa una funcion de callBack para ejecutar la funcion que necesitamos
  cambiarColor();
}));

          //Evento Mouse over 
boton.addEventListener('mouseover', () => { 
  boton.style.background = '#2ECC71'
});

          //Evento Mouse out

boton.addEventListener('mouseout', () => { 
  boton.style.background = '#30475E';
})