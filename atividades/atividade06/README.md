# Atividade 06 - Encapsulamento em POO

Este repositório contém a solução para a Atividade 06 da disciplina de Programação Orientada a Objetos. Esta atividade tem como foco principal o encapsulamento, um dos pilares fundamentais da POO.

## Classes Desenvolvidas

Nesta atividade, as seguintes classes foram implementadas:

### 1. [`Calculadora`](./src/calculadora.ts)

*   **Descrição:** Implementa de uma calculadora e operações matemáticas básicas de soma, subtração e multiplicação.
*   **Conceitos Aplicados:** Encapsulamento (atributos privados `operando1` e `operando2`), construtor para inicializar os operandos, métodos públicos para realizar as operações.
*   **Atributos:**
    *   `operando1`: `number` (privado)
    *   `operando2`: `number` (privado)
*   **Métodos:**
    *   `soma()`: `number` (público) - Retorna a soma dos operandos.
    *   `subtraction()`: `number` (público) - Retorna a subtração dos operandos.
    *   `multiplication()`: `number` (público) - Retorna a multiplicação dos operandos.
*   **Exemplo de Uso (Teste):**

```typescript
const operacao = new Calculadora(10, 5);
console.log(`Adição: ${operacao.soma()}`); // Saída: Adição: 15
console.log(`Subtração: ${operacao.subtraction()}`); // Saída: Subtração: 5
console.log(`Multiplicação: ${operacao.multiplication()}`); // Saída: Multiplicação: 50
```

### 2. [`Hora`](./src/hora.ts)

*   **Descrição:** Representa e formata informações de hora, minutos e segundos.
*   **Conceitos Aplicados:** Encapsulamento (atributos `hora`, `minutos` e `segundos` privados), construtor para inicialização, métodos públicos para leitura individual dos valores e para retornar a hora formatada.
*   **Atributos:**
    *   `hora`: `number` (privado)
    *   `minutos`: `number` (privado)
    *   `segundos`: `number` (privado)
*   **Métodos:**
    *   `lerHora()`: `number` (público) - Retorna a hora.
    *   `lerMinutos()`: `number` (público) - Retorna os minutos.
    *   `lerSegundos()`: `number` (público) - Retorna os segundos.
    *   `retornaHora()`: `string` (público) - Retorna a hora formatada no padrão "hh:mm:ss".
*   **Exemplo de Uso (Teste):**

```typescript
let hora = new Hora(10, 20, 30);
console.log(hora.lerHora()); // Saída: 10
console.log(hora.lerMinutos()); // Saída: 20
console.log(hora.lerSegundos()); // Saída: 30
console.log(hora.retornaHora()); // Saída: 10:20:30
```

## Classes Fornecidas (Questões 3 a 5)

As classes `Banco`, `Conta`, `Cliente` e `App`, referentes às questões 3 a 5 da atividade, já foram implementadas. Elas estão disponíveis no repositório do projeto (link abaixo) e representam um sistema bancário simplificado. A implementação dessas classes seguem as especificações fornecidas, portanto não vi a necessidade de reeplementa-las:

*   **`Banco`:**
    *   Array de contas privado.
    *   Método `consultarPorIndice` privado.
*   **`Conta` e `Cliente`:**
    *   Atributos privados.
    *   Métodos `get` públicos para leitura.
*   **`App`:**
    *   Atributo `banco` privado.

## Como Executar o Projeto

Para executar o projeto, é necessário ter o Node.js instalado:

1. **Instale o Node.js:** Baixe e instale a versão mais recente do Node.js em [https://nodejs.org/](https://nodejs.org/).
2. **Execute os arquivos:** Use o comando `npx ts-node`.

## [Link do Repositório](https://github.com/jpaullopes/atividade05-extra.git)

Nesse repositório você encontrará: As classes `Banco`, `Conta`, `Cliente` e `App` que foram fornecidas prontas e suas implementações.

