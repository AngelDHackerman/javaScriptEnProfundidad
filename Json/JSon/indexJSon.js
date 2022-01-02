'use strict'
window.addEventListener('load', () => { 

        //JSON - JavaScript Object Notation

let pelicula = { 
  title: 'Batman vs Superman',
  year: 2017,
  country: 'Estados'
}

pelicula.title = 'Superman Begins',

console.log(pelicula.title);

let peliculas = [
  { title: 'La verdad duele', year: 2016, country: 'Francia'},
  pelicula,
];

console.log(peliculas);

let cajaPeliculas = document.querySelector('#peliculas');
for (let index in peliculas) { 
  let p = document.createElement('p');
  p.append(peliculas[index].title, ` `, peliculas[index].year );
  cajaPeliculas.append(p);
}





});