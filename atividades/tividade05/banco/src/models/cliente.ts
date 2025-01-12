import { Conta } from "./conta";

export class Cliente{
    private id : number;
    private nome : string;
    private cpf : string;
    private dataNascimento : Date;
    private contas : Conta[];

    constructor(id: number = 0, nome: string = "", cpf: string = "", dataNascimento: Date = new Date()
    ,contas: Conta[] = []){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }

    public getCpf() : string{
        return this.cpf;
    }

    public getContas() : Conta[]{
        return this.contas;
    }

    public getId() : number{    
        return this.id;
    }

    public getNome() : string {
        return this.nome;
    }

    public getDataNascimento() : Date {
        return this.dataNascimento;
    }

    public adicionarConta(conta : Conta) : void{
        this.contas.push(conta);
    }
}