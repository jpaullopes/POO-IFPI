"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var produtoPerecivel_1 = require("./produtoPerecivel");
var Estoque = /** @class */ (function () {
    function Estoque() {
        this._produtos = new Array();
    }
    //metodo que insere um produto no estoque(de forma ordenada)
    Estoque.prototype.inserirProduto = function (produto) {
        //isere de uma forma ordenada
        if (this.existe(produto.getIdentificador(), produto.getDescricao())) {
            return false;
        }
        else {
            var index = this._produtos.findIndex(function (p) { return p.getIdentificador() > produto.getIdentificador(); });
            if (index === -1) {
                this._produtos.push(produto); // Adiciona no final se não encontrar um maior
            }
            else {
                this._produtos.splice(index, 0, produto); // Insere na posição correta
            }
            return true;
        }
    };
    //metodo que consulta produto pelo identificador
    Estoque.prototype.consultarProduto = function (identificador) {
        //procura o produto no array de produtos se não achar retorna um novo produto
        var produto = this._produtos.find(function (produto) { return produto.getIdentificador() == identificador; });
        return produto;
    };
    //metodo que remove um produto do estoque
    Estoque.prototype.excluirProduto = function (identificador) {
        //procura o produto no array de produtos
        if (this.consultarProduto(identificador)) { //verifica se existe
            var index = this._produtos.findIndex(function (produto) { return produto.getIdentificador() == identificador; });
            //se achar o produto remove
            //faz com que os produtos atrás do produto removido sejam movidos para frente ocupando a posição do procurado
            for (var i = index; i < this._produtos.length - 1; i++) {
                this._produtos[i] = this._produtos[i + 1];
            }
            //vai remover o ultimo produto
            this._produtos.pop();
            return true;
        }
        else {
            return false;
        }
    };
    //repor estoque
    Estoque.prototype.reporEstoque = function (identificador, quantidade) {
        //procura o produto no array de produtos
        if (this.consultarProduto(identificador)) { //faz verificação se existe
            var produto = this.consultarProduto(identificador);
            if (produto) {
                produto.reporEstoque(quantidade);
            }
            return true;
        }
        else {
            return false;
        }
    };
    //dar baixa no estoque
    Estoque.prototype.darBaixaEstoque = function (identificador, quantidade) {
        //procura o produto no array de produtos
        if (this.consultarProduto(identificador)) { //verifica se existe
            var produto = this.consultarProduto(identificador);
            if (produto) {
                produto.darBaixaEstoque(quantidade);
            }
            return true;
        }
        else {
            return false;
        }
    };
    //metodo que verifica se o produto já existe 
    Estoque.prototype.existe = function (identificador, descricao) {
        var produto = this.consultarProduto(identificador);
        //procurando pela mesma descrição
        var produto2 = this._produtos.find(function (produto) { return produto.getDescricao() == descricao; });
        if (produto || produto2) {
            return true;
        }
        else {
            return false;
        }
    };
    //método que liste todos os produtos perecíveis vencidos.
    Estoque.prototype.listarProdutosVencidos = function () {
        var produtosVencidos = new Array();
        for (var _i = 0, _a = this._produtos; _i < _a.length; _i++) {
            var produto = _a[_i];
            if (produto instanceof produtoPerecivel_1.ProdutoPerecivel) { //se o produto for uma instacia de produtoPerecivel ele verifica se
                if (produto.ehVencido()) { //tá vencido ou não
                    produtosVencidos.push(produto);
                }
            }
        }
        return produtosVencidos;
    };
    return Estoque;
}());
