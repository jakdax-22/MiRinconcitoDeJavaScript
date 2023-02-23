'use strict';
$(document).ready(()=>{
    //Selector de id
    var rojo = $("#rojo").css("background","red")
                                  .css("color","white");
    var verde = $("#verde").css("background","green")
                                        .css ("color","white");
                                
    //Selector de clase
    var zebra = $(".zebra").css("padding","5px");
    console.log (zebra.eq(1));
    
    $('.sin_borde').click(() => {
        console.log("Click dado");
        $(this).addClass('zebra');
    });
    console.log(rojo);
    console.log(verde);
    
    //Selectores de etiqueta
    var parrafos = $("p").css("cursor","pointer");
    parrafos.click(()=> {
        if ($(this).hasClass("zebra"))
        $(this).addClass("grande");
    });
    
    //Selectores de atributo
    $('[title ="Google"]').css("background","green");
    $('[title="Facebook"]').css("background","blue");
    
    //Otros
   //$ $('p,a').addClass('margen_superior');
   var busqueda = $('#elemento2').parent().find().find('.resaltado');
   console.log (busqueda);
});

