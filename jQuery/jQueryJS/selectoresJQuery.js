'use strict'
window.addEventListener('load', () => { 

// $ se refiere el objeto jQuery, es lo mismo que escribir jQuery(document).ready

$(document).ready(() => {   //Asi se comprueba si jQuery esta listo o no.

              //Selector de ID

  $('#rojo').css('background', 'red')
            .css('color', 'white')
            .css('font-size', '25px');

  $('#amarillo').css('background', 'yellow')
                .css('color', 'blue')
                .css('font-size', '35px');

  $('#verde').css('background', 'green')
              .css('color', 'yellow')
              .css('font-size', '30px');


                //Selector de Clase

  let miClase =  $('.zebra').css('padding', '5px');

  let agregarBorde = $('.sinBorde');

  agregarBorde.click(function () { 
    console.log('click dado!!')
    $(this).addClass('zebra');
  })


  console.log(miClase);

                //Selectores de Etiqueta

  let parrafos = $('p');
    if ($(this).hasClass('zebra')) { 
      $(this).removeClass('zebra');
    }
  parrafos.click(function() {
  })


















})
})