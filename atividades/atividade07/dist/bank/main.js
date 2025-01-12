"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
const app_1 = require("./models/app");
const utilsExibicao_1 = require("./utilsExibicao");
let app = new app_1.App(); //cria a aplicação
let opcao = '';
do {
    //exibe o menu bonitinho
    console.log((0, utilsExibicao_1.exibirMenu)());
    opcao = (0, readline_sync_1.question)("Opção:"); //usuario escolhe a opção
    //switch case para cada opção que o usurio escolher
    switch (opcao) {
        case "1":
            app.inserirConta();
            break;
        case "2":
            app.consultarConta();
            break;
        case "3":
            app.sacar();
            break;
        case "4":
            app.depositar();
            break;
        case "5":
            app.excluirConta();
            break;
        case "6":
            app.transferir();
            break;
        case "7":
            app.totalizacoes();
            break;
        case "8":
            app.inserirCliente();
            break;
        case "9":
            app.consultarCliente();
            break;
        case "10":
            app.atribuirTitular();
            break;
        case "11":
            app.ordemBancaria();
            break;
        case "12":
            app.excluirCliente();
            break;
        case "13":
            app.mudarTitularidade();
            break;
        case "14":
            app.renderJurosBanco();
            break;
        case "0":
            break;
    }
    if (opcao != "0") {
        console.log((0, utilsExibicao_1.exibirMensagemFinalizacao)());
    } //só pra ficar bonitinho e não ficar a aparecendo a mensagem de finalização quando o usuário sair do programa
    (0, readline_sync_1.question)(""); //esperar o usuário digitar alguma coisa...
} while (opcao != "0");
console.log("Aplicação encerrada");
//# sourceMappingURL=main.js.map