// Ele deve pedir para o usuário responder 3 perguntas:
//- Qual o seu nome?
//- Quantos anos você tem?
// Qual linguagem de programação você está estudando?

//À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

//No final, o sistema vai exibir a mensagem:

//"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

const prompt = require('prompt-sync')({sigint:true});

const nome = prompt('Qual o seu nome? ');
const idade = prompt('Quantos anos você tem? ');
const linguagem = prompt('Qual linguagem de programação você está estudando? ');

// Ele deve pedir para o usuário responder 3 perguntas:
//- Qual o seu nome?
//- Quantos anos você tem?
// Qual linguagem de programação você está estudando?

//À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

//No final, o sistema vai exibir a mensagem:

//"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

const prompt = require('prompt-sync')({sigint:true});

const nome = prompt('Qual o seu nome? ');
const idade = prompt('Quantos anos você tem? ');
const linguagem = prompt('Qual linguagem de programação você está estudando? ');

console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);