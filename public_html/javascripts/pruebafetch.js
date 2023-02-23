'use strict';
window.addEventListener('load',() =>{
var usuarios = document.querySelector("#usuarios");
var janet = document.querySelector("#janet");
getUsuarios()
        .then((data) => data.json())
        .then((users) =>{
           listarUsuarios(users.data); 
           
           return getJanet();
        })
                .then ((data) => data.json())
                .then ((user) => {
                    let h2 = document.createElement ("h2");
                    h2.innerHTML =  user.data.id+ " " +user.data.first_name+ " " +user.data.last_name;
                    janet.appendChild(h2);
                    return getFetchPropio();
                    
        });



function getUsuarios(){
    return fetch('https://reqres.in/api/users');
};
function getJanet(){
    return fetch('https://reqres.in/api/users/2');
};
function listarUsuarios(users){
    users.map((user,i) => {
        let h2 = document.createElement ("h2");
        h2.innerHTML = i + " " +user.first_name+ " " +user.last_name;
        usuarios.appendChild(h2);
        usuarios.querySelector (".loading").style.display="none";
    });
}

});
