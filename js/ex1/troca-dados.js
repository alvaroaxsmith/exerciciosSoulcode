/*
-> Crie duas variáveis e peça para que o usuário digite dois números inteiros pelo prompt. 
Após receber os valores nas variáveis, inverta os valores dentro das variáveis, ou seja, o 
valor da variável x vai para a variável y e o valor da variável y vai para a variável x. 
Mostre o antes das variáveis e seu depois.
*/

function invertendoDados() {
    let numeroA = parseInt(prompt("Digite o primeiro número inteiro: "));
    let numeroB = parseInt(prompt("Digite o segundo número inteiro: "));

    alert(`Valores antes da troca: ${numeroA} e ${numeroB}`);

    let inverte = numeroA;
    numeroA = numeroB;
    numeroB = inverte;

    alert(`Valores depois da troca: ${numeroA} e ${numeroB}`);
}
invertendoDados();