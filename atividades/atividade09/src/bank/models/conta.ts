import { Cliente } from './cliente';

export class Conta {
    private id: number;
    private numero: string;
    private saldo: number;
    private cliente: Cliente;

    constructor(id: number, numero: string, saldo: number, cliente: Cliente) {
        this.validaValor(saldo);
        this.id = id;
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    public sacar(valor: number): void {
        this.validaValor(valor);
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            throw new Error("Saldo insuficiente.");
        }
    }

    public depositar(valor: number): void {
        this.validaValor(valor);
        this.saldo += valor;
    }

    private validaValor(valor: number): void {
        if (isNaN(valor) || valor <= 0) {
            throw new Error("Valor inválido.");
        }
    }

    public consultarSaldo(): number {
        return this.saldo;
    }

    public getNumero(): string {
        return this.numero;
    }

    public getId(): number {
        return this.id;
    }

    public setCliente(cliente: Cliente): void {
        this.cliente = cliente;
    }

    public getCliente(): Cliente {
        return this.cliente;
    }
}