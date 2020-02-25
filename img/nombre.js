export default class Nombre{
    /**
     * 
     * @param {string} nombre Nombre o nombres del paciente.
     * @param {string} apellidoPaterno Apellido paterno del paciente.
     * @param {string} apellidoMaterno Apellido materno del paciente.
     */
    constructor(nombre, apellidoPaterno, apellidoMaterno){
        this.nombre = nombre
        this.apellidoMaterno = apellidoMaterno
        this.apellidoPaterno = apellidoPaterno
    }
    getNombreCompleto(){
        return`${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}` 

    }
    getApellidoNombre(){
        return`${this.apellidoPaterno} ${this.apellidoMaterno} ${this.nombre}` 
    }
    getIniciales(){
        return`${this.nombre.substring(0,1)} ${this.apellidoPaterno.substring(0,1)} ${this.apellidoMaterno.substring(0,1)}` 

    }

}
/*
let nombre1 = new Nombre("Alfredo", "Sánchez", "Nava")
console.log(nombre1.getIniciales())
*/

