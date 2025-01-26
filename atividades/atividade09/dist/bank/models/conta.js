"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(id, numero, saldo, cliente) {
        this.validaValor(saldo);
        this.id = id;
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }
    Conta.prototype.sacar = function (valor) {
        this.validaValor(valor);
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
        else {
            throw new Error("Saldo insuficiente.");
        }
    };
    Conta.prototype.depositar = function (valor) {
        this.validaValor(valor);
        this.saldo += valor;
    };
    Conta.prototype.validaValor = function (valor) {
        if (isNaN(valor) || valor <= 0) {
            throw new Error("Valor inválido.");
        }
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.getNumero = function () {
        return this.numero;
    };
    Conta.prototype.getId = function () {
        return this.id;
    };
    Conta.prototype.setCliente = function (cliente) {
        this.cliente = cliente;
    };
    Conta.prototype.getCliente = function () {
        return this.cliente;
    };
    return Conta;
}());
exports.Conta = Conta;
