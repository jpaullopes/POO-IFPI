import { Conta } from "./conta";
import { Cliente } from "./cliente";

export class ContaImposto extends Conta {
    private _imposto: number;

    constructor(id: number = 0, numero: string = "", saldo: number = 0, cliente: Cliente = new Cliente(), imposto: number = 0) {
        super(id, numero, saldo, cliente);
        this._imposto = imposto;
    }

    public debitar(valor: number): void {
        super.sacar(valor + (valor * this._imposto));
    }

    public getImposto(): number {
        return this._imposto;
    }
}