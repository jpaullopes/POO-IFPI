import { Postagem } from "./postagem";

export class Microblog{
    private postagens : Postagem[]; //array de postagens

    constructor(){
        this.postagens = [];
    }
    //método que inclua uma postagem passada como parâmetro no array de postagens
    public incluirPostagem(postagem: Postagem): void{
        this.postagens.push(postagem);
    }

    //metodo que exclui uma postagem com base no id dela
    public excluirPostagem(id: number): void{
        let indPostagem : number = this.buscarIndicePostagem(id);
        if(indPostagem != -1){
            for(let i = indPostagem; i < this.postagens.length - 1; i++){
                this.postagens[i] = this.postagens[i + 1];
            }
        this.postagens.pop();
        }
    }

    //retornar indicie da postagem por base no id
    public buscarIndicePostagem(id: number): number{
        let indiceProcurado: number = -1;
        for(let i = 0; i < this.postagens.length; i++){
            if(this.postagens[i].getId() == id){
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    }

    //metodo que retorna a postagem mais curtida
    public postagemMaisCurtida(): Postagem{
        let maisCurtida : Postagem = this.postagens[0]; //pega a primeira postagem
        for(let postagem of this.postagens){
            if(postagem.getLikes() > maisCurtida.getLikes()){
                maisCurtida = postagem;
            }
        }
        return maisCurtida;
    }

    //metodo que busca uma postagem especifica com base no id dela
    public buscarPostagem(id: number): Postagem | null{//retorna uma postagem ou null(só pra ter certeza)
        for(let postagem of this.postagens){
            if(postagem.getId() == id){
                return postagem;
            }
        }
        return null; //retorna null se não encontrar a postagem
    }

    //método curtir em que se passa um id como parâmetro e aclasse microblog pesquisa a postagem e chama seu método curtir da própria postagem;
    public curtirPostagem(id: number): void{
        let postagem : Postagem | null = this.buscarPostagem(id);//tive que colocar null aqui porque né...
        if(postagem != null){
            postagem.curtir();
        }
    }

    //método toString que retorna a concatenação do “toString” de todas as postagens.
    public toString(): string{
        let todasPostagens : string = "";
        for(let postagem of this.postagens){
            todasPostagens += postagem.toString() + "\n";
        }
        return todasPostagens;
    }
}