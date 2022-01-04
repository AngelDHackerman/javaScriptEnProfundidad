'use strict'
window.addEventListener('load', () => {

// Fetch (ajax) y peticiones a servicios / API's rest

let divUsuarios = document.querySelector('#usuarios');
let divJanet = document.querySelector('#profesor');
let divProfesor = document.querySelector('#janet');


const getUsuarios = () => { 
  return fetch ('https://reqres.in/api/users');
} 

const getJanet = () => { 
  return fetch ('https://reqres.in/api/users/2');
}

const getInfo = () => { 
  let profesor = {
    nombre: 'Victor',
    apellidos: 'Robles',
    url: 'https://victorroblesweb.es',
  };
  return new Promise ((resolve, reject) => { 
    let profersorString = '';
    
    setTimeout(() => {
      profersorString = JSON.stringify(profesor); //Asi convertimos el objeto a un string de JSON

      if (typeof profersorString != 'string' || profersorString == '') return reject('error 1 !!!');
        return resolve(profersorString);
    }, 3000);

  })
};



getUsuarios()
  .then(data => data.json())
  .then(users => { 
    listadoUsuraios(users.data);

    return getInfo();
  })
  .then(data => {
    divProfesor.innerHTML = data;
    return getJanet();
  })
  .then(data => data.json())
  .then(user => { 
    mostrarJanet(user.data)

  })
  .catch(error => {
    console.error(error, `Este es el error`); 
    alert('Error con las peticiones')
  })


/*   function getUsuarios () { //Esta funciona igual que la arrow funtion y no le afecta el hoisting 
    return fetch ('https://reqres.in/api/users');
  } */
  
  const listadoUsuraios = (usuarios) => { 
    usuarios.map((user, index) => { 
      let nombre = document.createElement('h3');

      nombre.innerHTML = `${index}. ${user.first_name} ${user.last_name}`;

      divUsuarios.appendChild(nombre);

      document.querySelector('#usuarios .loading').style.display = 'none';
    })
  }
  const mostrarJanet = (user) => { 
      let nombre = document.createElement('h3');
      let avatar = document.createElement('img');

      nombre.innerHTML = `${user.id}. ${user.first_name} ${user.last_name}`;
      avatar.src = user.avatar;
      avatar.width = '150'; //150 px
      avatar.height = '150'; //150 px

      divJanet.appendChild(nombre);
      divJanet.appendChild(avatar);

  };










});
  
  
  
  
  


