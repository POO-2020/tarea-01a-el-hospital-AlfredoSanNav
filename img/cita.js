import Tiempo from "./tiempo.js"
import Doctor from "./doctor.js"
import Paciente from "./paciente.js"
import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
export default class Cita{
    /**
     * 
     * @param {Date} fecha Fecha de la cita
     * @param {Tiempo} hora Hora de la cita
     * @param {Doctor} doctor Doctor
     * @param {Paciente} paciente Nombre del paciente
     */
    constructor(fecha, hora, doctor, paciente){
        this.fecha = fecha
        this.hora = hora
        this.doctor = doctor
        this.paciente = paciente
    }
    getCita(){
        return(`${this.fecha.getFecha()}, ${this.hora.getFormato12()} ${this.doctor.nombre} ${this.paciente.nombre.getNombreCompleto()}`)
    }
}
/*
let cita1 = new Cita( new Fecha(new Date("2015-06-15")), new Tiempo( 5, 12,"PM"), new Doctor("Gonzalo de sandoval", "Tu corazón", 3121421689, "fd6856854"), new Paciente(new Nombre("Alfredo","Sánchez","Nava"), new Date("2015-12-05"), 3121452659))
console.log(cita1.getCita()) */