"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const conta_1 = require("./conta");
const cliente_1 = require("./cliente");
//a nov clase da questão é a ContaPoupanca que vai herdar de Conta
//adicionando o metodo de calcularJuros
class ContaPoupanca extends conta_1.Conta {
    constructor(id = 0, numero = "", saldo = 0, cliente = new cliente_1.Cliente(), juros = 0) {
        super(id, numero, saldo, cliente);
        this._juros = juros;
    }
    calcularJuros() {
        this.depositar(this.consultarSaldo() * this._juros);
    }
}
exports.ContaPoupanca = ContaPoupanca;
//# sourceMappingURL=contaPoupanca.js.map