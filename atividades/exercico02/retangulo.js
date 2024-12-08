var retangulo = /** @class */ (function () {
    function retangulo(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
    retangulo.prototype.calcularArea = function () {
        return this.largura * this.altura;
    };
    retangulo.prototype.calcularPerimetro = function () {
        return 2 * (this.largura + this.altura);
    };
    retangulo.prototype.ehQuadrado = function () {
        return this.largura === this.altura;
    };
    return retangulo;
}());
function main() {
    var retangulo1 = new retangulo(5, 5);
    console.log("Área: " + retangulo1.calcularArea());
    console.log("Perímetro: " + retangulo1.calcularPerimetro());
    console.log("É quadrado? " + retangulo1.ehQuadrado());
}
main();
