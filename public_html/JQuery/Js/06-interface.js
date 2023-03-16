'use strict';
$(document).ready(function(){
    //Mover elemento
   $(".elemento").draggable();
   
   //Redimensionar
   $('.elemento').resizable();
   
   //Seleccionar Elementos
   //$('.lista_seleccionable').selectable();
   
   //Ordenar elementos
   $('.lista_seleccionable').sortable({
       update: function (event,ui){
           console.log("Ha cambiado la lista");
       }
   });
   
   //Drop
   $('#elemento-movido').draggable();
   $('#area').droppable({
       drop: function(){
           console.log ("Has soltado algo dentro del area");
       }
   });
   
   //Efectos
   $('#mostrar').click(function(){
       $('.caja-efectos').toggle("shake", 4000);
   });
   
   //Tooltip es útil para mostrar algo cuando se pasa por encima de un elemento
   $(document).tooltip();
   
   //Dialog
   $('#lanzar_pop-up').click(function(){
        $('#pop-up').dialog();
   });

    //Datepicker
    $('#calendario').datepicker();
    
    //tabs
    $('#pestanas').tabs();
});


