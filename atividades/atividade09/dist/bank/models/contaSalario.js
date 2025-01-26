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
exports.ContaSalario = void 0;
var conta_1 = require("./conta");
var ContaSalario = /** @class */ (function (_super) {
    __extends(ContaSalario, _super);
    function ContaSalario(id, numero, saldo, cliente, empregador, limiteSaqueMensal) {
        var _this = _super.call(this, id, numero, saldo, cliente) || this;
        _this._empregador = empregador;
        _this._limiteSaqueMensal = limiteSaqueMensal;
        _this._saquesRealizados = 0;
        return _this;
    }
    ContaSalario.prototype.sacar = function (valor) {
        if (this._saquesRealizados + valor > this._limiteSaqueMensal) {
            console.log("Limite de saque mensal excedido!");
        }
        else {
            _super.prototype.sacar.call(this, valor);
            this._saquesRealizados += valor;
        }
    };
    ContaSalario.prototype.depositarSalario = function (valor, depositante) {
        if (depositante === this._empregador) {
            _super.prototype.depositar.call(this, valor);
        }
        else {
            console.log("Apenas o empregador pode fazer depósitos nesta conta!");
        }
    };
    ContaSalario.prototype.getLimiteSaqueMensal = function () {
        return this._limiteSaqueMensal;
    };
    ContaSalario.prototype.getSaquesRealizados = function () {
        return this._saquesRealizados;
    };
    ContaSalario.prototype.getEmpregador = function () {
        return this._empregador;
    };
    return ContaSalario;
}(conta_1.Conta));
exports.ContaSalario = ContaSalario;
