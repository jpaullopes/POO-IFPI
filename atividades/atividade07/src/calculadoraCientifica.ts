//objetivo é fazer a calculadora científica herdar da calculadora simples e adicionar a funcionalidade de exponencial
import { CalculadoraSimples } from './calculadoraSimples';

class CalculadoraCientifica extends CalculadoraSimples {
    constructor(operandoUm: number, operandoDois: number) {
        super(operandoUm, operandoDois);
    }

    public exponencial(): number {
        return Math.pow(this.operandoUm, this.operandoDois);
    }
}

//teste
let calculadoraCientifica = new CalculadoraCientifica(2, 3);
console.log(calculadoraCientifica.somar()); //5
console.log(calculadoraCientifica.exponencial()); //8