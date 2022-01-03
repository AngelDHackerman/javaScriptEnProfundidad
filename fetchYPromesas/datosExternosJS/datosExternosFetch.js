'use strict'
window.addEventListener('load', () => { 

// Fetch (ajax) y peticiones a servicios / API's rest

let divUsuarios = document.querySelector('#usuarios');

let usuarios = [];

fetch('https://reqres.in/api/users')
  .then(data => data.json())
  .then(users => { 
    usuarios = users.data;
    console.log(usuarios);

    /* usuarios.map((user, indice) => { 
      let nombre = document.createElement('h2');

      nombre.innerHTML = indice + user.first_name;

      divUsuarios.appendChild(nombre);
    }) */

    usuarios.forEach(element => {
      let nombre = document.createElement('h3');
      nombre.innerHTML = `${element.first_name} ${element.last_name}`;
      
      //console.log(`${element.first_name} ${element.last_name}`);
      divUsuarios.appendChild(nombre);

      document.querySelector('.loading').style.display = 'none';
    });
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  });


