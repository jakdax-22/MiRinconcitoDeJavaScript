'use strict';
$(document).ready(function(){
    var caja = $('#caja');
    $('#ocultar').hide();
    $('#caja').hide();
    
    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        //FadeIn/Out,show/hide,fadeTo, slideUp/slideDown
        $('#caja').slideDown('slow');
    });
    
     $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();
        $('#caja').slideUp('slow', function(){
            console.log("Cartel ocultado");           
        });
    });
    
    $('#todoenuno').click(function(){
        $('#caja').slideToggle('fast');
    });
    
    $('#animame').click(function(){
        caja.animate({
                            marginLeft: '500px',
                            fontSize: '40px',
                            height: '110px',
                            }, 'slow')
                                    .animate({
                                        borderRadius: '900px',
                                        marginTop: '80px',
                            }, 'slow')
                                                                .animate({
                                        borderRadius: '0px',
                                        marginTop: '0px',
                            }, 'slow');              
                            ;     
                            
        ;
    });
});


