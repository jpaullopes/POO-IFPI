import { Cliente } from "./cliente";
import { Conta } from "./conta";

export class Banco{
    private contas : Conta[];
    private clientes : Cliente[];

    constructor(contas: Conta[] = [], clientes: Cliente[] = []) {
        this.contas = [];
        this.clientes = [];
    }

    public consultarConta(numero: string): Conta {
        let contaProcurada = new Conta();
        for (let conta of this.contas) {
            if (conta.getNumero() == numero) {
                contaProcurada = conta;
                break;
            }
        }
        return contaProcurada;
    }

    //retorna  indcie da conta no array de contas
    private consultarPorIndice(numero: string): number {
        let indiceProcurado: number = -1;

        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].getNumero() == numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    //remover uma conta com base no id
    public removerConta(numero: string): void {
        let indiceProcurado: number = this.consultarPorIndice(numero);

        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this.contas.length - 1; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }

    public consultarCliente(cpf: string): Cliente{
        let clienteProcurado  = new Cliente(); // O ponto de exclamação é para dizer que a variável não é nula
        for(let cliente of this.clientes){
            if(cliente.getCpf() == cpf){
                clienteProcurado = cliente;
                break;
            }
        }
        return clienteProcurado;
    }

    //depositar valor em uma conta
    public depositar(numero: string, valor: number): void {
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }

    //saca valor de uma conta
    public sacar(numero: string, valor: number): void {
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.sacar(valor);
        }
    }

    //alterar conta de um cliente
    public alterar(conta: Conta): void {
        let contaProcurada: Conta = this.consultarConta(conta.getNumero());

        if (contaProcurada) {
            contaProcurada = conta;
        }
    }

    public associarContaCliente(numeroConta: string, cpfCliente: string): void {
        let contaProcurada = this.consultarConta(numeroConta);
        let clienteProcurado = this.consultarCliente(cpfCliente);

        // verificando se o cliente possui a conta e que ela não pode ser adicionada novamente
        if (!clienteProcurado.getContas().some(conta => conta == contaProcurada)) { //tive que apelar para o some
            clienteProcurado.getContas().push(contaProcurada);
        }
    }

    public listarContasCliente(cpf: string): Conta[]{
        let clienteProcurado = this.consultarCliente(cpf);
        return clienteProcurado.getContas();
    }

    public totalizarSaldoCliente(cpf: string): number{
        let clienteProcurado = this.consultarCliente(cpf);
        let contasCliente = clienteProcurado.getContas();
        let saldoTotal = 0;

        for(let conta of contasCliente){
            saldoTotal += conta.consultarSaldo();
        }
        return saldoTotal;
    }

    public inserirCliente(cliente: Cliente): void{
        for(let verificadorCliente of this.clientes){
            if(verificadorCliente.getCpf() == cliente.getCpf() ||
                verificadorCliente.getId() == cliente.getId()){
                    return; // Se o cliente já existir, não insere
                }
        }
        this.clientes.push(cliente);
    }

    public inserirConta(conta: Conta): void{
        for(let verificadorConta of this.contas){
            if(verificadorConta.getNumero() == conta.getNumero() ||
                verificadorConta.getId() == conta.getId()){
                return; // Se a conta já existir, não insere
            }
        }
        this.contas.push(conta);
    }

    //transferir valor de uma conta para outra
    public transferir(numeroOrigem: string, numeroDestino: string, valor: number): void{
        let contaOrigem: Conta = this.consultarConta(numeroOrigem);
        let contaDestino: Conta = this.consultarConta(numeroDestino);

        if(contaOrigem && contaDestino){
            contaOrigem.sacar(valor);
            contaDestino.depositar(valor);
        }
    }

    //metodo que retorna a quantidade de contas
    public quantidadeContas(): number{
        let quantidade : number = 0;
        for(let conta of this.contas){
            quantidade++;
        }
        return quantidade;
    }

    //metodo que retorna a quantidade dos valorem em cada conta
    public totalizarSaldo(): number{
        let totalSaldo : number = 0;
        for(let conta of this.contas){
            totalSaldo += conta.consultarSaldo();
        }
        return totalSaldo;
    }

    //metodo que computa a media de saldo das contas
    public mediaSaldo(): number{
        let totalSaldo : number = this.totalizarSaldo();
        let quantidadeContas : number = this.quantidadeContas();
        return totalSaldo / quantidadeContas;
    }

    //método transferir que recebe um array de contas destino e realiza transferências para cada uma delas;
    public transferirParaVariasContas(numeroOrigem: string, contasDestino: string[], valor: number): void{
        let contaOrigem: Conta = this.consultarConta(numeroOrigem);

        //verificação se a conta é valida e foi encontrada
        if(contaOrigem){
            for(let numeroConta of contasDestino){
                let contaDestino : Conta = this.consultarConta(numeroConta);
                this.transferir(numeroOrigem, numeroConta, valor);
            }
        }
    }

    //metodo que altera o cliente de uma conta
    public alterarClienteConta(clienteCpf: string, conta: Conta) : void{
        let clienteProcurado = this.consultarCliente(clienteCpf);
        let indiceProcurado = this.consultarPorIndice(conta.getNumero());

        if(clienteProcurado && indiceProcurado != -1){
            this.contas[indiceProcurado].setCliente(clienteProcurado);
        }
    }

    //getters
    public getClientes(): Cliente[]{
        return this.clientes;
    }

    public getContas(): Conta[]{
        return this.contas;
    }

}