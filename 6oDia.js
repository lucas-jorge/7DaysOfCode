/*Sabe o programinha que você criou ontem para montar a sua própria lista de compras? Hoje o seu desafio é deixar ele ainda mais legal!

Você já viu como trabalhar com arrays de forma simples, adicionando itens na sua lista de compras.

Outra operação muito comum é a de remoção de itens da lista e, por isso, é muito importante que você saiba como fazer isso.

Pensando a fundo, existem N maneiras de deletar um item de uma lista. Você pode remover o primeiro item, o último, ou qualquer um do meio da lista. Cada uma dessas operações tem o seu próprio método dentro das documentações dos arrays em Javascript. Vamos falar mais sobre esses métodos na seção "Dicas".

Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?

A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.

Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

Por fim, ele voltará para o ciclo inicial de perguntas.

Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

Por exemplo: “Não foi possível encontrar o item dentro da lista!”

Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.*/

const prompt = require('prompt-sync')({ sigint: true });

let lista = [];
let resposta = prompt('Deseja adicionar uma comida na sua lista de compras? Responda com sim ou com nao. ');

while (resposta === 'sim') {
    const comida = prompt('Qual comida você deseja inserir? ');
    const categoria = prompt('Em qual categoria essa comida se encaixa? ');
    lista.push({ comida, categoria });
    resposta = prompt('Deseja adicionar mais alguma coisa na sua lista de compras? Responda com sim ou com nao. ');
}

console.log('Lista de compras: ');
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

for (let i = 0; i < lista.length; i++) {
    if (lista[i].categoria === 'frutas') {
        frutas.push(lista[i].comida);
    } else if (lista[i].categoria === 'laticínios') {
        laticinios.push(lista[i].comida);
    } else if (lista[i].categoria === 'congelados') {
        congelados.push(lista[i].comida);
    } else if (lista[i].categoria === 'doces') {
        doces.push(lista[i].comida);
    }
}

console.log(`Frutas: ${frutas}`);
console.log(`Laticínios: ${laticinios}`);
console.log(`Congelados: ${congelados}`);
console.log(`Doces: ${doces}`);

let remover = prompt('Deseja remover algum item da sua lista de compras? Responda com sim ou com nao. ');

while (remover === 'sim') {
    const item = prompt('Qual item você deseja remover? ').toLowerCase(); // Convertendo para letras minúsculas
    let indice = -1;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].comida.toLowerCase() === item) { // Convertendo para letras minúsculas
            indice = i;
            break;
        }
    }

    if (indice === -1) {
        console.log('Não foi possível encontrar o item dentro da lista!');
    } else {
        lista.splice(indice, 1);
        console.log('Item removido com sucesso!');
    }

    remover = prompt('Deseja remover mais algum item da sua lista de compras? Responda com sim ou com nao. ');
}

console.log('Lista de compras: ');
console.log(`Frutas: ${frutas}`);
console.log(`Laticínios: ${laticinios}`);
console.log(`Congelados: ${congelados}`);
console.log(`Doces: ${doces}`);