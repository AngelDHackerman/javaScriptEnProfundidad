'use strict'

//BOM - Browser Object Model 

      //Alto y Ancho de la VENTANA

const getBom = () => { 
  console.log( `alto de la ventana`, window.innerHeight ); // vemos el ALTO DE LA VENTANA
  console.log( `ancho de la ventana`, window.innerWidth); // vemos el ANCHO de la ventana
};
getBom();

      //Alto y Ancho de la PANTALLA

console.log( `alto de la pantalla`, screen.height);
console.log( `ancho de la pantalla`, screen.width);

      //Ver la URL actual 

console.log( `ver la URL actual`, window.location.href);

const redirect = (url) => {
  window.location.href = url;
};
/* redirect("https://google.com") */

      //Abrir una nueva ventana

const abrirVentana = (url) => { 
  window.open(url, '', 'width=600,height=600');//primer parametro la URL, segundo parametro nada, tercer parametro ancho y alto de la nueva ventana;
}
/* abrirVentana("https://github.com/angeldariaux") */