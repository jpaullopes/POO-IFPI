import { Banco } from './bank/models/banco';
import { Cliente } from './bank/models/cliente';
import { Conta } from './bank/models/conta';

let banco = new Banco();
let cliente1 = new Cliente(1, "Cliente 1");
let cliente2 = new Cliente(2, "Cliente 2");

let conta1 = new Conta(1, "111-1", 50, cliente1);
let conta2 = new Conta(2, "222-2", 100, cliente2);

banco.inserirConta(conta1);
banco.inserirConta(conta2);

try {
    banco.transferir("111-1", "222-2", 60);
} catch (error) {
    ./bank/models
}