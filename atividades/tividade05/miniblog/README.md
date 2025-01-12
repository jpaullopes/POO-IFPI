# Microblog

Este projeto é resultado de uma atividade acadêmica que envolve a criação de um sistema simples de microblogging. Ele é composto por três classes principais: `Postagem`, `Microblog` e um arquivo `main.ts` que realiza alguns testes básicos.

## Classes e Métodos

### Classe `Postagem`
A classe `Postagem` representa uma postagem no microblog. Ela possui três atributos privados:
- `id`: um número que identifica unicamente a postagem.
- `texto`: o conteúdo textual da postagem.
- `likes`: o número de curtidas que a postagem recebeu.

#### Métodos da classe `Postagem`
- **Construtor**: Inicializa uma nova instância de `Postagem` com valores padrão ou fornecidos para `id`, `texto` e `likes`.
- **curtir()**: Incrementa o número de curtidas da postagem.
- **toString()**: Retorna uma string que concatena o texto da postagem com o número de curtidas.
- **getId()**: Retorna o `id` da postagem.
- **getLikes()**: Retorna o número de curtidas da postagem.

### Classe `Microblog`
A classe `Microblog` gerencia um conjunto de postagens. Ela possui um atributo privado:
- `postagens`: um array de objetos `Postagem`.

#### Métodos da classe `Microblog`
- **Construtor**: Inicializa uma nova instância de `Microblog` com um array vazio de postagens.
- **incluirPostagem(postagem: Postagem)**: Adiciona uma nova postagem ao array de postagens.
- **excluirPostagem(id: number)**: Remove uma postagem do array com base no seu `id`. A postagem é deslocada no array para manter a ordem.
- **postagemMaisCurtida()**: Retorna a postagem com o maior número de curtidas.
- **buscarPostagem(id: number)**: Busca e retorna uma postagem específica com base no seu `id`. Retorna `null` se a postagem não for encontrada.
- **curtirPostagem(id: number)**: Incrementa o número de curtidas de uma postagem específica, identificada pelo seu `id`.
- **toString()**: Retorna uma string que concatena o `toString` de todas as postagens.

## Arquivo `main.ts`
O arquivo `main.ts` cria instâncias das classes `Postagem` e `Microblog` e realiza alguns testes básicos:
- Cria quatro postagens com diferentes conteúdos e números de curtidas.
- Cria uma instância de `Microblog` e adiciona as postagens a ela.
- Exibe todas as postagens e a postagem mais curtida.
- Incrementa o número de curtidas de uma postagem específica.
- Remove uma postagem do microblog e exibe o estado atualizado das postagens.

Esses testes não são muito elaborados, mas servem para demonstrar o funcionamento básico das classes e métodos implementados.

## Executando o código
Para executar o código, você pode utilizar o Deno, um ambiente de execução para TypeScript e JavaScript. Primeiro, instale o Deno conforme as [instruções oficiais](https://deno.land/#installation) e, em seguida, execute o arquivo `main.ts` com o comando:

```bash
deno run main.ts
```

Isso deve exibir a saída dos testes realizados no console.

## Conclusão
Este projeto é uma implementação simples de um sistema de microblogging em TypeScript. Ele demonstra o uso de classes, métodos, atributos, arrays e operações básicas em TypeScript. Para projetos mais complexos, seria necessário adicionar mais funcionalidades, como validações, tratamento de erros, persistência de dados, interface gráfica, etc.
```
```

### [Código-fonte](src/main.ts)
Clique [aqui](src/main.ts) para acessar o código-fonte.
