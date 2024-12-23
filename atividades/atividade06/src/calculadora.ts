class Calculadora{
    private operando1: number;
    private operando2: number;
    //construtor da classe
    constructor(opera1: number = 0, opera2: number = 0){
        this.operando1 = opera1;
        this.operando2 = opera2;
    }

    //soma né kkk
    public soma(): number{
        return this.operando1 + this.operando2;
    }
    //subtração
    public subtraction(): number{
        return this.operando1 - this.operando2;
    }
    //multiplicaçãozinha
    public multiplication(): number{
        return this.operando1 * this.operando2;
    }

}

//Testes
const operacao = new Calculadora(10, 5);
console.log(`Adição: ${operacao.soma()}`); // Adição: 15
console.log(`Subtração: ${operacao.subtraction()}`); // Subtração: 5
console.log(`Multiplicação: ${operacao.multiplication()}`); // Multiplicação: 50