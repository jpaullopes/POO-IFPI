"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(identificador, descricao, quantidade, valorUnitario) {
        if (identificador === void 0) { identificador = ""; }
        if (descricao === void 0) { descricao = ""; }
        if (quantidade === void 0) { quantidade = 0; }
        if (valorUnitario === void 0) { valorUnitario = 0; }
        this._identificador = identificador;
        this._descricao = descricao;
        this._quantidade = quantidade;
        this._valorUnitario = valorUnitario;
    }
    //metodos
    //metodo que repões o estoque
    Produto.prototype.reporEstoque = function (quantidade) {
        this._quantidade += quantidade;
    };
    //metodo que retira do estoque
    Produto.prototype.darBaixaEstoque = function (quantidade) {
        this._quantidade -= quantidade;
    };
    //getters
    Produto.prototype.getIdentificador = function () {
        return this._identificador;
    };
    Produto.prototype.getDescricao = function () {
        return this._descricao;
    };
    Produto.prototype.getQuantidade = function () {
        return this._quantidade;
    };
    Produto.prototype.getValorUnitario = function () {
        return this._valorUnitario;
    };
    return Produto;
}());
exports.Produto = Produto;
