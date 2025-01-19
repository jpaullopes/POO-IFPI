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
exports.ProdutoPerecivel = void 0;
var produto_1 = require("./produto");
var ProdutoPerecivel = /** @class */ (function (_super) {
    __extends(ProdutoPerecivel, _super);
    function ProdutoPerecivel(identificador, descricao, quantidade, valorUnitario, dataValidade) {
        if (identificador === void 0) { identificador = ""; }
        if (descricao === void 0) { descricao = ""; }
        if (quantidade === void 0) { quantidade = 0; }
        if (valorUnitario === void 0) { valorUnitario = 0; }
        if (dataValidade === void 0) { dataValidade = new Date(1111, 1, 1); }
        var _this = _super.call(this, identificador, descricao, quantidade, valorUnitario) || this;
        _this._dataValidade = dataValidade;
        return _this;
    }
    //getters
    ProdutoPerecivel.prototype.getDataValidade = function () {
        return "this._dataValidade.getDate()-".concat(this._dataValidade.getMonth(), "-").concat(this._dataValidade.getFullYear());
    };
    //getter de dataValidade normal
    ProdutoPerecivel.prototype.getterModificadoDataValidade = function () {
        return this._dataValidade;
    };
    //metodo que reotona se o produto está ou não válido
    ProdutoPerecivel.prototype.ehVencido = function () {
        var hoje = new Date();
        if (this.getterModificadoDataValidade() < hoje) {
            return true;
        }
        return false;
    };
    //sobrescrevendo o metodo reporEstoque
    ProdutoPerecivel.prototype.reporEstoque = function (quantidade) {
        if (this.ehVencido()) {
            console.log("Produto vencido, não pode ser reposto");
        }
        else {
            _super.prototype.reporEstoque.call(this, quantidade);
        }
    };
    //sobrescrevendo o metodo darBaixaEstoque
    ProdutoPerecivel.prototype.darBaixaEstoque = function (quantidade) {
        if (this.ehVencido()) {
            console.log("Produto vencido, não pode ser vendido");
        }
        else {
            _super.prototype.darBaixaEstoque.call(this, quantidade);
        }
    };
    return ProdutoPerecivel;
}(produto_1.Produto));
exports.ProdutoPerecivel = ProdutoPerecivel;
