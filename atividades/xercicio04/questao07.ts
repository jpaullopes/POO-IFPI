class Triangulo { //classe triangulo simples
    private ladoA: number;
    private ladoB: number;
    private ladoC: number;

    constructor(ladoA: number, ladoB: number, ladoC: number) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    public verificadorTriangulo() : boolean{ //regra usada |b-c| < a < b+c para verificar se é um triangulo
        if(Math.abs(this.ladoB - this.ladoC) < this.ladoA && this.ladoA < this.ladoB + this.ladoC){
            return true;
        }
        return false;
    }

    public ehIsosceles() : boolean{ //verificar se é um triangulo isosceles
        if(this.verificadorTriangulo()){ //verifica primeiro se é realmente um triangulo
            if(this.ladoA == this.ladoB || this.ladoA == this.ladoC || this.ladoB == this.ladoC){
                return true;
            }
        }

        return false;
    }

    public ehEquilatero() : boolean{ //verificar se é um triangulo equilatero
        if(this.verificadorTriangulo()){ //verifica primeiro se é realmente um triangulo
            if(this.ladoA == this.ladoB && this.ladoA == this.ladoC){
                return true;
            }
        }

        return false;
    }

    public ehEscaleno() : boolean{ //verificar se é um triangulo escaleno
        if(this.verificadorTriangulo()){ //verifica primeiro se é realmente um triangulo
            if(this.ladoA != this.ladoB && this.ladoA != this.ladoC && this.ladoB != this.ladoC){
                return true;
            }
        }

        return false;
    }
}

function main(){
    let triangulo : Triangulo = new Triangulo(3, 5, 4);
    //verificar se é um triangulo
    console.log("É um triângulo: " + triangulo.verificadorTriangulo()); //true
    console.log("É um triângulo Isoceles: " + triangulo.ehIsosceles()); //false
    console.log("É um triângulo Equilatero: " + triangulo.ehEquilatero()); //false
    console.log("É um triângulo Escaleno: " + triangulo.ehEscaleno()); //true
}

main();