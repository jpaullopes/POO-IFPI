"use strict";
/**a. Três atributos privados e definidos no construtor chamados hora, minutos e
segundos;
b. Métodos públicos para ler hora, minuto e segundo de forma individual;
c. Um método público para retorne a hora no formato “hh:mm:ss”. */
class Hora {
    //constructor
    constructor(hora = 0, minutos = 0, segundos = 0) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    //retorna hora isoladamente
    lerHora() {
        return this.hora;
    }
    //retorna minutos isoladamente
    lerMinutos() {
        return this.minutos;
    }
    //retorna segundos isoladamente
    lerSegundos() {
        return this.segundos;
    }
    // retorna a hora no formato “hh:mm:ss”
    retornaHora() {
        return `${this.hora}:${this.minutos}:${this.segundos}`;
    }
}
//testes
let hora = new Hora(10, 20, 30);
console.log(hora.lerHora());
console.log(hora.lerMinutos());
console.log(hora.lerSegundos());
console.log(hora.retornaHora());
