"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const cliente_1 = require("./cliente");
class Conta {
    constructor(id = 0, numero = "", saldo = 0, cliente = new cliente_1.Cliente()) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }
    sacar(valor) {
        this.saldo = this.saldo - valor;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    //getters
    getNumero() {
        return this.numero;
    }
    getId() {
        return this.id;
    }
    getCliente() {
        return this.cliente;
    }
    //seter do cliente
    setCliente(cliente) {
        this.cliente = cliente;
    }
}
exports.Conta = Conta;
//# sourceMappingURL=conta.js.map