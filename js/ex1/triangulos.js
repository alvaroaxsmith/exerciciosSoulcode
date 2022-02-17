 /*
 -> Crie um código que receba 3 valores do comprimento de um triângulo e depois 
 mostre um alert informando se o triângulo é equilátero, isóceles ou escaleno.
 */
function triangulo() {

let ladoA = parseFloat(prompt("Digite o primeiro lado do triangulo: "));
let ladoB = parseFloat(prompt("Digite o segundo lado do triangulo: "));
let ladoC = parseFloat(prompt("Digite o terceiro lado do triangulo: "));

    if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC) {
        alert("Os três lados são iguais, portanto o triângulo é equilátero!");
    } else if (ladoA==ladoB || ladoA==ladoC || ladoC==ladoB) {
        alert("Dois lados são iguais e um é diferente, portanto o triângulo é isósceles!");
    } else if (ladoA!=ladoB || ladoA!=ladoC || ladoC!=ladoB) {
        alert("Os três lados são diferentes, portanto o triângulo é escaleno!");   
    } else {
        alert("Ocorreu um erro, tente novamente ...");
    }

}
triangulo();