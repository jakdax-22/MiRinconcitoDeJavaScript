'use strict';

window.addEventListener ('load' , () =>{
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display="none";
    formulario.addEventListener('submit' , () =>{
        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;
        var fallo = false;
        if (nombre.trim() === null || nombre.trim().length === 0){
            document.querySelector("#nombre").style.color="red";
            var parrafonombre = document.querySelector("#errornombre");
            parrafonombre.append("Formato inválido, introduce un valor válido");
            fallo = true;
        }
        if (apellidos.trim() === null || apellidos.trim().length === 0){
            document.querySelector("#apellidos").style.color="red";
            var parrafoapellidos = document.querySelector("#errorapellidos");     
            parrafoapellidos.append("Formato inválido, introduce un valor válido");
            fallo = true;
        }
        edad = Number(edad);
        if (typeof(edad) !== 'number' || edad.length===0 || edad === null){
            document.querySelector("#edad").style.color="red";
            var parrafoedad = document.querySelector("#erroredad");     
            parrafoedad.append("Formato inválido, introduce un valor válido");            
            fallo = true;
        }
        
        if (!fallo){
            var datos_usuario = [nombre,apellidos,edad];

            for (var dato in datos_usuario){
                var parrafo = document.createElement("p");
                parrafo.append(datos_usuario[dato]);
                box_dashed.append(parrafo);
                box_dashed.style.display="block";
            }
        }


    });
});


