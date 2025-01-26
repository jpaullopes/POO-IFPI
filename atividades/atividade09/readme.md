# ATIVIDADE 08 - PARTE 01  

## Questão 01 - Tratamento de Exceções em TypeScript  

### Try-Catch  
O bloco `try-catch` permite capturar e lidar com erros em tempo de execução.  

```typescript
try {
    // Código que pode lançar uma exceção
    let result = someFunction();
    console.log(result);
} catch (error) {
    // Tratamento do erro
    console.error("Ocorreu um erro:", error.message);
}
```  

### Throw  
A instrução `throw` é usada para lançar erros personalizados.  

```typescript
function validaValor(valor: number) {
    if (valor <= 0) {
        throw new Error("O valor deve ser maior que zero.");
    }
}

try {
    validaValor(-1);
} catch (error) {
    console.error("Erro:", error.message);
}
```  

### Finally  
O bloco `finally` sempre será executado, independentemente de ocorrer uma exceção.  

```typescript
try {
    let result = someFunction();
    console.log(result);
} catch (error) {
    console.error("Ocorreu um erro:", error.message);
} finally {
    console.log("Bloco finally executado.");
}
```  

---

## Questão 02 - Limitações do Tratamento de Exceções  

- **Try-Catch**: Pode tornar o código difícil de ler e manter se usado excessivamente. Além disso, não captura erros assíncronos, como aqueles em `setTimeout` ou `Promises`.  

- **Throw**: Lançar exceções manualmente pode interromper o fluxo normal do programa e deve ser usado com cuidado. Se não for bem documentado, pode dificultar a depuração.  

- **Finally**: O bloco `finally` sempre será executado, mesmo que uma exceção ocorra e não seja capturada. Isso pode levar a comportamentos inesperados caso não seja utilizado corretamente.  

---

## Questão 03  
[Resposta disponível aqui](./src/question03.ts)  

---

## Questão 04  
[Resposta disponível aqui](./src/question04.ts)  

---

## Questão 05 - Validação de Valores  

```typescript
private validaValor(valor: number): void {
    if (isNaN(valor) || valor <= 0) {
        throw new Error("Valor inválido.");
    }
}
```
[Código completo disponível aqui](./src/question05.ts)  

---
