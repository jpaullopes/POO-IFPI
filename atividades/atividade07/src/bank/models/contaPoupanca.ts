import { Conta } from "./conta";
import { Cliente } from "./cliente";
//a nov clase da questão é a ContaPoupanca que vai herdar de Conta
//adicionando o metodo de calcularJuros
export class ContaPoupanca extends Conta {
    private _juros: number;

    constructor(id: number = 0, numero: string = "", saldo: number = 0, cliente: Cliente = new Cliente(), juros: number = 0) {
        super(id, numero, saldo, cliente);
        this._juros = juros;
    }

    public calcularJuros(): void {
        this.depositar(this.consultarSaldo() * this._juros);
    }
}