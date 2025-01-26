"use strict";
//Questão 01 | Função que retorna true ou false se o número é par ou ímpar
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
//questão 02 | Função que retorna uma saudação
function saudacao(nome, pronome = "Sr.") {
    return `${pronome} ${nome} !`;
}
//questão 03 | Uso de forEach
function separarValores(lista) {
    let valores = "";
    lista.forEach((numero, index) => {
        valores += `${numero}`;
        if (index < lista.length - 1) {
            valores += "-";
        }
    });
    return valores;
}
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(separarValores(lista)); // 1-2-3-4-5-6-7-8-9-10
//questão 04 | Execução dos scripts
function soma(x, y) {
    return x + y;
}
console.log(soma(1, 2)); // A) resultado 3
console.log(soma(1, "2")); // B) resultado 12
console.log(soma(1)); // C) resultado NaN
//questão 05 | Uso de rest parameters
function exibir(...letras) {
    letras.forEach((letra, indice) => {
        console.log(`${indice + 1}° -> ${letra}`);
    });
}
exibir("a", "b"); // 1° -> a 2° -> b
exibir("a", "b", "c"); // 1° -> a 2° -> b 3° -> c
exibir("a", "b", "c", "d"); // 1° -> a 2° -> b 3° -> c 4° -> d
//questão 06 | Uso de arrow functions
const ola = () => console.log("Olá");
ola(); // Olá
//questão 07 | Uso de filter e arrow functions
const filtrarPares = (lista) => lista.filter(numero => numero % 2 === 0);
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(filtrarPares(array)); // [2,4,6,8,10]
//questão 08 | Uso de map e reduce
const dobrar = (lista) => lista.map(numero => numero * 2);
const somar = (lista) => lista.reduce((acumulador, numero) => acumulador + numero);
const array1 = [1, 2, 3, 4, 5];
console.log(dobrar(array1)); // [2,4,6,8,10]
console.log(somar(array1)); // 15
