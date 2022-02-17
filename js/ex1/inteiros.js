/*
-> Faça um script que leia três números inteiros e mostre o maior deles.
*/ 

function maiorNumeroInteiro() {
    let numA = parseInt(prompt("Digite o primeiro número inteiro: "));
    let numB = parseInt(prompt("Digite o segundo número inteiro: "));
    let numC = parseInt(prompt("Digite o terceiro número inteiro: "));

    if (numA > numB && numA > numC) {
        alert(`O número inteiro maior é ${numA}!`);
    } else if (numB > numA && numB > numC) {
        alert(`O número inteiro maior é ${numB}!`);
    } else if (numC > numA && numC > numB) {
        alert(`O número inteiro maior é ${numC}!`);
    } else {
        alert(`Ocorreu um erro, tente novamente ...`);
    }
}

maiorNumeroInteiro();