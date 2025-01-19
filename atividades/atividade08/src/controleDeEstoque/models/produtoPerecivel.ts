import { Produto } from "./produto";

export class ProdutoPerecivel extends Produto{
    private _dataValidade : Date;

    constructor(identificador: string = "", descricao: string = "", quantidade: number = 0, valorUnitario: number = 0, dataValidade: Date = new Date(1111, 1, 1)){
        super(identificador, descricao, quantidade, valorUnitario);
        this._dataValidade = dataValidade;
    }
    
    //getters
    public getDataValidade() : string{ //retorna a datade validade do produto dia/mês/ano
        return `this._dataValidade.getDate()-${this._dataValidade.getMonth()}-${this._dataValidade.getFullYear()}`;
    }
    //getter de dataValidade normal
    public getterModificadoDataValidade() : Date{
        return this._dataValidade;
    }
    //metodo que reotona se o produto está ou não válido
    public ehVencido(): boolean{
        let hoje = new Date();
        if(this.getterModificadoDataValidade() < hoje){
            return true;
        }
        return false;
    }

    //sobrescrevendo o metodo reporEstoque
    public reporEstoque(quantidade : number): void{
        if(this.ehVencido()){
            console.log("Produto vencido, não pode ser reposto");
        }else{
            super.reporEstoque(quantidade);
        }
    }

    //sobrescrevendo o metodo darBaixaEstoque
    public darBaixaEstoque(quantidade : number): void{
        if(this.ehVencido()){
            console.log("Produto vencido, não pode ser vendido");
        }else{
            super.darBaixaEstoque(quantidade);
        }
    }

}