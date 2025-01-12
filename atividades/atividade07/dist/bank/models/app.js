"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const banco_1 = require("./banco");
const cliente_1 = require("./cliente");
const conta_1 = require("./conta");
const readline_sync_1 = require("readline-sync"); //importação do question
const utilsExibicao_1 = require("../utilsExibicao");
class App {
    constructor(banco = new banco_1.Banco) {
        this.banco = banco;
    }
    inserirConta() {
        console.log("[ CADASTRO DE CONTA ]"); //dados da conta serão informados
        let numero = (0, readline_sync_1.question)('Digite o número da conta:');
        let id = parseInt((0, readline_sync_1.question)('Digite o id da conta:'));
        let saldo = parseFloat((0, readline_sync_1.question)('Digite o saldo inicial da conta:'));
        let clienteCpf = (0, readline_sync_1.question)('Digite o cpf do cliente:');
        let cliente = this.banco.consultarCliente(clienteCpf);
        if (cliente) { //caso o cliente que a conta será associado exista, segue tudo certinho
            let conta = new conta_1.Conta(id, numero, saldo, cliente);
            this.banco.inserirConta(conta);
            console.log("Conta inserida com sucesso!");
        }
        else {
            console.log("Cliente não encontrado!");
        }
    }
    //realizar o cadastro de um cliente
    inserirCliente() {
        console.log("[ CADASTRO DE CLIENTE ]");
        let id = parseInt((0, readline_sync_1.question)('Digite o id do cliente:'));
        let nome = (0, readline_sync_1.question)('Digite o nome do cliente:');
        let cpf = (0, readline_sync_1.question)('Digite o cpf do cliente:');
        let dataNascimento = new Date((0, readline_sync_1.question)('Digite a data de nascimento do cliente:'));
        //verificar se esse cliente já existe
        let cliente = new cliente_1.Cliente(id, nome, cpf, dataNascimento);
        this.banco.inserirCliente(cliente);
        console.log("Cliente inserido com sucesso!");
    }
    //metodo que faz a consulta de uma conta com base no número dela
    consultarConta() {
        console.log("[ Consultar conta ]");
        let numero = (0, readline_sync_1.question)('Digite o número da conta:');
        let conta = this.banco.consultarConta(numero);
        if (conta) {
            (0, utilsExibicao_1.exibirContaFormatada)(conta);
        }
        else {
            console.log("Conta não encontrada!");
        }
    }
    //metodo que faz a consulta de um cliente com base no cpf dele
    consultarCliente() {
        console.log("[ Consultar cliente ]");
        let cpf = (0, readline_sync_1.question)('Digite o cpf do cliente:');
        let cliente = this.banco.consultarCliente(cpf);
        if (cliente) {
            (0, utilsExibicao_1.exibirClienteFormatado)(cliente);
        }
        else {
            console.log("Cliente não encontrado!");
        }
    }
    //metodo que realiza o saque de uma conta
    sacar() {
        console.log("[ Sacar ]");
        let numero = (0, readline_sync_1.question)('Digite o número da conta:');
        let valor = parseFloat((0, readline_sync_1.question)('Digite o valor do saque:'));
        this.banco.sacar(numero, valor);
    }
    //metodo que realiza o depósito em uma conta
    depositar() {
        console.log("[ Depositar ]");
        let numero = (0, readline_sync_1.question)('Digite o número da conta:');
        let valor = parseFloat((0, readline_sync_1.question)('Digite o valor do depósito:'));
        this.banco.depositar(numero, valor);
    }
    //metodo que exclui uma conta 
    excluirConta() {
        console.log("[ Excluir conta ]");
        let numero = (0, readline_sync_1.question)('Digite o número da conta:');
        this.banco.removerConta(numero);
    }
    //metodo que realiza a transferência de uma conta para outra
    transferir() {
        console.log("[ Transferir ]");
        let numeroOrigem = (0, readline_sync_1.question)('Digite o número da conta de origem:');
        let numeroDestino = (0, readline_sync_1.question)('Digite o número da conta de destino:');
        let valor = parseFloat((0, readline_sync_1.question)('Digite o valor da transferência:'));
        this.banco.transferir(numeroOrigem, numeroDestino, valor); //faz a transferência...
    }
    //metodo que exibe as totalizações do banco
    totalizacoes() {
        console.log("[ Totalizações ]");
        console.log(`Total de contas: ${this.banco.quantidadeContas()}`);
        console.log(`Saldo total: ${this.banco.totalizarSaldo()}`);
        console.log(`Média de saldo: ${this.banco.mediaSaldo()}`);
    }
    //metodo que muda a titularidade de uma conta
    mudarTitularidade() {
        console.log("[ Mudar titularidade ]");
        let numero = (0, readline_sync_1.question)('Digite o número da conta:');
        let cpf = (0, readline_sync_1.question)('Digite o cpf do novo titular:');
        let cliente = this.banco.consultarCliente(cpf); //encontra o cliente para verificar se ele existe
        if (cliente) { //existe...
            this.banco.mudarTitularidadeConta(numero, cpf);
            console.log("Titularidade alterada com sucesso!");
        }
        else {
            console.log("Cliente não encontrado!");
        }
    }
    //metodo que exclui um cliente
    excluirCliente() {
        console.log("[ Excluir cliente ]");
        let cpf = (0, readline_sync_1.question)('Digite o cpf do cliente:');
        this.banco.removerCliente(cpf); //remove o cliente
    }
    //metodo que exibe as contas sem titular e atribui um titular a elas
    atribuirTitular() {
        console.log("[ Atribuir titular ]");
        let cpf = (0, readline_sync_1.question)('Digite o cpf do titular:');
        let contas = this.banco.consultarContasSemTitular(); //contas sem titular
        if (contas.length == 0) { //se não tiver conta sem titular
            console.log("Não há contas sem titular!");
        }
        else {
            for (let conta of contas) { //para cada conta
                this.banco.mudarTitularidadeConta(conta.getNumero(), cpf); //atribui o titular
            }
            console.log("Titular atribuído com sucesso!");
        }
    }
    //vai pegar uma conta e distribuir o dinheiro dela para outras contas
    ordemBancaria() {
        console.log("[ Ordem bancária ]");
        let numeroOrigem = (0, readline_sync_1.question)('Digite o número da conta de origem:');
        let valor = parseFloat((0, readline_sync_1.question)("Digite o valor a ser distribuído:"));
        let contaOrigem = this.banco.consultarConta(numeroOrigem); //conta de origem
        //verificação da conta de origem
        if (!contaOrigem) {
            console.log("Conta de origem não encontrada!");
            return;
        }
        //pegando informações sobre as contas destino
        let contasDestino = [];
        let numContas = parseInt((0, readline_sync_1.question)("Digite o número de contas destino:"));
        //verificar se conta origem tem o valor suficiente
        let valorTotal = numContas * valor;
        if (contaOrigem.consultarSaldo() < valorTotal) {
            console.log("Saldo insuficiente!");
            return;
        }
        //para cada conta destino, vai ser solicitado o número da conta
        for (let i = 0; i < numContas; i++) {
            let numeroDestino = (0, readline_sync_1.question)('Digite o número da conta de destino:');
            let contaDestino = this.banco.consultarConta(numeroDestino);
            if (contaDestino) {
                contasDestino.push(contaDestino);
            }
            else {
                console.log("Conta de destino não encontrada!");
                return;
            }
        }
        //transferência
        for (let contaDestino of contasDestino) {
            this.banco.transferir(numeroOrigem, contaDestino.getNumero(), valor);
        }
        console.log("Ordem bancária realizada com sucesso!");
    }
    renderJurosBanco() {
        console.log("[ Render juros ]");
        let numeroConta = (0, readline_sync_1.question)('Digite o número da conta poupança:');
        this.banco.renderJuros(numeroConta);
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map