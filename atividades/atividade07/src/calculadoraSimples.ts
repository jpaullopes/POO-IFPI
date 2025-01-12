//obejetivo da questão é criar uma calculadora simples que vai somar dois números
export class CalculadoraSimples{
    protected operandoUm: number;
    protected operandoDois: number;

    constructor(operandoUm: number, operandoDois: number){
        this.operandoUm = operandoUm;
        this.operandoDois = operandoDois;
    }

    public somar(): number{
        return this.operandoUm + this.operandoDois;
    }
}

//teste da classe

let calculadora = new CalculadoraSimples(2,3);
console.log(calculadora.somar()); //5