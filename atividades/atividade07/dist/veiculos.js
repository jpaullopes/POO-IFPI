"use strict";
//Objetivo da questão é evitar repetições de atributo em classes semelhantes e evitar a duplicação de código.
//classe veiculo que vai ser herdada por Carro e CarroEletrico
class Veiculo {
    constructor(placa, ano) {
        this.placa = placa;
        this.ano = ano;
    }
}
//classse Carro que vai herdar de Veiculo
class Carro extends Veiculo {
    constructor(placa, ano, modelo) {
        super(placa, ano);
        this.modelo = modelo;
    }
}
//classe CarroEletrico que vai herdar de Carro
class CarroEletrico extends Carro {
    constructor(placa, ano, modelo, autonomiaBateria) {
        super(placa, ano, modelo);
        this.autonomiaBateria = autonomiaBateria;
    }
}
//# sourceMappingURL=veiculos.js.map