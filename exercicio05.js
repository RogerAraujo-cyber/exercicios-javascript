// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let primeiroNumero = parseFloat(prompt("Digite o primeiro número:"));
let segundoNumero = parseFloat(prompt("Digite o segundo número:"));
let terceiroNumero = parseFloat(prompt("Digite o terceiro número:"));

if (primeiroNumero < segundoNumero && segundoNumero < terceiroNumero) {
     alert("Os números estão em ordem crescente")
}

else{ (terceiroNumero > segundoNumero && segundoNumero > primeiroNumero)
alert ("Os números estão decrescente")
}