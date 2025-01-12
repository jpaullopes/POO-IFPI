//Objetivo da questão é evitar repetições de atributo em classes semelhantes e evitar a duplicação de código.
//classe veiculo que vai ser herdada por Carro e CarroEletrico
class Veiculo {
    protected placa: String;
    protected ano: number;

    constructor(placa: String, ano: number) {
        this.placa = placa;
        this.ano = ano;
    }
}
//classse Carro que vai herdar de Veiculo
class Carro extends Veiculo{
    protected modelo: String;

    constructor(placa: String, ano: number, modelo: String) {
        super(placa, ano);
        this.modelo = modelo;
    }
}
//classe CarroEletrico que vai herdar de Carro
class CarroEletrico extends Carro{
    private autonomiaBateria: number;

    constructor(placa: String, ano: number, modelo: String, autonomiaBateria: number) {
        super(placa, ano, modelo);
        this.autonomiaBateria = autonomiaBateria;
    }
}