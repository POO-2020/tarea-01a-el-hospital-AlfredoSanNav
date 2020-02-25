export default class Tiempo{
    /**
     * 
     * @param {number} hora Hora del día en formato de 12 horas
     * @param {number} minuto Minutos de la hora
     * @param {string} periodo AM o PM
     */
    constructor(hora, minuto, periodo){
        this.hora = hora
        this.minuto = minuto
        this.periodo = periodo
    }
    getFormato12(){
        return(`${this.hora}:${this.minuto} ${this.periodo}`)
    }

    getFormato24(){
        if( this.periodo === ("PM") ||this.periodo === ( "pm") ||this.periodo ===("Pm") ){ 
            this.hora = this.hora + 12
         }
    let horaCompleta = `${this.hora}:${this.minuto}`
    return(horaCompleta)
    }
}

