'use strict'

// DOM - Document Object Model 

const cambiaColor = (color) => {
  caja.style.background = color;
}

      //Conseguir elementos con un ID concreto

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

console.group(`Identificados por las clases`);
  console.log(caja);
  console.log(caja1);
console.groupEnd();

      //Conseguir elementos por su  ETIQUETA 

console.group(`Identificados por etiquetas`);

let todosLosDivs = document.querySelectorAll('div');
let seccion = document.querySelector('#miSeccion');
let hr = document.createElement('hr');
seccion.prepend(hr); //con prepend agregamos antes y con append agregamos despues;


  console.log(todosLosDivs, 'usando document.querySelectorAll');

 let entrandoAlDiv2 =  todosLosDivs[2]; //Entramos al array en el indice 2 y sacamos el texto que contiene;
 entrandoAlDiv2.innerHTML;
  console.log('Entramos al div 2:',entrandoAlDiv2 );
entrandoAlDiv2.style.background = 'blue';

          //crear etiquetas en HTML y manipulando su contenido;

let valor;

for (valor in todosLosDivs) { 
  if ( typeof todosLosDivs[valor].textContent == 'string' ) {
    let parrafo = document.createElement('p');
    let texto = document.createTextNode(todosLosDivs[valor].textContent);//textContent extrae el string que contiene el elemento
    parrafo.append(texto);
    document.querySelector('#miSeccion').append(parrafo);
  };
};

console.groupEnd();

      //Conseguir elementos por CLASE


