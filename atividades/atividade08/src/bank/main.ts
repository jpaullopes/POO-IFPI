import { question } from "readline-sync";
import { App } from "../bank/models/app";
import { exibirMenu, exibirMensagemFinalizacao } from "../bank/utils/utilsExibicao";

let app: App = new App();
let opcao: string = '';

do {
    console.log(exibirMenu());
    opcao = question("Opção:");

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
        console.log(exibirMensagemFinalizacao());
    }
    question("");
} while (opcao != "0");

console.log("Aplicação encerrada");