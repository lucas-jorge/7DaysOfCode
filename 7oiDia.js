const prompt = require("prompt-sync")({ sigint: true });

let numero = parseFloat(prompt("Digite um número: "));
let operacao = prompt("Escolha qual operação deseja fazer (+, -, *, /): ");
let numero2 = parseFloat(prompt("Digite outro número: "));
let resultado;

if (operacao === "+") {
    resultado = soma(numero, numero2);
} else if (operacao === "-") {
    resultado = subtracao(numero, numero2);
} else if (operacao === "*") {
    resultado = multiplicacao(numero, numero2);
} else if (operacao === "/") {
    resultado = divisao(numero, numero2);
} else {
    console.log("Operação inválida.");
}

console.log("Resultado: " + resultado);

function soma(numero, numero2) {
    return numero + numero2;
}

function subtracao(numero, numero2) {
    return numero - numero2;
}

function multiplicacao(numero, numero2) {
    return numero * numero2;
}

function divisao(numero, numero2) {
    return numero / numero2;
}