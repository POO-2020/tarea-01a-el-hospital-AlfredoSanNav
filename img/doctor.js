export default class Doctor{
    /**
     * 
     * @param {string} nombre Nombre completo del doctor.
     * @param {string} especialidad Especialidad del doctor.
     * @param {number} telefono Telefono de contacto al doctor.
     * @param {*} cedula Cedula medica.
     */
    constructor(nombre, especialidad, telefono, cedula){
        this.nombre = nombre
        this.especialidad = especialidad
        this.telefono = telefono
        this.cedula = cedula
    }
    getPerfil(){
        return(`${this.cedula}, ${this.especialidad}, ${this.nombre}, ${this.telefono}.`)

    }
}
/*
let doc = new Doctor("Alfonso ROdriguez", "Especialista en tu corazón", 3121591258, "tucora")
console.log(doc.getPerfil()) */