'use strict'
window.addEventListener('load', () => { 

// LocalStorage

          //Asi verificamos si el localStorage esta disponible
if(typeof(Storage) !== 'undefined') { 
  console.log(`Esto significa que el LocalStorage esta disponible`);
} else { 
  console.log(`Incompatible con el LocalStorage`)
};

          //Guardar datos en el localStorage
          //localStorage.setItem(titulo, valorDelItem)

localStorage.setItem('titulo', 'curso de Synfony de victor Robles');

          //Recuperar elemento

console.log(localStorage.getItem('titulo'));

          //Agregar LocalStorage a la pagina
document.querySelector('#parrafo').innerHTML = localStorage.getItem('titulo'); 




});