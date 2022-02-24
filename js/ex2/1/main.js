// Crie um programa que pergunta quantos números o usuário deseja digitar (tanto inteiro quanto decimal) e rebeca os números 
// e armazene esses números em um array e depois mostre a soma total deles, a média deles, mostre cada valor em uma potência de 
// 2 e faça a raíz quadrada e cúbica de um.
let total = parseInt(prompt('Quantos números você deseja digitar?'));

let arr = [];
let sum = 0;
let cont = 0;

for(i = 0; i < total; i++) {
    let aux = parseFloat(prompt(`Qual o primeiro ${i+1}° valor`));
    arr.push(aux);
}

for(let i of arr) {
    
    sum += i;
    document.write("<p>" + `<strong>Valor =</strong>
    ${i} <br> <strong>Ao Quadrado =</strong> 
    ${Math.pow(i,2)} <br> <strong>Raiz Quadrada =</strong> 
    ${Math.sqrt(i)} <br> <strong>Raiz Cúbica =</strong> 
    ${Math.cbrt(i)}<hr>`+ "</p> ");
    cont++;
}


document.write("<p>" + "<strong>Soma Total = </strong>" + sum + "</p> ");

document.write("<p>" + "<strong>Média = </strong>" + sum / arr.length +"<hr></p>");