import Hospital from "./hospital.js"
import Doctor from "./doctor.js"
class Main{
    constructor(){
        this.hospital = new Hospital("Clinica No.1", "Calle Republica de Paraguay #219")    
     }

     registrarDoctores(){
         let d1 = new Doctor("Juanito Pérez", "Especialidad en arreglar corazones rotos", 3121485869, "485df")
         this.hospital.registrarDoctores(d1)
         this.hospital.listarDoctores()
     }
}
let app = new Main()
app.registrarDoctores()
app.registrarDoctores()