class Radio {
    private volume : number;

    constructor(volume : number) {
    this.volume = volume;
    }
    //função responsável por retornar o volume do rádio
    public getVolume() : number {
        return this.volume;
    }
    //função responsável por alterar o volume do rádio
    public setVolume(volume : number) : void {
        this.volume = volume;
    }
}

//let r : Radio = new Radio(); 
//EXPLICAÇÃO : Nesse trecho de código, o construtor da classe Radio espera um argumento, que é o volume. Portanto, é necessário passar um argumento para o construtor da classe Radio.

function main() {
//Solução: passar um argumento para o construtor da classe Radio
    let radio : Radio = new Radio(10);
    radio.setVolume(10); //altera o volume do rádio
    console.log(radio.getVolume()); 
}

main();