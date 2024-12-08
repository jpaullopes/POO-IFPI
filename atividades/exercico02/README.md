Questão 01
    Dinâmica : O tipo da variável não precisa ser declarado quando ela será usada.
    Estática : O tipo da váriavél precisa ser informado quando ela é declarada. Ex: int, char, float
Questão 02
    Erros de tipo da variavel podem surgir durante a execução e não são detectados antes, gerando problemas difíceis de depurar.
Questão 03
    Código exemplo de erro em python
    def somar(a, b):
        return a + b

    print(somar(5, 10))    # Funciona como esperado
    print(somar(5, "dez")) # Causa um erro em tempo de execução
Questão 04
    Ela apesar de possuir tipagem estática, ainda permite a conversão de tipos. Por exemplo, quando estamos trabalhando com um valor de tipo char, podemos realizar a soma de um número inteiro com ele, pois a linguagem C pode tratar o tipo char como um valor do tipo int.

    #include <stdio.h>
    int main() {
        char letra = 'A';     // 'A' tem o valor ASCII 65
        int offset = 5;

        // Soma o valor inteiro com o char, que será tratado como int
        char nova_letra = letra + offset; 

        printf("Letra original: %c\n", letra);           // Saída: A
        printf("Nova letra: %c\n", nova_letra);          // Saída: F
        printf("Valor ASCII da nova letra: %d\n", nova_letra); // Saída: 70

        return 0;
    }
Questão 05
    Não, pois o tipo number em TSC apesar de abranger tipos int e float, é uma consequência da linguagem JS, que só possui esse tipo númerico. Além disso, typescript possui outros tipos de variaveis, como boolean e string, e não permite a conversão automática delas.
Questão 06
    const name: string = "Ely";
    const paymentTime: number = 120.56;
    const language: string = "TypeScript";

    console.log(`${name}
    My payment time is ${paymentTime}
    and
    my preferred language is ${language}`);

Questão 07

