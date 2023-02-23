'use strict';
//Fetch y peticiones a servicios / apis rest
window.addEventListener('load', () => {
    var divusuarios = document.querySelector("#usuarios");
    var divjanet = document.querySelector("#janet");
    var divprofesor=document.querySelector("#profesor");

            getUsuarios()
            .then(data => data.json())
            .then(users => {
                listadoUsuarios(users.data);
                return getInfo();
            })   
            .then (data =>{
                divprofesor.innerHTML = data; 
                return getJanet();
            })
            .then (data => data.json())
            .then (user =>{
                mostrarJanet(user.data);
            })
            .catch(error => {
               console.log(error);   
               alert("Error en las peticiones");
            });



            /*.then (users => {
                mostrarInfo(user.data)
    })*/
function getUsuarios (){
    return fetch('https://reqres.in/api/users');
}
function getJanet (){
    return fetch('https://reqres.in/api/users/2');
}
function getInfo(){
    var profesor = {
       nombre: "Enrique",
       apellidos:"Iranzo Martínez",
       url:"https://www.google.com"
    };
    return new Promise ((resolve, reject) => {
        var profesor_string = "";
        setTimeout(()=>{
            profesor_string = JSON.stringify(profesor);
            if(typeof(profesor_string || profesor_string ==="") !== 'string'){
            return reject ('error');
            }
            else 
            return resolve (profesor_string);
        },3000);
    });
}
 
function listadoUsuarios (usuarios){
    usuarios.map((user, i) => {
              let nombre = document.createElement('h2');
              nombre.innerHTML = i + " "+user.first_name +" "+user.last_name;
              divusuarios.appendChild(nombre);
              
              document.querySelector(".loading").style.display='none';
        });   
}
function mostrarJanet (user){
             console.log (user);
             let avatar = document.createElement("img");
              let nombre = document.createElement('h4');
              nombre.innerHTML = " "+user.first_name +" "+user.last_name;
              avatar.src=user.avatar;
              avatar.width="100";
              divjanet.appendChild(nombre);
              divjanet.appendChild(avatar);              
              document.querySelector("#janet .loading").style.display='none';

}
});





