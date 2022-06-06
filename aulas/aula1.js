// console
// console.log("Olá mundo!") // Isto é um comentário

// teste

/* Isto é um comentário
de várias linhas 
*/


// // Variáveis
// var preco;

// //Direcionando um valor
// preco = prompt("Insira o preço: ");

// var valorPago = prompt("Insira o valor pago: ");


// var troco;
// troco = valorPago - preco;

// console.log("O Troco é de: " + troco)



// IF
var precoProduto = prompt("Qual o preço?");
precoProduto = parseFloat(precoProduto);

var valorPago = prompt("Quanto você pagou?");
valorPago = parseFloat(valorPago);

if (valorPago == precoProduto) {
  console.log("Parabéns! Não há troco.")
} else if (valorPago > precoProduto){
  console.log("Há troco!")
} else {
  console.log("Falta dinheiro!")
}

// string -> Texto
// int/number -> inteiro
// float/number -> decimal
// object -> objeto
// array -> lista

