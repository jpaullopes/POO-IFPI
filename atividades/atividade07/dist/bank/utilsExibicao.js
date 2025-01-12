"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exibirContaFormatada = exibirContaFormatada;
exports.exibirClienteFormatado = exibirClienteFormatado;
exports.exibirMenu = exibirMenu;
exports.exibirMensagemFinalizacao = exibirMensagemFinalizacao;
const chalk_1 = __importDefault(require("chalk"));
//função que exibe as informações da conta formatada
function exibirContaFormatada(conta) {
    console.log(`
            [ CONTA CLIENTE ]
NUMERO:  [ ${conta.getNumero()} ]
ID:      [ ${conta.getId()} ]
SALDO:   [ ${conta.consultarSaldo()} ]
CLIENTE: [ ${conta.getCliente().getNome()} ]
`);
}
//função que exibe as informações do cliente formatada
function exibirClienteFormatado(cliente) {
    console.log(`
            [ CLIENTE ]
NOME:    [ ${cliente.getNome()} ]
CPF:     [ ${cliente.getCpf()} ]
IDADE:   [ ${cliente.getDataNascimento()} ]
`);
}
function exibirMenu() {
    return chalk_1.default.green(`
            [ MENU ]
      [ Digite uma opção ]
---------------------------------
[ CONTAS ]
[1] - Inserir
[2] - Consultar
[3] - Sacar
[4] - Depositar
[5] - Excluir
[6] - Transferir
[7] - Totalizações
[11] - Ordem Bancária
[13] - Mudar titularidade
[14] - Render juros
---------------------------------
[ CLIENTES ]
[8] - Inserir
[9] - Consultar
[10] - Associar
[12] - Excluir
[0] - Sair
---------------------------------`);
}
function exibirMensagemFinalizacao() {
    return chalk_1.default.green(`
---------------------------------
Operação finalizada. Digite <enter>
---------------------------------`);
}
//# sourceMappingURL=utilsExibicao.js.map