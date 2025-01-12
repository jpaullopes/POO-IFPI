"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
const cliente_1 = require("./cliente");
const conta_1 = require("./conta");
const contaPoupanca_1 = require("./contaPoupanca");
//deus isso tá ficando cada dia maior...não sei mais nem quais são os metodos que tem em cada classe kkkkk
class Banco {
    constructor(contas = [], clientes = []) {
        this.contas = [];
        this.clientes = [];
    }
    //consulta uma conta com base no numero
    consultarConta(numero) {
        let contaProcurada = new conta_1.Conta();
        for (let conta of this.contas) {
            if (conta.getNumero() == numero) {
                contaProcurada = conta;
                break;
            }
        }
        return contaProcurada;
    }
    //retorna  indcie da conta no array de contas
    consultarPorIndice(numero) {
        let indiceProcurado = -1;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].getNumero() == numero) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    }
    //remover uma conta com base no id
    removerConta(numero) {
        let indiceProcurado = this.consultarPorIndice(numero);
        let clienteDonoConta = this.contas[indiceProcurado].getCliente(); //pega o cliente dono da conta
        if (indiceProcurado != -1) { //verifica se a conta foi encontrada
            clienteDonoConta.removerConta(numero); //faz com que a conta seja removida do array de contas do cliente
            for (let i = indiceProcurado; i < this.contas.length - 1; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }
    //remover um cliente com base no cpf
    removerCliente(cpf) {
        let clienteProcurado = this.consultarCliente(cpf);
        let contasCliente = clienteProcurado.getContas();
        for (let conta of contasCliente) {
            conta.setCliente(new cliente_1.Cliente()); //remove o cliente de todas as contas, adiciona um cliente vazio
        }
        this.clientes = this.clientes.filter(cliente => cliente.getCpf() !== cpf);
        //a forma de remover o cliente acima é mais intendivél do que a da de remover conta
        //lembrar de usar o filter mais vezes
    }
    //consulta um cliente com base no cpf
    consultarCliente(cpf) {
        let clienteProcurado = new cliente_1.Cliente(); // O ponto de exclamação é para dizer que a variável não é nula
        for (let cliente of this.clientes) {
            if (cliente.getCpf() == cpf) {
                clienteProcurado = cliente;
                break;
            }
        }
        return clienteProcurado;
    }
    //depositar valor em uma conta
    depositar(numero, valor) {
        let contaProcurada = this.consultarConta(numero);
        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }
    //saca valor de uma conta
    sacar(numero, valor) {
        let contaProcurada = this.consultarConta(numero);
        if (contaProcurada) {
            contaProcurada.sacar(valor);
        }
    }
    //alterar conta de um cliente
    alterar(conta) {
        let contaProcurada = this.consultarConta(conta.getNumero());
        if (contaProcurada) {
            contaProcurada = conta;
        }
    }
    //associar uma conta a um cliente
    associarContaCliente(numeroConta, cpfCliente) {
        let contaProcurada = this.consultarConta(numeroConta);
        let clienteProcurado = this.consultarCliente(cpfCliente);
        // verificando se o cliente possui a conta e que ela não pode ser adicionada novamente
        if (!clienteProcurado.getContas().some(conta => conta == contaProcurada)) { //tive que apelar para o some
            clienteProcurado.getContas().push(contaProcurada);
        }
    }
    //listar contas de um cliente
    listarContasCliente(cpf) {
        let clienteProcurado = this.consultarCliente(cpf);
        return clienteProcurado.getContas();
    }
    //totalizar saldo de um cliente
    totalizarSaldoCliente(cpf) {
        let clienteProcurado = this.consultarCliente(cpf); //procura o cliente
        let contasCliente = clienteProcurado.getContas(); //pega as contas do cliente
        let saldoTotal = 0;
        for (let conta of contasCliente) {
            saldoTotal += conta.consultarSaldo();
        }
        return saldoTotal;
    }
    //método que insere um cliente no array de clientes
    inserirCliente(cliente) {
        for (let verificadorCliente of this.clientes) {
            if (verificadorCliente.getCpf() == cliente.getCpf() ||
                verificadorCliente.getId() == cliente.getId()) {
                return; // Se o cliente já existir, não insere
            }
        }
        this.clientes.push(cliente);
    }
    //método que insere uma conta no array de contas
    inserirConta(conta) {
        for (let verificadorConta of this.contas) {
            if (verificadorConta.getNumero() == conta.getNumero() ||
                verificadorConta.getId() == conta.getId()) {
                return; // Se a conta já existir, não insere
            }
        }
        this.contas.push(conta);
    }
    //transferir valor de uma conta para outra
    transferir(numeroOrigem, numeroDestino, valor) {
        let contaOrigem = this.consultarConta(numeroOrigem);
        let contaDestino = this.consultarConta(numeroDestino);
        if (contaOrigem && contaDestino) {
            contaOrigem.sacar(valor);
            contaDestino.depositar(valor);
        }
    }
    //metodo que retorna a quantidade de contas
    quantidadeContas() {
        let quantidade = 0;
        for (let conta of this.contas) {
            quantidade++;
        }
        return quantidade;
    }
    //metodo que retorna a quantidade dos valorem em cada conta
    totalizarSaldo() {
        let totalSaldo = 0;
        for (let conta of this.contas) {
            totalSaldo += conta.consultarSaldo();
        }
        return totalSaldo;
    }
    //metodo que computa a media de saldo das contas
    mediaSaldo() {
        let totalSaldo = this.totalizarSaldo();
        let quantidadeContas = this.quantidadeContas();
        return totalSaldo / quantidadeContas;
    }
    //método transferir que recebe um array de contas destino e realiza transferências para cada uma delas;
    transferirParaVariasContas(numeroOrigem, contasDestino, valor) {
        let contaOrigem = this.consultarConta(numeroOrigem);
        //verificação se a conta é valida e foi encontrada
        if (contaOrigem) {
            for (let numeroConta of contasDestino) {
                let contaDestino = this.consultarConta(numeroConta);
                this.transferir(numeroOrigem, numeroConta, valor);
            }
        }
    }
    //metodo que altera o cliente de uma conta
    alterarClienteConta(clienteCpf, conta) {
        let clienteProcurado = this.consultarCliente(clienteCpf);
        let indiceProcurado = this.consultarPorIndice(conta.getNumero());
        if (clienteProcurado && indiceProcurado != -1) {
            this.contas[indiceProcurado].setCliente(clienteProcurado);
        }
    }
    //metodo que muda a tiularidade de uma conta
    mudarTitularidadeConta(numeroConta, cpfCliente) {
        let contaProcurada = this.consultarConta(numeroConta);
        let clienteProcurado = this.consultarCliente(cpfCliente);
        //verificação se o cliente e conta existem
        if (clienteProcurado && contaProcurada) {
            contaProcurada.setCliente(clienteProcurado);
        }
    }
    //consultar contas sem um titular e retorna um array de contas
    consultarContasSemTitular() {
        let contasSemTitular = this.contas.filter(conta => conta.getCliente().getCpf() == ""); //filter salva
        return contasSemTitular;
    }
    //a função de render juros que a questão pede
    renderJuros(numeroConta) {
        let contaProcurada = this.consultarConta(numeroConta);
        if (contaProcurada instanceof contaPoupanca_1.ContaPoupanca) { //usando o insatanceof para verificar se a conta é uma conta poupança
            contaProcurada.calcularJuros(); //usando um cast pra chamar o calcularJuros()
        }
        else {
            console.log("A conta não é uma conta poupança!");
        }
    }
    //getters
    getClientes() {
        return this.clientes;
    }
    getContas() {
        return this.contas;
    }
}
exports.Banco = Banco;
//# sourceMappingURL=banco.js.map