import { Conta } from "../models/conta";
import { Cliente } from "../models/cliente";
import chalk from 'chalk';


//função que exibe as informações da conta formatada
function exibirContaFormatada(conta: Conta): void {
    console.log(`
            [ CONTA CLIENTE ]
NUMERO:  [ ${conta.getNumero()} ]
ID:      [ ${conta.getId()} ]
SALDO:   [ ${conta.consultarSaldo()} ]
CLIENTE: [ ${conta.getCliente().getNome()} ]
`);
}

//função que exibe as informações do cliente formatada
function exibirClienteFormatado(cliente: Cliente): void {
    console.log(`
            [ CLIENTE ]
NOME:    [ ${cliente.getNome()} ]
CPF:     [ ${cliente.getCpf()} ]
IDADE:   [ ${cliente.getDataNascimento()} ]
`);
}
function exibirMenu(): string {
    return chalk.green(`
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

function exibirMensagemFinalizacao(): string {
    return chalk.green(`
---------------------------------
Operação finalizada. Digite <enter>
---------------------------------`);
}

//função de exibição de menu de escolha de contas
function exibirMenuConta(): string {
    return chalk.green(`
            [ MENU CONTA ]
      [ Digite uma opção ]
---------------------------------
[1] - Conta Corrente
[2] - Conta Poupança
[3] - Conta Imposto`)
}

export { exibirContaFormatada, exibirClienteFormatado, exibirMenu, exibirMensagemFinalizacao, exibirMenuConta };