export class Postagem{
    private id: number;
    private texto: string;
    private likes: number;

    constructor(id: number = 0, texto: string = "", likes: number = 0){
        this.id = id;
        this.texto = texto;
        this.likes = likes;
    }

    //metodo responsavél por incrementar o numero de likes
    public curtir(): void{
        this.likes++;
    }

    //retorna a concatenação da postagem com a quantidade de curtidas
    public toString() : string{
        return this.texto + " - " + this.likes + " curtidas";
    }

    //getters e setters
    //getter do id
    public getId(): number{
        return this.id;
    }
    //getter likes
    public getLikes(): number{
        return this.likes;
    }

}