export default class Fecha{
    /**
     * 
     * @param {Date} fecha 
     */
    constructor(fecha){
        this.fecha = fecha
        this.diaSemana = ["Domingo","Lunes","Martes","Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"]
        this.nombreMes = ["Enero", "Febrero", "Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        
    }
    getAños(){
        let años =  2020 - this.fecha.getFullYear() 
        return(años)
    }

    getMeses(){
        let meses =  (2020 - getFullYear(this.fecha))*12
        return(meses)
    }

    getSemanas(){
        let semanas = ((2020 - getFullYear(this.fecha))*12)*4
        return(semanas)
    }
    getDias(){
        let dias = (2020 - getFullYear(this.fecha))*12*4*7
        return(dias)
    }

    getFecha(){
        return(`${this.fecha.getDate()+1}/${this.nombreMes[this.fecha.getMonth()]}/${this.fecha.getFullYear()}`)
    }
    getDiaFecha(){
        let diaFecha = this.diaSemana(getDay(this.fecha))
        return(this.diaFecha)

    }
}