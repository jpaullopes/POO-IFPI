export class Produto{
    private _identificador : string;
    private _descricao : string;
    private _quantidade : number;
    private _valorUnitario : number;

    constructor(identificador: string = "", descricao: string = "", quantidade: number = 0, valorUnitario: number = 0){
        this._identificador = identificador;
        this._descricao = descricao;
        this._quantidade = quantidade;
        this._valorUnitario = valorUnitario;
    }

    //metodos
    //metodo que repões o estoque
    public reporEstoque(quantidade : number): void{
        this._quantidade += quantidade;
    }
    //metodo que retira do estoque
    public darBaixaEstoque(quantidade : number): void{
        this._quantidade -= quantidade;
    }

    //getters
    public getIdentificador() : string{
        return this._identificador;
    }
    public getDescricao() : string{
        return this._descricao;
    }
    public getQuantidade() : number{
        return this._quantidade;
    }
    public getValorUnitario() : number{
        return this._valorUnitario;
    }
    
}