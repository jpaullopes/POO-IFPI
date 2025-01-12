class Jogador{
    private forca : number;
    private nivel : number;
    private vida : number;

    constructor(forca : number, nivel : number, vida : number){
        this.forca = forca;
        this.nivel = nivel;
        this.vida = vida;
    }

    public calcularAtaque() : number{
        return this.forca * this.nivel;
    }

    public atacar(jogador : Jogador) : void{
        if(jogador.estaVivo()){
        jogador.vida -= this.calcularAtaque();
        }
    }

    public estaVivo() : boolean{
        if(this.vida > 0){
            return true;
        }
        return false;
    }

    public toString() : string{
        return "[ Força: " + this.forca + "| Nível: " + this.nivel + "| Vida: " + this.vida + " ]";
    }
}

function main(){
    let jogador1 : Jogador = new Jogador(10, 1, 100);
    let jogador2 : Jogador = new Jogador(5, 1, 100);

    console.log("Jogador 1: " + jogador1.toString());
    console.log("Jogador 2: " + jogador2.toString());

    jogador1.atacar(jogador2);

    console.log("Jogador 1: " + jogador1.toString());
    console.log("Jogador 2: " + jogador2.toString());
}

main();