/*Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

O programa deverá imprimir, por exemplo:

Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho*/

const prompt = require('prompt-sync')({sigint:true});

let lista = [];
let resposta = prompt('Deseja adicionar um item na sua lista de compras? Responda com sim ou com nao. ');
while (resposta == 'sim') {
    const item = prompt('Qual item você deseja inserir? ');
    const categoria = prompt('Em qual categoria essa item se encaixa? ');
    lista.push({item, categoria});
    resposta = prompt('Deseja adicionar mais alguma coisa na sua lista de compras? Responda com sim ou com nao. ');
} 
console.log('Lista de compras: ');
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let limpeza = [];

for (let i = 0; i < lista.length; i++) {
    if (lista[i].categoria == 'frutas') {
        frutas.push(lista[i].item);
    } else if (lista[i].categoria == 'laticínios') {
        laticinios.push(lista[i].item);
    } else if (lista[i].categoria == 'congelados') {
        congelados.push(lista[i].item);
    } else if (lista[i].categoria == 'doces') {
        doces.push(lista[i].item);
    } else if (lista[i].categoria == 'limpeza') {
        limpeza.push(lista[i].item);
    }
} 
console.log(`Frutas: ${frutas}`);
console.log(`Laticínios: ${laticinios}`);
console.log(`Congelados: ${congelados}`);
console.log(`Doces: ${doces}`);
console.log(`Limpeza: ${limpeza}`);