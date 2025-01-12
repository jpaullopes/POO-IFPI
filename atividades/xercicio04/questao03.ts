class Hotel { 
    private quantReservas : number;

    constructor(quantReservas : number = 0){ //criação do construtor
    this.quantReservas = quantReservas;
    }

    public adicionarReserva() : void { //criação do método adicionarReserva
    this.quantReservas++;
    }
    public getQuantReservas() : number { //criação do método getQuantReservas
    return this.quantReservas;
    }
}

function main() {
    let hotel : Hotel = new Hotel(2); //criação do objeto hotel
    console.log(hotel.getQuantReservas());
}

main();