import Hospital from "./hospital.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Tiempo from "./tiempo.js"
import Paciente from "./paciente.js"
import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
class Main{
    constructor(){
        this.hospital = new Hospital("Clinica No.1", "Calle Republica de Paraguay #219")    
     }

     registrarDoctor(){
         let d1 = new Doctor("Juanito Pérez", "Especialidad en arreglar corazones rotos", 3121485869, "485df")
         this.hospital.registrarDoctor(d1)
         this.hospital.listarDoctores()
     }
     registrarCita(){
        let cita1 = new Cita(new Fecha(new Date("2015-12-29")) , new Tiempo( 5, 12, "PM"),new Doctor("Juanito Pérez", "Especialidad en arreglar corazones rotos", 3121485869, "485df"), new Paciente(new Nombre("Alfred", "Sánchez", "Nava"), new Date("2015-04-15"), 3121947486)) 
        let cita4 = new Cita(new Fecha(new Date("2015-12-19")) , new Tiempo( 5, 12, "PM"),new Doctor("Juanito Pérez", "Especialidad en arreglar corazones rotos", 3121485869, "485df"), new Paciente(new Nombre("Alfred", "Sánchez", "Nava"), new Date("2015-04-15"), 3121947486)) 

        this.hospital.registrarCita(cita1)
        this.hospital.registrarCita(cita4)
        this.hospital.listarCitas()
     }
}
let app = new Main()
app.registrarDoctor()
app.registrarCita()
