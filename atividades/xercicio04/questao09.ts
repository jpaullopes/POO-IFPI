class Conta {
    private numero: String;
    private saldo: number;
    //construtor estava omitido | não está mais
    //não farei a adição de get e set para número da conta pois a questão não demanda isso
    constructor(numero: String, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    public setSaldo(saldo: number): void {
        this.saldo = saldo;
    }
    public consultarSaldo(): number { //metodo consultarSaldo | É o getSaldo()
        return this.saldo;
    }

    public sacar(valor: number): boolean { //metodo sacar corrigido
        if(this.consultarSaldo() - valor < 0){ //verifica se o saldo é suficiente para o saque
            return false;
        }
        this.setSaldo(this.consultarSaldo() - valor);
        return true;
    }
    public depositar(valor: number): void { //metodo depositar 
        this.setSaldo(this.saldo + valor);
    }
    public transferir(contaDestino: Conta, valor: number): boolean { //metodo transferir | tem uma conta destino e faz o saque da conta atual e transferencia para a conta destino
        if(this.sacar(valor)){
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
}

function main() {
    let conta1: Conta = new Conta("123", 1000);
    let conta2: Conta = new Conta("456", 500);

    console.log("Saldo da conta 1: " + conta1.consultarSaldo());
    console.log("Saldo da conta 2: " + conta2.consultarSaldo());
    //transferir 250 da conta 1 para a conta 2
    conta1.transferir(conta2, 250);
    console.log("Saldo da conta 1: " + conta1.consultarSaldo());
    console.log("Saldo da conta 2: " + conta2.consultarSaldo());
}

main();
