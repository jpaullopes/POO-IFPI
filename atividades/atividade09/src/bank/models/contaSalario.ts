import { Conta } from './conta';
import { Cliente } from './cliente';

export class ContaSalario extends Conta {
    private _limiteSaqueMensal: number;
    private _saquesRealizados: number;
    private _empregador: string;

    constructor(id: number, numero: string, saldo: number, cliente: Cliente, empregador: string, limiteSaqueMensal: number) {
        super(id, numero, saldo, cliente);
        this._empregador = empregador;
        this._limiteSaqueMensal = limiteSaqueMensal;
        this._saquesRealizados = 0;
    }

    public sacar(valor: number): void {
        if (this._saquesRealizados + valor > this._limiteSaqueMensal) {
            console.log("Limite de saque mensal excedido!");
        } else {
            super.sacar(valor);
            this._saquesRealizados += valor;
        }
    }

    public depositarSalario(valor: number, depositante: string): void {
        if (depositante === this._empregador) {
            super.depositar(valor);
        } else {
            console.log("Apenas o empregador pode fazer depósitos nesta conta!");
        }
    }

    public getLimiteSaqueMensal(): number {
        return this._limiteSaqueMensal;
    }

    public getSaquesRealizados(): number {
        return this._saquesRealizados;
    }

    public getEmpregador(): string {
        return this._empregador;
    }
}