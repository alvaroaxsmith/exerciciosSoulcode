/*
-> Faça um script que leia três números inteiros e mostre o maior deles.
*/ 

function maiorNumeroInteiro() {
    let numA = parseInt(prompt("Digite o primeiro número inteiro: "));
    let numB = parseInt(prompt("Digite o segundo número inteiro: "));
    let numC = parseInt(prompt("Digite o terceiro número inteiro: "));

    var maior = numA;

    if(numB > maior)
    maior = numB;
    if(numC > maior)
    maior = numC;

    alert(`O número inteiro maior é: ${maior}`);
}

maiorNumeroInteiro();