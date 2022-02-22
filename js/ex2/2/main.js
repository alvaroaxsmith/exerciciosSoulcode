/**
 * Peça ao usuário digitar algum texto no pelo prompt e depois mostre esse texto com todas as letras maiúsculas, com todas as 
 * letras minúsculas e depois escreva no console letra por letra do texto que o usuário digitou. (Utilize o método split 
 * para fazer esse último)
 */

let text = prompt( "Digite um texto");


document.write("<p>" + `Maiúsculo: ${text.toLocaleUpperCase()}`+ "</p> ");
document.write("<p>" + `Minúsculo: ${text.toLocaleLowerCase()}`+ "</p> ");
document.write("<p>" + `Split: ${text.split('')}`+ "</p> ");

let separator = text.split('');

console.log(separator);