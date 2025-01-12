# Projeto Banco

## Descrição
Este projeto simula um sistema bancário simples com funcionalidades para gerenciar clientes, contas e operações bancárias. O projeto é resulaado de uma atividade acadêmica.

## Estrutura do Projeto
- **Classe Cliente**: Representa um cliente do banco.
- **Classe Conta**: Representa uma conta bancária.
- **Classe Banco**: Centraliza a gestão de clientes e contas, além de realizar operações bancárias.

## Questões

### Questão 01
**Classe Cliente**
A classe `Cliente` representa um cliente do banco e possui os seguintes atributos e métodos:

#### Atributos
- `id`: Identificador único do cliente.
- `nome`: Nome do cliente.
- `cpf`: CPF do cliente.
- `dataNascimento`: Data de nascimento do cliente.
- `contas`: Lista de contas associadas ao cliente.

#### Métodos
- `getCpf()`: Retorna o CPF do cliente.
- `getContas()`: Retorna a lista de contas do cliente.
- `getId()`: Retorna o ID do cliente.
- `getNome()`: Retorna o nome do cliente.
- `getDataNascimento()`: Retorna a data de nascimento do cliente.
- `adicionarConta(conta: Conta)`: Adiciona uma conta à lista de contas do cliente.

### Questão 02
**Classe Conta**
A classe `Conta` representa uma conta bancária e possui os seguintes atributos e métodos:

#### Atributos
- `id`: Identificador único da conta.
- `numero`: Número da conta.
- `saldo`: Saldo da conta.
- `cliente`: Cliente associado à conta.

#### Métodos
- `sacar(valor: number)`: Realiza um saque na conta.
- `depositar(valor: number)`: Realiza um depósito na conta.
- `consultarSaldo()`: Retorna o saldo da conta.
- `transferir(contaDestino: Conta, valor: number)`: Transfere um valor para outra conta.
- `getNumero()`: Retorna o número da conta.
- `getId()`: Retorna o ID da conta.
- `getCliente()`: Retorna o cliente associado à conta.

### Questão 03
**Classe Banco**
A classe `Banco` centraliza a gestão de clientes e contas, além de realizar operações bancárias. Possui os seguintes atributos e métodos:

#### Atributos
- `contas`: Lista de contas do banco.
- `clientes`: Lista de clientes do banco.

#### Métodos
- `consultarConta(numero: string)`: Retorna a conta com o número fornecido.
- `consultarCliente(cpf: string)`: Retorna o cliente com o CPF fornecido.
- `associarContaCliente(numeroConta: string, cpfCliente: string)`: Associa uma conta a um cliente.
- `listarContasCliente(cpf: string)`: Retorna a lista de contas de um cliente.
- `totalizarSaldoCliente(cpf: string)`: Retorna o saldo total das contas de um cliente.
- `inserirCliente(cliente: Cliente)`: Insere um cliente no banco.
- `inserirConta(conta: Conta)`: Insere uma conta no banco.
- `getClientes()`: Retorna a lista de clientes do banco.
- `getContas()`: Retorna a lista de contas do banco.

### Questão 04
**Regras de Negócio do Banco**
- **A**: Cada cliente pode ter várias contas, mas uma mesma conta não pode ser associada mais de uma vez ao mesmo cliente.
- **B**: Cada conta só pode ser associada a um único cliente.
- **C**: O sistema deve impedir duplicações:
  - **i**: Nenhum cliente pode ter o mesmo id ou cpf de outro cliente.
  - **ii**: Nenhuma conta pode ter o mesmo id ou numero de outra conta.

### Questão 05
**Exemplos de Funcionalidades das Classes**
O arquivo `main.ts` contém exemplos de como utilizar as funcionalidades das classes `Cliente`, `Conta` e `Banco`. Nele, são criados clientes e contas, e são realizadas operações como associar contas a clientes e listar contas de um cliente.


### Questão 06
**Discussão sobre a Classe Banco**
- **A**: Sim, a classe `Banco` é responsável por centralizar todas as outras classes do sistema.
- **B**: Sim, seria mais adequado a existência das classes `CadastroDeClientes` e `CadastroDeContas`. Assim, as tarefas relacionadas ao cadastro de clientes e contas poderiam ser delegadas a essas classes, facilitando as tarefas que a classe `Banco` possui.
- **C**: Acho que o método `associarContaCliente` deveria estar na classe `CadastroDeContas`, pois está mais relacionado à criação de uma conta em si, e pensando nas regras de negócio faria mais sentido ainda.
