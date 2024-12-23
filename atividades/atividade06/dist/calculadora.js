"use strict";
class Calculadora {
    //construtor da classe
    constructor(opera1 = 0, opera2 = 0) {
        this.operando1 = opera1;
        this.operando2 = opera2;
    }
    //soma né kkk
    soma() {
        return this.operando1 + this.operando2;
    }
    //subtração
    subtraction() {
        return this.operando1 - this.operando2;
    }
    //multiplicaçãozinha
    multiplication() {
        return this.operando1 * this.operando2;
    }
}
//Testes
const operacao = new Calculadora(10, 5);
console.log(`Adição: ${operacao.soma()}`); // Adição: 15
console.log(`Subtração: ${operacao.subtraction()}`); // Subtração: 5
console.log(`Multiplicação: ${operacao.multiplication()}`); // Multiplicação: 50
