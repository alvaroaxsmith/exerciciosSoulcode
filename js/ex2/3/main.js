// Peça ao usuário para digitar um número binário e o converta para decimal.

const bin = prompt('Digite um número binário');
const arr = bin.split('').reverse().map(x => parseInt(x));

let decimal = 0

arr.forEach((value, index) => {
    if (value !== 0) {
        decimal += 2 ** index
    }
})

document.write("<p>" + `Valor Binário: ${bin}<br><br>Valor Decimal: ${decimal}`+ "</p> ");
console.log(decimal);