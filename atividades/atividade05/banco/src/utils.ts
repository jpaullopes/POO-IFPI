import { question } from 'readline-sync';
import { Conta } from './models/conta';
import { Cliente } from './models/cliente';
import { Banco } from './models/banco';

export function inserirConta(banco: Banco): void {
    console.log("\nCadastrar conta\n");
    let numero: string = question('Digite o número da conta:');
    let id: number = parseInt(question('Digite o id da conta:'));
    let saldo: number = parseFloat(question('Digite o saldo inicial da conta:'));
    let clienteId: number = parseInt(question('Digite o id do cliente:'));
    let cliente: Cliente = banco.consultarCliente(clienteId.toString());
    let conta: Conta = new Conta(id, numero, saldo, cliente);
    banco.inserirConta(conta);
}

export function consultarConta(banco: Banco): void {
    console.log("\nConsultar conta\n");
    let numero: string = question('Digite o número da conta:');
    let conta: Conta = banco.consultarConta(numero);
    console.log(conta);
}

export function sacar(banco: Banco): void {
    console.log("\nSacar\n");
    let numero: string = question('Digite o número da conta:');
    let valor: number = parseFloat(question('Digite o valor do saque:'));
    banco.sacar(numero, valor);
}

export function depositar(banco: Banco): void {
    console.log("\nDepositar\n");
    let numero: string = question('Digite o número da conta:');
    let valor: number = parseFloat(question('Digite o valor do depósito:'));
    banco.depositar(numero, valor);
}

export function excluirConta(banco: Banco): void {
    console.log("\nExcluir conta\n");
    let numero: string = question('Digite o número da conta:');
    banco.removerConta(numero);
}

export function transferir(banco: Banco): void {
    console.log("\nTransferir\n");
    let numeroOrigem: string = question('Digite o número da conta de origem:');
    let numeroDestino: string = question('Digite o número da conta de destino:');
    let valor: number = parseFloat(question('Digite o valor da transferência:'));
    banco.transferir(numeroOrigem, numeroDestino, valor);
}

export function totalizacoes(banco: Banco): void {
    console.log("\nTotalizações\n");
    console.log('Total de contas: ' + banco.quantidadeContas());
    console.log('Saldo total: ' + banco.totalizarSaldo());
    console.log('Média de saldo: ' + banco.mediaSaldo());
}

export function inserirCliente(banco: Banco): void {
    console.log("\nCadastrar cliente\n");
    let id: number = parseInt(question('Digite o id do cliente:'));
    let nome: string = question('Digite o nome do cliente:');
    let cpf: string = question('Digite o CPF do cliente:');
    let dataNascimento: Date = new Date(question('Digite a data de nascimento do cliente (aaaa-mm-dd):'));
    let cliente: Cliente = new Cliente(id, nome, cpf, dataNascimento);
    banco.inserirCliente(cliente);
}

export function consultarCliente(banco: Banco): void {
    console.log("\nConsultar cliente\n");
    let cpf: string = question('Digite o CPF do cliente:');
    let cliente: Cliente = banco.consultarCliente(cpf);
    console.log(cliente);
}

export function associarContaCliente(banco: Banco): void {
    console.log("\nAssociar conta a cliente\n");
    let numeroConta: string = question('Digite o número da conta:');
    let cpfCliente: string = question('Digite o CPF do cliente:');
    banco.associarContaCliente(numeroConta, cpfCliente);
}