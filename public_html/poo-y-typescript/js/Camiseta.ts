'use strict';
//Interface
interface CamisetaBase {
    setColor (color);
    getColor();
}
//Decorador (Adiciona una funcionalidad extra a una clase, se verá más en profundidad en Angular)
function estampar (logo:string){
    return function (target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: "+logo);
        }
    }
}
//Clase (molde del objeto)
@estampar ("Gucci")
class Camiseta implements CamisetaBase{
    //Propiedades (características del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;


    //Constructores método que da valores por defecto a un objeto al instanciarlo
    constructor (color:string, modelo:string, marca:string, talla:string, precio:number){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    public setColor (color){
        this.color = color;
    }
    public getColor() {
        return this.color;
    }
}

//Clase hija
class Sudadera extends Camiseta {
    private capucha:boolean

    constructor(color:string, modelo:string, marca:string, talla:string, precio:number,capucha:boolean) {
        super(color, modelo, marca, talla, precio);
        this.capucha = capucha;
    }
    public setCapucha (capucha: boolean){
        this.capucha = capucha;
    }
    public getCapucha (){
        return this.capucha;
    }
}

var camiseta = new Camiseta ("gagagds","adga","fda","jkdjfs",30);
console.log (camiseta);
camiseta.estampacion();

var sudadera_nike = new Sudadera ("fdadfa","das","fda","fadfd",33,true);

console.log (sudadera_nike);


