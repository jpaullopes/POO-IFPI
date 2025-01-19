import { Produto } from "./produto";
import { ProdutoPerecivel } from "./produtoPerecivel";

class Estoque{
    private _produtos : Array<Produto>; //um array de produtos

    constructor(){
        this._produtos = new Array<Produto>();
    }

    //metodo que insere um produto no estoque(de forma ordenada)
    public inserirProduto(produto : Produto): boolean{
        //isere de uma forma ordenada
        if(this.existe(produto.getIdentificador(), produto.getDescricao())){
            return false;
        }else{
            let index = this._produtos.findIndex(p => p.getIdentificador() > produto.getIdentificador());
            if (index === -1) {
                this._produtos.push(produto); // Adiciona no final se não encontrar um maior
            } else {
                this._produtos.splice(index, 0, produto); // Insere na posição correta
            }
            return true;
        }
    }
    //metodo que consulta produto pelo identificador
    public consultarProduto(identificador : string): Produto | undefined{
        //procura o produto no array de produtos se não achar retorna um novo produto
        let produto = this._produtos.find(produto => produto.getIdentificador() == identificador);
        return produto;
    }

    //metodo que remove um produto do estoque
    public excluirProduto(identificador : string): boolean{
        //procura o produto no array de produtos
        if(this.consultarProduto(identificador)){ //verifica se existe
            let index = this._produtos.findIndex(produto => produto.getIdentificador() == identificador);
            //se achar o produto remove
            //faz com que os produtos atrás do produto removido sejam movidos para frente ocupando a posição do procurado
            for(let i = index; i < this._produtos.length - 1; i++){
                this._produtos[i] = this._produtos[i + 1];
            }
            //vai remover o ultimo produto
            this._produtos.pop();
            return true;
        }else{
            return false;
        }
    }

    //repor estoque
    public reporEstoque(identificador : string, quantidade : number): boolean{
        //procura o produto no array de produtos
        if(this.consultarProduto(identificador)){ //faz verificação se existe
            let produto = this.consultarProduto(identificador);
            if(produto){
                produto.reporEstoque(quantidade);
            }
            return true;
        }else{
            return false;
        }
    }

    //dar baixa no estoque
    public darBaixaEstoque(identificador : string, quantidade : number): boolean{
        //procura o produto no array de produtos
        if(this.consultarProduto(identificador)){ //verifica se existe
            let produto = this.consultarProduto(identificador);
            if(produto){
                produto.darBaixaEstoque(quantidade);
            }
            return true;
        }else{
            return false;
        }
    }

    //metodo que verifica se o produto já existe 
    public existe(identificador : string, descricao: string): boolean{
        let produto = this.consultarProduto(identificador);
        //procurando pela mesma descrição
        let produto2 = this._produtos.find(produto => produto.getDescricao() == descricao);
        if(produto || produto2){
            return true;
        }else{
            return false;
        }
    }

    //método que liste todos os produtos perecíveis vencidos.
    public listarProdutosVencidos(): Array<Produto>{
        let produtosVencidos = new Array<Produto>(); 

        for(let produto of this._produtos){ 
            if(produto instanceof ProdutoPerecivel){ //se o produto for uma instacia de produtoPerecivel ele verifica se
                if((produto as ProdutoPerecivel).ehVencido()){ //tá vencido ou não
                    produtosVencidos.push(produto);
                }
            }
        }
        return produtosVencidos;
    }
}