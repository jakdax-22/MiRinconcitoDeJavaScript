'use strict';
$(document).ready(() => {
   
    //MouseOver y MouseOut
    var caja = $('#caja');
    /*
    caja.mouseover(function(){
        $(this).css("background","red");
    });
    caja.mouseout(function (){
        $(this).css("background", "green");
    });
    */
    //Hover hace lo anterior más sencillo y efectivo
    function cambiaRojo (){
        $(this).css("background", "red");
    };
    function cambiaVerde(){
        $(this).css("background","green");
    };
    caja.hover(cambiaRojo,cambiaVerde);
    
    //Eventos click y doble click
    caja.click(function(){
        $(this).css("background", "blue")
                  .css("color","white");
    });
    
    caja.dblclick(function(){
        $(this).css("background","pink")
                  .css("color","yellow");
    });
    
    //Eventos Focus y Blur
    var nombre = $('#nombre');
    var datos = $('#datos');
    nombre.focus(function(){
        $(this).css("border","2px solid green");
    });
    nombre.blur(function(){
        $(this).css("border","2px solid #ccc");
        $('#datos').text($(this).val()).show();
    });
    
    //MouseDown y MouseUp
    datos.mousedown(function(){
        $(this).css("border-color","green");
    });
    datos.mouseup(function(){
        $(this).css("border-color","grey");
    });
    //Mousemove
    var sigueme = $('#sigueme');
    $(document).mousemove(function(){
        console.log(event.clientX);
        console.log(event.clientY);
        $('body').css("cursor","none");
        sigueme.css("left",event.clientX);
        sigueme.css("top" ,event.clientY);
    });
    
    
});


