/*Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.*/

let moneyCurrent = parseInt(prompt("Qual a quantidade inicial de dinheiro disponível? ")) 
let option 
let additional 
let subtraction
do { 
  option = prompt("Quantidade inicial de dinheiro disponível: R$"+moneyCurrent + "\n\nEscolha uma opção: \n1. Adicionar dinheiro \n2 remover dinheiro \n3. Sair")
  switch(option) {
    case `1`: 
      additional = parseInt(prompt("Quanto deseja adicionar?"))
      moneyCurrent += additional
      break
    case `2`:
      subtraction = parseInt(prompt("Quanto deseja remover?"))
      moneyCurrent -= subtraction
      break
  }    
} while (option != `3`);
if (option == `3`) {
  alert('O programa foi encerrado. ')
}
