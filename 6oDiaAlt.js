// Inicializa a lista de compras vazia
const prompt = require("prompt-sync")({ sigint: true});

const listaDeCompras = [];

function mostrarLista() {
  console.log("=== Lista de Compras ===");
  if (listaDeCompras.length === 0) {
    console.log("A lista de compras está vazia.");
  } else {
    for (let i = 0; i < listaDeCompras.length; i++) {
      console.log(`${i + 1}. ${listaDeCompras[i]}`);
    }
  }
  console.log("=========================");
}

function adicionarItem() {
  const item = prompt("Digite o nome do item que deseja adicionar:");
  listaDeCompras.push(item);
  console.log(`"${item}" foi adicionado à lista de compras.`);
}

function removerItem() {
  if (listaDeCompras.length === 0) {
    console.log("A lista de compras está vazia. Não é possível remover itens.");
    return;
  }

  mostrarLista();
  const itemRemover = prompt("Digite o número do item que deseja remover:\n ");

  const index = parseInt(itemRemover) - 1;
  if (isNaN(index) || index < 0 || index >= listaDeCompras.length) {
    console.log("Índice inválido. Por favor, digite um número válido da lista.");
    return;
  }

  const itemRemovido = listaDeCompras.splice(index, 1)[0];
  console.log(`"${itemRemovido}" foi removido da lista de compras.`);
}

function menu() {
  while (true) {
    const opcao = prompt(
      "Escolha uma opção:\n1. Mostrar lista\n2. Adicionar item\n3. Remover item\n4. Sair\n"
    );

    switch (opcao) {
      case "1":
        mostrarLista();
        break;
      case "2":
        adicionarItem();
        break;
      case "3":
        removerItem();
        break;
      case "4":
        console.log("Saindo do programa.");
        return;
      default:
        console.log("Opção inválida. Por favor, escolha uma opção válida.");
    }
  }
}

menu();