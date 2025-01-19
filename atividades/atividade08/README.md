# Documentação do Projeto

## Introdução

Este projeto é uma continuação de uma atividade anterior.

## Questão 4

### b) Implementação da Classe ContaImposto
A classe [ContaImposto](./src/bank/models/contaImposto.ts) foi implementada sem necessidade de modificações na classe Banco, apenas na App.

### c) Leitura de Arquivos
A função de leitura de arquivos foi adicionada no arquivo [utilsLeituraArqvs.ts](./src/bank/utils/utilsLeituraArqvs.ts):

```typescript
export function lerContasDoArquivo(caminho: string): Conta[] {
    const contas: Conta[] = [];
    const dados = readFileSync(caminho, 'utf-8');
    const linhas = dados.split('\n');

    for (const linha of linhas) {
        const campos = linha.split(';');
        const tipoConta = campos[0];
        const numero = campos[1];
        const saldo = parseFloat(campos[2]);
        const id = parseInt(campos[3]);
        const nomeCliente = campos[4];
        const cliente = new Cliente(id, nomeCliente);

        let conta: Conta;
        if (tipoConta === 'CP') {
            const taxaJuros = parseFloat(campos[5]);
            conta = new ContaPoupanca(id, numero, saldo, cliente, taxaJuros);
        } else if (tipoConta === 'CI') {
            const taxaImposto = parseFloat(campos[5]);
            conta = new ContaImposto(id, numero, saldo, cliente, taxaImposto);
        } else if (tipoConta === 'CS') {
            const empregador = campos[5];
            const limiteSaqueMensal = parseFloat(campos[6]);
            conta = new ContaSalario(id, numero, saldo, cliente, empregador, limiteSaqueMensal);
        } else {
            conta = new Conta(id, numero, saldo, cliente);
        }

        contas.push(conta);
    }

    return contas;
}
```

### d) Escrita de Arquivos
A função de gravação de contas no arquivo foi adicionada no mesmo arquivo:

```typescript
export function gravarContasNoArquivo(caminho: string, contas: Conta[]): void {
    const linhas: string[] = [];

    for (const conta of contas) {
        let linha = `${conta.constructor.name};${conta.getNumero()};${conta.consultarSaldo()};${conta.getId()};${conta.getCliente().getNome()}`;
        if (conta instanceof ContaPoupanca) {
            linha += `;${conta.getJuros()}`;
        } else if (conta instanceof ContaImposto) {
            linha += `;${conta.getImposto()}`;
        } else if (conta instanceof ContaSalario) {
            linha += `;${conta.getEmpregador()};${conta.getLimiteSaqueMensal()}`;
        }
        linhas.push(linha);
    }

    const dados = linhas.join('\n');
    writeFileSync(caminho, dados, 'utf-8');
}
```

### e) Implementação da Classe ContaSalario
A classe [ContaSalario](./src/bank/models/contaSalario.ts) foi adicionada:

```typescript
class ContaSalario extends Conta {
    private _limiteSaqueMensal: number;
    private _saquesRealizados: number;
    private _empregador: string;

    constructor(id: number, numero: string, saldo: number, cliente: Cliente, empregador: string, limiteSaqueMensal: number) {
        super(id, numero, saldo, cliente);
        this._empregador = empregador;
        this._limiteSaqueMensal = limiteSaqueMensal;
        this._saquesRealizados = 0;
    }
```

---

## Questão 5

### a) Implementação das Classes Produto e ProdutoPerecivel
As classes [Produto](./src/controleDeEstoque/models/produto.ts) e [ProdutoPerecivel](./src/controleDeEstoque/models/produtoPerecivel.ts) foram adicionadas.

### b) Atributos da Classe Produto
```typescript
class Produto {
    private _identificador: string;
    private _descricao: string;
    private _quantidade: number;
    private _valorUnitario: number;

    constructor(identificador: string = "", descricao: string = "", quantidade: number = 0, valorUnitario: number = 0) {
        this._identificador = identificador;
        this._descricao = descricao;
        this._quantidade = quantidade;
        this._valorUnitario = valorUnitario;
    }
}
```

### c) Atributos da Classe ProdutoPerecivel
```typescript
class ProdutoPerecivel extends Produto {
    private _dataValidade: Date;

    constructor(identificador: string = "", descricao: string = "", quantidade: number = 0, valorUnitario: number = 0, dataValidade: Date = new Date(1111, 1, 1)) {
        super(identificador, descricao, quantidade, valorUnitario);
        this._dataValidade = dataValidade;
    }
}
```

### d) Métodos reporEstoque e darBaixa
```typescript
public reporEstoque(quantidade: number): void {
    this._quantidade += quantidade;
}

public darBaixaEstoque(quantidade: number): void {
    this._quantidade -= quantidade;
}
```

### e) Validação de Produto Vencido
```typescript
public ehVencido(): boolean {
    let hoje = new Date();
    return this._dataValidade < hoje;
}
```

### f) Sobrescrita de Métodos para ProdutoPerecivel
```typescript
public reporEstoque(quantidade: number): void {
    if (this.ehVencido()) {
        console.log("Produto vencido, não pode ser reposto");
    } else {
        super.reporEstoque(quantidade);
    }
}

public darBaixaEstoque(quantidade: number): void {
    if (this.ehVencido()) {
        console.log("Produto vencido, não pode ser vendido");
    } else {
        super.darBaixaEstoque(quantidade);
    }
}
```

### g) Implementação da Classe Estoque
```typescript
class Estoque {
    private _produtos: Array<Produto>;

    constructor() {
        this._produtos = new Array<Produto>();
    }
}
```

### h) Métodos para Manipulação de Produtos
A classe Estoque inclui métodos para inserir, consultar, excluir, repor e dar baixa nos produtos.

### i) Validação de Identificador e Descrição
```typescript
public existe(identificador: string, descricao: string): boolean {
    return this.consultarProduto(identificador) || this._produtos.some(produto => produto.getDescricao() === descricao);
}
```

### j) Listagem de Produtos Vencidos
```typescript
public listarProdutosVencidos(): Array<Produto> {
    return this._produtos.filter(produto => produto instanceof ProdutoPerecivel && (produto as ProdutoPerecivel).ehVencido());
}
```

