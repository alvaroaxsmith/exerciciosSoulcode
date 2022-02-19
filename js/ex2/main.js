/* 

- [x] Crie um objeto "Usuário" com as propriedades que você desejar. 

- [x] Depois, mostre uma mensagem na tela perguntando quantos usuários devem ser salvos. 

- [x] Após isso, peça todos os dados necessários para seu objeto usuário e depois o salve em um array.

- [x] Quando todos os objetos Usuários forem salvos, mostre o valor de cada propriedade do usuário na tela do Browser.

*/
const NUMBER_OF_USERS = parseInt(prompt('Quantos usuários devem ser salvos?'))

let arr = [];

for (let i = 1; i <= NUMBER_OF_USERS; i++) {
    let data = {
        nome:'',
        idade:'',
        peso: '',
    }
    data.nome = prompt('Digite o nome:');
    data.idade = parseInt(prompt('Digite a idade:'));
    data.peso = parseFloat(prompt('Digite a peso:'));

    arr.push(data);
}

for ( let aux of arr ) {
    document.write(`nome: ${aux.nome}, <br> <br> idade: ${aux.idade}, <br><br> peso: ${aux.peso}. <br><hr><br>`);
}