/*Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!

Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.*/

const prompt = require('prompt-sync')({sigint:true});

const numero = Math.floor(Math.random() * 10);
let tentativas = 3;

while (tentativas > 0) {
    const chute = prompt('Qual o número que você deseja chutar? ');
    if (chute == numero) {
        console.log('Parabéns, você acertou!');
        break;
    } else {
        console.log(`Você errou, você tem mais ${1- tentativas} tentativas restantes.`);
        --tentativas;
    }
    }
    console.log(`O número era ${numero}`);