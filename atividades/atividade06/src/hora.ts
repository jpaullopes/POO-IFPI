/**a. Três atributos privados e definidos no construtor chamados hora, minutos e
segundos;
b. Métodos públicos para ler hora, minuto e segundo de forma individual;
c. Um método público para retorne a hora no formato “hh:mm:ss”. */

class Hora{
    private hora : number;
    private minutos : number;
    private segundos : number;

    //constructor
    constructor(hora :number = 0, minutos : number = 0, segundos : number = 0){
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    //retorna hora isoladamente
    public lerHora(): number{
        return this.hora;
    }
    //retorna minutos isoladamente
    public lerMinutos(): number{
        return this.minutos;
    }
    //retorna segundos isoladamente
    public lerSegundos(): number{
        return this.segundos;
    }
    // retorna a hora no formato “hh:mm:ss”
    public retornaHora(): string{
        return `${this.hora}:${this.minutos}:${this.segundos}`;
    }
}

//testes
let hora = new Hora(10, 20, 30);
console.log(hora.lerHora());
console.log(hora.lerMinutos());
console.log(hora.lerSegundos());
console.log(hora.retornaHora());