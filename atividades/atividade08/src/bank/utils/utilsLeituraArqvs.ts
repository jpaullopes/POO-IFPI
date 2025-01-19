import { readFileSync, writeFileSync } from 'fs';
import { Conta } from '../models/conta';
import { Poupanca } from '../models/contaPoupanca';
import { ContaImposto } from '../models/contaImposto';
import { Cliente } from '../models/cliente';

export function lerContasDoArquivo(caminho: string): Conta[] {
    const contas: Conta[] = [];
    const dados = readFileSync(caminho, 'utf-8');
    const linhas = dados.split('\n');

    for (const linha of linhas) {
        const campos = linha.split(';');
        const tipoConta = campos[0];
        const numero = campos[1];
        const saldo = parseFloat(campos[2]);
        const id = parseInt(campos[3]);
        const nomeCliente = campos[4];
        const cliente = new Cliente(id, nomeCliente);

        let conta: Conta;
        if (tipoConta === 'CP') {
            const taxaJuros = parseFloat(campos[5]);
            conta = new Poupanca(id, numero, saldo, cliente, taxaJuros);
        } else if (tipoConta === 'CI') {
            const taxaImposto = parseFloat(campos[5]);
            conta = new ContaImposto(id, numero, saldo, cliente, taxaImposto);
        } else {
            conta = new Conta(id, numero, saldo, cliente);
        }

        contas.push(conta);
    }

    return contas;
}

export function gravarContasNoArquivo(caminho: string, contas: Conta[]): void {
    const linhas: string[] = [];

    for (const conta of contas) {
        let linha = `${conta.constructor.name};${conta.getNumero()};${conta.consultarSaldo()};${conta.getId()};${conta.getCliente().getNome()}`;
        if (conta instanceof Poupanca) {
            linha += `;${conta.getJuros()}`;
        } else if (conta instanceof ContaImposto) {
            linha += `;${conta.getImposto()}`;
        }
        linhas.push(linha);
    }

    const dados = linhas.join('\n');
    writeFileSync(caminho, dados, 'utf-8');
}