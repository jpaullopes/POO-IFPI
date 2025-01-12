# Atividade 07

## Questão 01: Reescrever as classes usando herança

- [Veículos](./src/veiculos.ts) - Implementação das classes de veículos utilizando herança.

## Questão 02: Criar uma calculadora simples

- [Calculadora Simples](./src/calculadoraSimples.ts) - Implementação da classe `Calculadora`.

```typescript
class Calculadora {
    private operando1: number;
    private operando2: number;

    constructor(operando1: number, operando2: number) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }

    public somar(): number {
        return this.operando1 + this.operando2;
    }
}

// Teste da classe
const calculadora = new Calculadora(2, 3);
console.log(calculadora.somar()); // 5
```

## Questão 03: Criar uma calculadora científica

- [Calculadora Científica](./src/calculadoraCientifica.ts) - Implementação da classe `CalculadoraCientifica` herdando de `Calculadora`.

```typescript
class CalculadoraCientifica extends Calculadora {
    public exponenciar(): number {
        return Math.pow(this.operando1, this.operando2);
    }
}

// Teste da classe
const calculadoraCientifica = new CalculadoraCientifica(2, 3);
console.log(calculadoraCientifica.somar()); // 5
console.log(calculadoraCientifica.exponenciar()); // 8
```

**Observação:** Não foi necessária nenhuma modificação na classe [`Calculadora`](./src/calculadoraSimples.ts) para acessar os atributos na classe `CalculadoraCientifica`.

## Questão 04.A: Adicionando funcionalidades de rendimento de juros e poupança

- [Conta Poupança](./src/bank/models/contaPoupanca.ts) - Criação da classe `ContaPoupanca`.
- [Banco](./src/bank/models/banco.ts) - Adição do método `renderJuros()`.

```typescript
public renderJuros(numero: string): void {
    let contaProcurada = this.consultarConta(numero);
    if (contaProcurada instanceof ContaPoupanca) {
        (contaProcurada as ContaPoupanca).calcularJuros();
    } else {
        console.log("A conta não é uma poupança ou não foi encontrada.");
    }
}
```

- [App](./src/bank/models/app.ts) e [Main](./src/bank/main.ts) - Integração da funcionalidade de rendimento de juros.
