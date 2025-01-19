"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
var conta_1 = require("./conta");
var cliente_1 = require("./cliente");
//a nov clase da questão é a ContaPoupanca que vai herdar de Conta
//adicionando o metodo de calcularJuros
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca(id, numero, saldo, cliente, juros) {
        if (id === void 0) { id = 0; }
        if (numero === void 0) { numero = ""; }
        if (saldo === void 0) { saldo = 0; }
        if (cliente === void 0) { cliente = new cliente_1.Cliente(); }
        if (juros === void 0) { juros = 0; }
        var _this = _super.call(this, id, numero, saldo, cliente) || this;
        _this._juros = juros;
        return _this;
    }
    ContaPoupanca.prototype.calcularJuros = function () {
        this.depositar(this.consultarSaldo() * this._juros);
    };
    ContaPoupanca.prototype.getJuros = function () {
        return this._juros;
    };
    return ContaPoupanca;
}(conta_1.Conta));
exports.ContaPoupanca = ContaPoupanca;
