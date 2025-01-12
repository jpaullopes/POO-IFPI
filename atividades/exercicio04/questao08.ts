class Equipamento{
    private ligado: boolean;

    constructor(ligado: boolean = false){
        this.ligado = ligado;
    }

    //metodo construtor
    public ligar() : void{
        if(this.ligado != true){
            this.ligado = true;
        }
    }
    //metodo que desliga o equipamento
    public desligar() : void{
        if(this.ligado != false){
            this.ligado = false;
        }
    }
    //metodo que inverte o estado do equipamento
    public inverter() : void{
        this.ligado = !this.ligado;
    }
    //metodo que retorna se o equipamento está ligado ou não
    public estaLigado(): boolean{
        return this.ligado;
    }
}

function main(){
    let equipamento : Equipamento = new Equipamento(); //como eu não passei nenhum argumento, o equipamento começa desligado

    console.log("Equipamento está ligado: " + equipamento.estaLigado()); //false
    equipamento.ligar();
    //verifica se o equipamento está ligado
    console.log("Equipamento está ligado: " + equipamento.estaLigado());//true
    //desliga o equipamento
    equipamento.desligar();
    console.log("Equipamento está ligado: " + equipamento.estaLigado()); //false
    //inverte o estado do equipamento
    equipamento.inverter();

    console.log("Equipamento está ligado: " + equipamento.estaLigado()); //true
}