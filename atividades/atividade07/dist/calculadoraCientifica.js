"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//objetivo é fazer a calculadora científica herdar da calculadora simples e adicionar a funcionalidade de exponencial
const calculadoraSimples_1 = require("./calculadoraSimples");
class CalculadoraCientifica extends calculadoraSimples_1.CalculadoraSimples {
    constructor(operandoUm, operandoDois) {
        super(operandoUm, operandoDois);
    }
    exponencial() {
        return Math.pow(this.operandoUm, this.operandoDois);
    }
}
//teste
let calculadoraCientifica = new CalculadoraCientifica(2, 3);
console.log(calculadoraCientifica.somar()); //5
console.log(calculadoraCientifica.exponencial()); //8
//# sourceMappingURL=calculadoraCientifica.js.map