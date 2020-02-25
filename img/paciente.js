import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
export default class Paciente{
    /**
     * 
     * @param {Nombre} nombre Nombre del paciente.
     * @param {Fecha} fechaNacimiento Fecha de nacimiento del paciente.
     * @param {number} telefono Número de contaco del paciente a 10 digitos.
     */
    constructor(nombre, fechaNacimiento, telefono){
        this.nombre = nombre
        this.fechaNacimiento = fechaNacimiento
        this.telefono = telefono
    }
    getPerfil(){
        return(`${this.nombre.getNombreCompleto()}, ${this.fechaNacimiento.getFecha()}, ${this.telefono}`)

    }
}
/*
let paciente1 = new Paciente(new Nombre("Alfredo", "Sánchez", "Nava"), new Fecha(new Date("06-12-2015")) , 3121681216)
console.log(paciente1.getPerfil()) */