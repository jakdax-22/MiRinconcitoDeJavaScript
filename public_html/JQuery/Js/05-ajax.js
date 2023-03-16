'use strict';
$(document).ready(function(){
    
    //Load
    //$('#datos').load("https://reqres.in");
    
    //Get y Post
    $.get("https://reqres.in/api/users", {page:2}, function(response){
        response.data.forEach(function(element){
            $('#datos').append("<p>"+element.first_name+ " "+element.last_name+"</p>");
        });
    });
    
$('#formulario').submit(function(e){
    e.preventDefault();
    var usuario = {
       name: $('input[name="name"]').val(),
       web: $('input[name="web"]').val()
    };
    console.log(usuario);
    /*$.post($(this).attr("action"),usuario,function(response){
        console.log (response);
    }).done(function(){
        alert ("Usuario añadido correctamente");
    */
    
    $.ajax({
        type: 'POST',
        url: $(this).attr("action"),
        data: usuario,
        beforeSend: function(){
            console.log ("Enviando usuario");
        },
        success: function(response){
           console.log(response); 
        },
        error : function(){
           alert ("Ha ocurrido un error"); 
        },
        timeout: 10000
        
    });
    
    
    return false;
});

    
    
});


