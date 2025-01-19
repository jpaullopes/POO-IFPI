import { Banco } from "./banco";
import { Cliente } from "./cliente";
import { Conta } from "./conta";
import { ContaPoupanca } from './contaPoupanca';
import { ContaImposto } from './contaImposto';
import { ContaSalario } from './contaSalario';
import { question } from 'readline-sync';
import { exibirContaFormatada, exibirClienteFormatado, exibirMenuConta } from '../utils/utilsExibicao';
import { lerContasDoArquivo, gravarContasNoArquivo } from '../utils/utilsLeituraArqvs';

export class App {
    private banco: Banco;

    constructor(banco: Banco = new Banco()) {
        this.banco = banco;
    }

    public inserirConta(): void {
        console.log("[ CADASTRO DE CONTA ]");
        let numero: string = question('Digite o número da conta:');
        let id: number = parseInt(question('Digite o id da conta:'));
        let saldo: number = parseFloat(question('Digite o saldo inicial da conta:'));
        let clienteCpf: string = question('Digite o cpf do cliente:');
        let cliente: Cliente = this.banco.consultarCliente(clienteCpf);
        if (cliente) {
            exibirMenuConta();
            let tipoConta = question('Digite o tipo da conta: ');
            let conta: Conta;

            if (tipoConta == '2') {
                let taxaJuros: number = parseFloat(question('Digite a taxa de juros da poupança:'));
                conta = new ContaPoupanca(id, numero, saldo, cliente, taxaJuros);
            } else if (tipoConta == '3') {
                let taxaImposto: number = parseFloat(question('Digite a taxa de imposto da conta:'));
                conta = new ContaImposto(id, numero, saldo, cliente, taxaImposto);
            } else if (tipoConta == '4') {
                let empregador: string = question('Digite o nome do empregador:');
                let limiteSaqueMensal: number = parseFloat(question('Digite o limite de saque mensal:'));
                conta = new ContaSalario(id, numero, saldo, cliente, empregador, limiteSaqueMensal);
            } else {
                conta = new Conta(id, numero, saldo, cliente);
            }

            this.banco.inserirConta(conta);
            console.log("Conta cadastrada com sucesso!");
        } else {
            console.log("Cliente não encontrado!");
        }
    }

    public inserirCliente(): void {
        console.log("[ CADASTRO DE CLIENTE ]");
        let id: number = parseInt(question('Digite o id do cliente:'));
        let nome: string = question('Digite o nome do cliente:');
        let cpf: string = question('Digite o cpf do cliente:');
        let dataNascimento: Date = new Date(question('Digite a data de nascimento do cliente:'));
        let cliente: Cliente = new Cliente(id, nome, cpf, dataNascimento);
        this.banco.inserirCliente(cliente);
        console.log("Cliente inserido com sucesso!");
    }

    public consultarConta(): void {
        console.log("[ Consultar conta ]");
        let numero: string = question('Digite o número da conta:');
        let conta: Conta = this.banco.consultarConta(numero);
        if (conta) {
            exibirContaFormatada(conta);
        } else {
            console.log("Conta não encontrada!");
        }
    }

    public consultarCliente(): void {
        console.log("[ Consultar cliente ]");
        let cpf: string = question('Digite o cpf do cliente:');
        let cliente: Cliente = this.banco.consultarCliente(cpf);
        if (cliente) {
            exibirClienteFormatado(cliente);
        } else {
            console.log("Cliente não encontrado!");
        }
    }

    public sacar(): void {
        console.log("[ Sacar ]");
        let numero: string = question('Digite o número da conta:');
        let valor: number = parseFloat(question('Digite o valor do saque:'));
        this.banco.sacar(numero, valor);
    }

    public depositar(): void {
        console.log("[ Depositar ]");
        let numero: string = question('Digite o número da conta:');
        let valor: number = parseFloat(question('Digite o valor do depósito:'));
        this.banco.depositar(numero, valor);
    }

    public excluirConta(): void {
        console.log("[ Excluir conta ]");
        let numero: string = question('Digite o número da conta:');
        this.banco.removerConta(numero);
    }

    public transferir(): void {
        console.log("[ Transferir ]");
        let numeroOrigem: string = question('Digite o número da conta de origem:');
        let numeroDestino: string = question('Digite o número da conta de destino:');
        let valor: number = parseFloat(question('Digite o valor da transferência:'));
        this.banco.transferir(numeroOrigem, numeroDestino, valor);
    }

    public totalizacoes(): void {
        console.log("[ Totalizações ]");
        console.log(`Total de contas: ${this.banco.quantidadeContas()}`);
        console.log(`Saldo total: ${this.banco.totalizarSaldo()}`);
        console.log(`Média de saldo: ${this.banco.mediaSaldo()}`);
    }

    public mudarTitularidade(): void {
        console.log("[ Mudar titularidade ]");
        let numero: string = question('Digite o número da conta:');
        let cpf: string = question('Digite o cpf do novo titular:');
        let cliente: Cliente = this.banco.consultarCliente(cpf);
        if (cliente) {
            this.banco.mudarTitularidadeConta(numero, cpf);
            console.log("Titularidade alterada com sucesso!");
        } else {
            console.log("Cliente não encontrado!");
        }
    }

    public excluirCliente(): void {
        console.log("[ Excluir cliente ]");
        let cpf: string = question('Digite o cpf do cliente:');
        this.banco.removerCliente(cpf);
    }

    public atribuirTitular(): void {
        console.log("[ Atribuir titular ]");
        let cpf: string = question('Digite o cpf do titular:');
        let contas: Conta[] = this.banco.consultarContasSemTitular();
        if (contas.length == 0) {
            console.log("Não há contas sem titular!");
        } else {
            for (let conta of contas) {
                this.banco.mudarTitularidadeConta(conta.getNumero(), cpf);
            }
            console.log("Titular atribuído com sucesso!");
        }
    }

    public ordemBancaria(): void {
        console.log("[ Ordem bancária ]");
        let numeroOrigem: string = question('Digite o número da conta de origem:');
        let valor: number = parseFloat(question("Digite o valor a ser distribuído:"));

        let contaOrigem: Conta = this.banco.consultarConta(numeroOrigem);
        if (!contaOrigem) {
            console.log("Conta de origem não encontrada!");
            return;
        }

        let contasDestino: Conta[] = [];
        let numContas: number = parseInt(question("Digite o número de contas destino:"));

        let valorTotal: number = numContas * valor;
        if (contaOrigem.consultarSaldo() < valorTotal) {
            console.log("Saldo insuficiente!");
            return;
        }

        for (let i: number = 0; i < numContas; i++) {
            let numeroDestino: string = question('Digite o número da conta de destino:');
            let contaDestino: Conta = this.banco.consultarConta(numeroDestino);
            if (contaDestino) {
                contasDestino.push(contaDestino);
            } else {
                console.log("Conta de destino não encontrada!");
                return;
            }
        }

        for (let contaDestino of contasDestino) {
            this.banco.transferir(numeroOrigem, contaDestino.getNumero(), valor);
        }
        console.log("Ordem bancária realizada com sucesso!");
    }

    public renderJurosBanco(): void {
        console.log("[ Render juros ]");
        let numeroConta: string = question('Digite o número da conta poupança:');
        this.banco.renderJuros(numeroConta);
    }

    public carregarContas(): void {
        const caminho = "contas.txt";
        const contas = lerContasDoArquivo(caminho);
        for (const conta of contas) {
            this.banco.inserirConta(conta);
        }
        console.log("Contas carregadas com sucesso!");
    }

    public salvarContas(): void {
        const caminho = "contas.txt";
        gravarContasNoArquivo(caminho, this.banco.getContas());
        console.log("Contas salvas com sucesso!");
    }
}