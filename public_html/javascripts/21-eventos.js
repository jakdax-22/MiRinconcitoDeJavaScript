'use strict';

window.addEventListener('load', () => {
    var bg;
    function cambiaColor(){
        console.log("Me has dado click");
        bg = boton.style.background;
        if (bg === "green"){
            boton.style.background="red";
            boton.style.padding="10px";
            boton.style.border="1px solid blue";
        }
        else 
            boton.style.background="green";
            boton.style.padding="10px";
            boton.style.border="1px solid blue";
    }

    var boton = document.querySelector("#boton");
    //Click
    boton.addEventListener('click' , function (){
        cambiaColor();
        this.style.border="10px solid black";
        console.log(this);
    });

    //Mouse Over
    boton.addEventListener('mouseover', function(){
        boton.style.background="#ccc";
    });

    //Mouse Out
    boton.addEventListener('mouseout', function(){
        boton.style.background="yellow";
    });

    //Focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener ('focus',function(){
        console.log("[focus]Estas haciendo foco dentro del input");
    });
    //Blur
    var input = document.querySelector("#campo_nombre");
    input.addEventListener ('blur',function(){
        console.log("[blur]Estas haciendo foco fuera del input");
    });
    //Keydown
    var input = document.querySelector("#campo_nombre");
    input.addEventListener ('keydown',function(event){
        console.log("[keydown]Estas pulsando esta tecla", String.fromCharCode(event.keyCode));
    });
    //Keypress
    var input = document.querySelector("#campo_nombre");
    input.addEventListener ('keypress',function(event){
        console.log("[keypress]Tecla presionada", String.fromCharCode(event.keyCode));
      });    
    //Keyup
    var input = document.querySelector("#campo_nombre");
    input.addEventListener ('keyup',function(event){
        console.log("[keydown]Tecla arriba", String.fromCharCode(event.keyCode));
      });
    
});
//final del load


