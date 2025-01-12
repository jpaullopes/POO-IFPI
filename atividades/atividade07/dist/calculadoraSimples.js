"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculadoraSimples = void 0;
//obejetivo da questão é criar uma calculadora simples que vai somar dois números
class CalculadoraSimples {
    constructor(operandoUm, operandoDois) {
        this.operandoUm = operandoUm;
        this.operandoDois = operandoDois;
    }
    somar() {
        return this.operandoUm + this.operandoDois;
    }
}
exports.CalculadoraSimples = CalculadoraSimples;
//teste da classe
let calculadora = new CalculadoraSimples(2, 3);
console.log(calculadora.somar()); //5
//# sourceMappingURL=calculadoraSimples.js.map