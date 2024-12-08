class Retangulo{
    altura: number;
    largura: number;

    constructor(altura:number, largura:number){
        this.altura = altura;
        this.largura = largura;
    }

    calcularArea(): number{
        return this.largura * this.altura;
    }

    calcularPerimetro(): number{
        return 2 * (this.largura + this.altura);
    }

    ehQuadrado(): boolean {
        return this.largura === this.altura;
    }
}

function main(){

    let retangulo1 = new retangulo(5,5);
    console.log("Área: " + retangulo1.calcularArea());
    console.log("Perímetro: " + retangulo1.calcularPerimetro());
    console.log("É quadrado? " + retangulo1.ehQuadrado());
}

main()