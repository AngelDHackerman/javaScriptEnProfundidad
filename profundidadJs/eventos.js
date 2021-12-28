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
let input = document.querySelector('#campoNombre');

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
});

          //Focus

input.addEventListener('focus', () => { 
  console.log('Event focus, Estas dentro del input');
});

          //Blur, es lo mismo que Focus pero este se activa cuando salimos del foco

input.addEventListener('blur', () => { 
  console.log('Event Blur, Estas fuera del input');
});

          //Keydown

input.addEventListener('keydown', (event) => { 
  console.log('Event Keydown, Estas pulsando esta tecla:', String.fromCharCode(event.keyCode));// asi sacamos que teclas se estan precionando
});

          //Keypress

input.addEventListener('keypress', (event) => { 
  console.log('Event Keypress, Estas pulsando esta tecla:', String.fromCharCode(event.keyCode));// asi sacamos que teclas se estan precionando
});

          //Keyup

input.addEventListener('keyup', (event) => { 
  console.log('Event Keyup, Tecla soltada:', String.fromCharCode(event.keyCode));// asi sacamos que teclas se estan precionando
});
