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
exports.ContaImposto = void 0;
var conta_1 = require("./conta");
var cliente_1 = require("./cliente");
var ContaImposto = /** @class */ (function (_super) {
    __extends(ContaImposto, _super);
    function ContaImposto(id, numero, saldo, cliente, imposto) {
        if (id === void 0) { id = 0; }
        if (numero === void 0) { numero = ""; }
        if (saldo === void 0) { saldo = 0; }
        if (cliente === void 0) { cliente = new cliente_1.Cliente(); }
        if (imposto === void 0) { imposto = 0; }
        var _this = _super.call(this, id, numero, saldo, cliente) || this;
        _this._imposto = imposto;
        return _this;
    }
    ContaImposto.prototype.debitar = function (valor) {
        _super.prototype.sacar.call(this, valor + (valor * this._imposto));
    };
    ContaImposto.prototype.getImposto = function () {
        return this._imposto;
    };
    return ContaImposto;
}(conta_1.Conta));
exports.ContaImposto = ContaImposto;
