import Doctor from "./doctor.js"
import Cita from "./cita.js"

export default class Hospital{
    /**
     * 
     * @param {string} nombre Nombre del hospital.
     * @param {string} direccion Dirección del hospital.
     */
    constructor(nombre, direccion){
        this.nombre = nombre
        this.direccion = direccion
        this.citas = new Array ()
        this.doctores = new Array()

    }
    registrarDoctores(doctor){
        this.doctores.push(doctor)
    }
    listarDoctores(){
        this.doctores.forEach((doctor, i) =>{
            console.log(`${this.doctor.getPerfil()}`)
        })

    }
    registrarCita(){

    }
    listarCitas(){

    }

}