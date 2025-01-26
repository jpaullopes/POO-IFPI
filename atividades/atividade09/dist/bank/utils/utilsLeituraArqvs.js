"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lerContasDoArquivo = lerContasDoArquivo;
exports.gravarContasNoArquivo = gravarContasNoArquivo;
var fs_extra_1 = require("fs-extra");
var conta_1 = require("../models/conta");
var contaPoupanca_1 = require("../models/contaPoupanca");
var contaImposto_1 = require("../models/contaImposto");
var contaSalario_1 = require("../models/contaSalario");
var cliente_1 = require("../models/cliente");
function lerContasDoArquivo(caminho) {
    var contas = [];
    var dados = (0, fs_extra_1.readFileSync)(caminho, 'utf-8');
    var linhas = dados.split('\n');
    for (var _i = 0, linhas_1 = linhas; _i < linhas_1.length; _i++) {
        var linha = linhas_1[_i];
        var campos = linha.split(';');
        var tipoConta = campos[0];
        var numero = campos[1];
        var saldo = parseFloat(campos[2]);
        var id = parseInt(campos[3]);
        var nomeCliente = campos[4];
        var cliente = new cliente_1.Cliente(id, nomeCliente);
        var conta = void 0;
        if (tipoConta === 'CP') {
            var taxaJuros = parseFloat(campos[5]);
            conta = new contaPoupanca_1.ContaPoupanca(id, numero, saldo, cliente, taxaJuros);
        }
        else if (tipoConta === 'CI') {
            var taxaImposto = parseFloat(campos[5]);
            conta = new contaImposto_1.ContaImposto(id, numero, saldo, cliente, taxaImposto);
        }
        else if (tipoConta === 'CS') {
            var empregador = campos[5];
            var limiteSaqueMensal = parseFloat(campos[6]);
            conta = new contaSalario_1.ContaSalario(id, numero, saldo, cliente, empregador, limiteSaqueMensal);
        }
        else {
            conta = new conta_1.Conta(id, numero, saldo, cliente);
        }
        contas.push(conta);
    }
    return contas;
}
function gravarContasNoArquivo(caminho, contas) {
    var linhas = [];
    for (var _i = 0, contas_1 = contas; _i < contas_1.length; _i++) {
        var conta = contas_1[_i];
        var linha = "".concat(conta.constructor.name, ";").concat(conta.getNumero(), ";").concat(conta.consultarSaldo(), ";").concat(conta.getId(), ";").concat(conta.getCliente().getNome());
        if (conta instanceof contaPoupanca_1.ContaPoupanca) {
            linha += ";".concat(conta.getJuros());
        }
        else if (conta instanceof contaImposto_1.ContaImposto) {
            linha += ";".concat(conta.getImposto());
        }
        else if (conta instanceof contaSalario_1.ContaSalario) {
            linha += ";".concat(conta.getEmpregador(), ";").concat(conta.getLimiteSaqueMensal());
        }
        linhas.push(linha);
    }
    var dados = linhas.join('\n');
    (0, fs_extra_1.writeFileSync)(caminho, dados, 'utf-8');
}
