"use strict";
class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
    calcularArea() {
        return this.largura * this.altura;
    }
    calcularPerimetro() {
        return 2 * (this.largura + this.altura);
    }
    ehQuadrado() {
        return this.largura === this.altura;
    }
}
function main() {
    let retangulo1 = new retangulo(5, 5);
    console.log("Área: " + retangulo1.calcularArea());
    console.log("Perímetro: " + retangulo1.calcularPerimetro());
    console.log("É quadrado? " + retangulo1.ehQuadrado());
}
main();
