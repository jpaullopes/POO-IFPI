"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var app_1 = require("../bank/models/app");
var utilsExibicao_1 = require("../bank/utils/utilsExibicao");
var app = new app_1.App();
var opcao = '';
do {
    console.log((0, utilsExibicao_1.exibirMenu)());
    opcao = (0, readline_sync_1.question)("Opção:");
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
        case "15":
            app.carregarContas();
            break;
        case "16":
            app.salvarContas();
            break;
        case "0":
            break;
    }
    if (opcao != "0") {
        app.salvarContas();
        console.log((0, utilsExibicao_1.exibirMensagemFinalizacao)());
    }
    (0, readline_sync_1.question)("");
} while (opcao != "0");
console.log("Aplicação encerrada");
