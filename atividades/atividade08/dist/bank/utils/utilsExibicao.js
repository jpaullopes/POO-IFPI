"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exibirContaFormatada = exibirContaFormatada;
exports.exibirClienteFormatado = exibirClienteFormatado;
exports.exibirMenu = exibirMenu;
exports.exibirMensagemFinalizacao = exibirMensagemFinalizacao;
exports.exibirMenuConta = exibirMenuConta;
var chalk_1 = __importDefault(require("chalk"));
//função que exibe as informações da conta formatada
function exibirContaFormatada(conta) {
    console.log("\n            [ CONTA CLIENTE ]\nNUMERO:  [ ".concat(conta.getNumero(), " ]\nID:      [ ").concat(conta.getId(), " ]\nSALDO:   [ ").concat(conta.consultarSaldo(), " ]\nCLIENTE: [ ").concat(conta.getCliente().getNome(), " ]\n"));
}
//função que exibe as informações do cliente formatada
function exibirClienteFormatado(cliente) {
    console.log("\n            [ CLIENTE ]\nNOME:    [ ".concat(cliente.getNome(), " ]\nCPF:     [ ").concat(cliente.getCpf(), " ]\nIDADE:   [ ").concat(cliente.getDataNascimento(), " ]\n"));
}
function exibirMenu() {
    return chalk_1.default.green("\n            [ MENU ]\n      [ Digite uma op\u00E7\u00E3o ]\n---------------------------------\n[ CONTAS ]\n[1] - Inserir\n[2] - Consultar\n[3] - Sacar\n[4] - Depositar\n[5] - Excluir\n[6] - Transferir\n[7] - Totaliza\u00E7\u00F5es\n[11] - Ordem Banc\u00E1ria\n[13] - Mudar titularidade\n[15] - Carregar contas\n[16] - Salvar contas\n[14] - Render juros\n---------------------------------\n[ CLIENTES ]\n[8] - Inserir\n[9] - Consultar\n[10] - Associar\n[12] - Excluir\n[0] - Sair\n---------------------------------");
}
function exibirMensagemFinalizacao() {
    return chalk_1.default.green("\n---------------------------------\nOpera\u00E7\u00E3o finalizada. Digite <enter>\n---------------------------------");
}
//função de exibição de menu de escolha de contas
function exibirMenuConta() {
    return chalk_1.default.green("\n            [ MENU CONTA ]\n      [ Digite uma op\u00E7\u00E3o ]\n---------------------------------\n[1] - Conta Corrente\n[2] - Conta Poupan\u00E7a\n[3] - Conta Imposto\n[4] - Conta Sal\u00E1rio");
}
