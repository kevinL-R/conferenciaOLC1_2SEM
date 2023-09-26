// Constantes para los tipos de datos.
const TIPO_DATO = {
    NUMERO: 'NUMERO',
    STRING: 'STRING'

}



function crearSimbolo(id, tipo, valor) {
    return {
        id: id,
        tipo: tipo,
        valor: valor
    }
}


/**
 * Clase que representa una Tabla de Símbolos.
 */
class TS {

    /**
     * El costructor recibe como parámetro los simbolos de la tabla padre.
     * @param {*} simbolos 
     */
    constructor (simbolos) {
        this._simbolos = simbolos;
    }

    
    agregar(id, tipo) {
        const nuevoSimbolo = crearSimbolo(id, tipo);
        this._simbolos.push(nuevoSimbolo);
    }

    
    actualizar(id, valor) {
        const simbolo = this._simbolos.filter(simbolo => simbolo.id === id)[0];
        if (simbolo) {
            if(simbolo.tipo===valor.tipo){
                if(simbolo.tipo===TIPO_DATO.NUMERO){
                    if(valor.valor instanceof String){ 
                        simbolo.valor = parseInt(valor.valor,10);
                    }else{
                        simbolo.valor = valor.valor;
                    }
                }else{
                    if(valor.valor instanceof Number){ 
                        simbolo.valor = valor.valor.toString();
                    }else{
                        simbolo.valor = valor.valor;
                    }
                }
                
            }else{
                throw 'ERROR DE TIPOS -> variable: ' + id + ' tiene tipo: '+simbolo.tipo +' y el valor a asignar es de tipo: '+valor.tipo;
            }
        }
        else {
            throw 'ERROR: variable: ' + id + ' no ha sido definida';
        }
    }

    obtener(id) {
        const simbolo = this._simbolos.filter(simbolo => simbolo.id === id)[0];

        if (simbolo) return simbolo; //aqui devolvemos el simbolo completo
        else throw 'ERROR: variable: ' + id + ' no ha sido definida';
    }

    
    get simbolos() {
        return this._simbolos;
    }
}

// Exportamos las constantes y la clase.

module.exports.TIPO_DATO = TIPO_DATO;
module.exports.TS = TS;

