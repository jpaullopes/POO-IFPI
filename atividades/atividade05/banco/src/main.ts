import { Banco } from './models/banco';
import { Cliente } from './models/cliente';
import { Conta } from './models/conta';

const banco = new Banco();

const cliente1 = new Cliente(1, "João Silva", "123.456.789-00", new Date(1990, 1, 1));
const cliente2 = new Cliente(2, "Maria Oliveira", "987.654.321-00", new Date(1985, 5, 15));

//inserindo clientes no banco
banco.inserirCliente(cliente1);
banco.inserirCliente(cliente2);

const conta1 = new Conta(1, "001", 1000, cliente1);
const conta2 = new Conta(2, "002", 2000, cliente2);

//inserindo contas no banco
banco.inserirConta(conta1);
banco.inserirConta(conta2);


banco.associarContaCliente(conta1.getNumero(), cliente1.getCpf());
banco.associarContaCliente(conta2.getNumero(), cliente2.getCpf());

//vendo contas e cliente do banco
console.log("Contas e Clientes do banco:");
console.log(banco.getContas());
console.log(banco.getClientes());

console.log(banco.listarContasCliente(cliente1.getCpf()));
console.log(banco.totalizarSaldoCliente(cliente1.getCpf()));

conta1.transferir(conta2, 500);

console.log(banco.listarContasCliente(cliente1.getCpf()));
console.log(banco.totalizarSaldoCliente(cliente1.getCpf()));
console.log(banco.totalizarSaldoCliente(cliente2.getCpf()));