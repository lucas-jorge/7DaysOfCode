const prompt = require("prompt-sync")({ sigint: true });

menu(); // call the menu function
let operacao = prompt("Digite a operação desejada: ");
let numero = parseFloat(prompt("Digite um número: "));
let numero2 = parseFloat(prompt("Digite outro número: "));
let resultado;

switch (operacao) { // use a switch statement
  case "1":
    resultado = soma(numero, numero2);
    break;
  case "2":
    resultado = subtracao(numero, numero2);
    break;
  case "3":
    resultado = multiplicacao(numero, numero2);
    break;
  case "4":
    resultado = divisao(numero, numero2);
    break;
  default:
    console.log("Operação inválida."); // display an error message
}

console.log(`Resultado: ${resultado}`); // use template literals

function menu() {
  console.log("Bem vindo a calculadora, temos as seguintes operações:");
  console.log("1 - Soma");
  console.log("2 - Subtração");
  console.log("3 - Multiplicação");
  console.log("4 - Divisão");
  console.log("0 - Sair");
}

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
  if (numero2 === 0) { // check for division by zero
    console.log("Não é possível dividir por zero."); // display an error message
    return;
  }
  return numero / numero2;
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
}