class Saudacao{
    private texto : string; //criação do atributo texto
    private destinatario : string; //criação do atributo destinatario

    constructor(texto : string, destinatario : string){ //criação do construtor
        this.texto = texto;
        this.destinatario = destinatario;
    }

    public obterSaudacao() : string{ //criação do método obterSaudacao que retorna a concatenação do texto e do destinatario
        return this.texto + " " + this.destinatario;
    }
}

function main(){
    let saudacao : Saudacao = new Saudacao("Bom dia", "João");
    console.log(saudacao.obterSaudacao());
}