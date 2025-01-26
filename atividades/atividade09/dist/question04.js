"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./bank/models/app");
var banco_1 = require("./bank/models/banco");
var cliente_1 = require("./bank/models/cliente");
var conta_1 = require("./bank/models/conta");
var banco = new banco_1.Banco();
var cliente1 = new cliente_1.Cliente(1, "Cliente 1");
var cliente2 = new cliente_1.Cliente(2, "Cliente 2");
var conta1 = new conta_1.Conta(1, "111-1", 50, cliente1);
var conta2 = new conta_1.Conta(2, "222-2", 100, cliente2);
banco.inserirConta(conta1);
banco.inserirConta(conta2);
var app = new app_1.App(banco);
try {
    app.transferir();
}
catch (error) {
    if (error instanceof Error) {
        console.error("Erro na transferência:", error.message);
    }
    else {
        console.error("Erro desconhecido na transferência");
    }
}
