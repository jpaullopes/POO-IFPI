"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var banco_1 = require("./banco");
var cliente_1 = require("./cliente");
var conta_1 = require("./conta");
var contaPoupanca_1 = require("./contaPoupanca");
var contaImposto_1 = require("./contaImposto");
var contaSalario_1 = require("./contaSalario");
var readline_sync_1 = require("readline-sync");
var utilsExibicao_1 = require("../utils/utilsExibicao");
var utilsLeituraArqvs_1 = require("../utils/utilsLeituraArqvs");
var App = /** @class */ (function () {
    function App(banco) {
        if (banco === void 0) { banco = new banco_1.Banco(); }
        this.banco = banco;
    }
    App.prototype.inserirConta = function () {
        console.log("[ CADASTRO DE CONTA ]");
        var numero = (0, readline_sync_1.question)('Digite o número da conta:');
        var id = parseInt((0, readline_sync_1.question)('Digite o id da conta:'));
        var saldo = parseFloat((0, readline_sync_1.question)('Digite o saldo inicial da conta:'));
        var clienteCpf = (0, readline_sync_1.question)('Digite o cpf do cliente:');
        var cliente = this.banco.consultarCliente(clienteCpf);
        if (cliente) {
            (0, utilsExibicao_1.exibirMenuConta)();
            var tipoConta = (0, readline_sync_1.question)('Digite o tipo da conta: ');
            var conta = void 0;
            if (tipoConta == '2') {
                var taxaJuros = parseFloat((0, readline_sync_1.question)('Digite a taxa de juros da poupança:'));
                conta = new contaPoupanca_1.ContaPoupanca(id, numero, saldo, cliente, taxaJuros);
            }
            else if (tipoConta == '3') {
                var taxaImposto = parseFloat((0, readline_sync_1.question)('Digite a taxa de imposto da conta:'));
                conta = new contaImposto_1.ContaImposto(id, numero, saldo, cliente, taxaImposto);
            }
            else if (tipoConta == '4') {
                var empregador = (0, readline_sync_1.question)('Digite o nome do empregador:');
                var limiteSaqueMensal = parseFloat((0, readline_sync_1.question)('Digite o limite de saque mensal:'));
                conta = new contaSalario_1.ContaSalario(id, numero, saldo, cliente, empregador, limiteSaqueMensal);
            }
            else {
                conta = new conta_1.Conta(id, numero, saldo, cliente);
            }
            this.banco.inserirConta(conta);
            console.log("Conta cadastrada com sucesso!");
        }
        else {
            console.log("Cliente não encontrado!");
        }
    };
    App.prototype.inserirCliente = function () {
        console.log("[ CADASTRO DE CLIENTE ]");
        var id = parseInt((0, readline_sync_1.question)('Digite o id do cliente:'));
        var nome = (0, readline_sync_1.question)('Digite o nome do cliente:');
        var cpf = (0, readline_sync_1.question)('Digite o cpf do cliente:');
        var dataNascimento = new Date((0, readline_sync_1.question)('Digite a data de nascimento do cliente:'));
        var cliente = new cliente_1.Cliente(id, nome, cpf, dataNascimento);
        this.banco.inserirCliente(cliente);
        console.log("Cliente inserido com sucesso!");
    };
    App.prototype.consultarConta = function () {
        console.log("[ Consultar conta ]");
        var numero = (0, readline_sync_1.question)('Digite o número da conta:');
        var conta = this.banco.consultarConta(numero);
        if (conta) {
            (0, utilsExibicao_1.exibirContaFormatada)(conta);
        }
        else {
            console.log("Conta não encontrada!");
        }
    };
    App.prototype.consultarCliente = function () {
        console.log("[ Consultar cliente ]");
        var cpf = (0, readline_sync_1.question)('Digite o cpf do cliente:');
        var cliente = this.banco.consultarCliente(cpf);
        if (cliente) {
            (0, utilsExibicao_1.exibirClienteFormatado)(cliente);
        }
        else {
            console.log("Cliente não encontrado!");
        }
    };
    App.prototype.sacar = function () {
        console.log("[ Sacar ]");
        var numero = (0, readline_sync_1.question)('Digite o número da conta:');
        var valor = parseFloat((0, readline_sync_1.question)('Digite o valor do saque:'));
        this.banco.sacar(numero, valor);
    };
    App.prototype.depositar = function () {
        console.log("[ Depositar ]");
        var numero = (0, readline_sync_1.question)('Digite o número da conta:');
        var valor = parseFloat((0, readline_sync_1.question)('Digite o valor do depósito:'));
        this.banco.depositar(numero, valor);
    };
    App.prototype.excluirConta = function () {
        console.log("[ Excluir conta ]");
        var numero = (0, readline_sync_1.question)('Digite o número da conta:');
        this.banco.removerConta(numero);
    };
    App.prototype.transferir = function () {
        console.log("[ Transferir ]");
        var numeroOrigem = (0, readline_sync_1.question)('Digite o número da conta de origem:');
        var numeroDestino = (0, readline_sync_1.question)('Digite o número da conta de destino:');
        var valor = parseFloat((0, readline_sync_1.question)('Digite o valor da transferência:'));
        this.banco.transferir(numeroOrigem, numeroDestino, valor);
    };
    App.prototype.totalizacoes = function () {
        console.log("[ Totalizações ]");
        console.log("Total de contas: ".concat(this.banco.quantidadeContas()));
        console.log("Saldo total: ".concat(this.banco.totalizarSaldo()));
        console.log("M\u00E9dia de saldo: ".concat(this.banco.mediaSaldo()));
    };
    App.prototype.mudarTitularidade = function () {
        console.log("[ Mudar titularidade ]");
        var numero = (0, readline_sync_1.question)('Digite o número da conta:');
        var cpf = (0, readline_sync_1.question)('Digite o cpf do novo titular:');
        var cliente = this.banco.consultarCliente(cpf);
        if (cliente) {
            this.banco.mudarTitularidadeConta(numero, cpf);
            console.log("Titularidade alterada com sucesso!");
        }
        else {
            console.log("Cliente não encontrado!");
        }
    };
    App.prototype.excluirCliente = function () {
        console.log("[ Excluir cliente ]");
        var cpf = (0, readline_sync_1.question)('Digite o cpf do cliente:');
        this.banco.removerCliente(cpf);
    };
    App.prototype.atribuirTitular = function () {
        console.log("[ Atribuir titular ]");
        var cpf = (0, readline_sync_1.question)('Digite o cpf do titular:');
        var contas = this.banco.consultarContasSemTitular();
        if (contas.length == 0) {
            console.log("Não há contas sem titular!");
        }
        else {
            for (var _i = 0, contas_1 = contas; _i < contas_1.length; _i++) {
                var conta = contas_1[_i];
                this.banco.mudarTitularidadeConta(conta.getNumero(), cpf);
            }
            console.log("Titular atribuído com sucesso!");
        }
    };
    App.prototype.ordemBancaria = function () {
        console.log("[ Ordem bancária ]");
        var numeroOrigem = (0, readline_sync_1.question)('Digite o número da conta de origem:');
        var valor = parseFloat((0, readline_sync_1.question)("Digite o valor a ser distribuído:"));
        var contaOrigem = this.banco.consultarConta(numeroOrigem);
        if (!contaOrigem) {
            console.log("Conta de origem não encontrada!");
            return;
        }
        var contasDestino = [];
        var numContas = parseInt((0, readline_sync_1.question)("Digite o número de contas destino:"));
        var valorTotal = numContas * valor;
        if (contaOrigem.consultarSaldo() < valorTotal) {
            console.log("Saldo insuficiente!");
            return;
        }
        for (var i = 0; i < numContas; i++) {
            var numeroDestino = (0, readline_sync_1.question)('Digite o número da conta de destino:');
            var contaDestino = this.banco.consultarConta(numeroDestino);
            if (contaDestino) {
                contasDestino.push(contaDestino);
            }
            else {
                console.log("Conta de destino não encontrada!");
                return;
            }
        }
        for (var _i = 0, contasDestino_1 = contasDestino; _i < contasDestino_1.length; _i++) {
            var contaDestino = contasDestino_1[_i];
            this.banco.transferir(numeroOrigem, contaDestino.getNumero(), valor);
        }
        console.log("Ordem bancária realizada com sucesso!");
    };
    App.prototype.renderJurosBanco = function () {
        console.log("[ Render juros ]");
        var numeroConta = (0, readline_sync_1.question)('Digite o número da conta poupança:');
        this.banco.renderJuros(numeroConta);
    };
    App.prototype.carregarContas = function () {
        var caminho = "contas.txt";
        var contas = (0, utilsLeituraArqvs_1.lerContasDoArquivo)(caminho);
        for (var _i = 0, contas_2 = contas; _i < contas_2.length; _i++) {
            var conta = contas_2[_i];
            this.banco.inserirConta(conta);
        }
        console.log("Contas carregadas com sucesso!");
    };
    App.prototype.salvarContas = function () {
        var caminho = "contas.txt";
        (0, utilsLeituraArqvs_1.gravarContasNoArquivo)(caminho, this.banco.getContas());
        console.log("Contas salvas com sucesso!");
    };
    return App;
}());
exports.App = App;
