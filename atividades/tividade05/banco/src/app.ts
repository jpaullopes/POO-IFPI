import * as Utils from "./utils";
import { question } from "readline-sync";
import { Banco } from "./models/banco";

let banco: Banco = new Banco();
let opcao: string = '';

do {
    console.log('\n[ Bem vindo ]\n[ Digite uma opção ]');
    console.log('---------------------------------');
    console.log('[ CONTAS ]');
    console.log(
        '[1] - Inserir\n[2] - Consultar\n[3] - Sacar\n' +
        '[4] - Depositar\n[5] - Excluir\n[6] - Transferir\n' +
        '[7] - Totalizações');
    console.log('---------------------------------');
    console.log('[ CLIENTES ]\n' +
        '[8] - Inserir\n[9] - Consultar\n[10] - Associar\n' +
        '[0] - Sair');
    console.log('---------------------------------');
    opcao = question("Opção:");

    switch (opcao) {
        case "1":
            Utils.inserirConta(banco);
            break;
        case "2":
            Utils.consultarConta(banco);
            break;
        case "3":
            Utils.sacar(banco);
            break;
        case "4":
            Utils.depositar(banco);
            break;
        case "5":
            Utils.excluirConta(banco);
            break;
        case "6":
            Utils.transferir(banco);
            break;
        case "7":
            Utils.totalizacoes(banco);
            break;
        case "8":
            Utils.inserirCliente(banco);
            break;
        case "9":
            Utils.consultarCliente(banco);
            break;
        case "10":
            Utils.associarContaCliente(banco);
            break;
    }
    console.log("---------------------------------");
    question("Operação finalizada. Digite <enter>");
    console.log("---------------------------------");
} while (opcao != "0");

console.log("Aplicação encerrada");
