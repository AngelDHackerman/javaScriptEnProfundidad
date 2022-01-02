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

          //GUARDAR OBJETOS EN EL LOCALSTORAGE

let usuario = { 
  nombre: 'Angel Hernandez',
  email: 'angel@angel.com',
  web: 'angelWeb.com',
};

localStorage.setItem('usuario', JSON.stringify(usuario));//usando JSON.stringify, convertimos el objeto JSon a un string para poder almancenarlo


        //  RECUPERA EL OBJETO DE LOCALSTORAGE

console.group(`Recuperando el objeto del localStora`)

  console.log(typeof(localStorage.getItem('usuario')), localStorage.getItem('usuario'));

let usuarioParse = JSON.parse(localStorage.getItem('usuario'));//con JSON.parse pasamos de un String a un Objeto JSON
  console.log(typeof(usuarioParse), usuarioParse);

document.querySelector('#datos').append(usuarioParse.web);
console.groupEnd();

        //Remover el localStorage

localStorage.removeItem('usuario'); //Lo eliminamos del localStorage
localStorage.clear(); //Eliminamos todo el localStorage










});