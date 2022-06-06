// console.log("Olá mundo!"); /* Só uma exibição no console.
// Vai exibir a mensagem no console
// */

// // Desafio dos Copos
// var copoVerde;
// copoVerde = "Coca-Cola";
// var copoPreto = "Guaraná";
// console.log(copoVerde, copoPreto)

// // Imprimir "'Guaraná' e 'Coca-Cola'"


var entradaUsuario = prompt("Qual o seu nome?");

console.log("Olá, " + entradaUsuario + "!!! Tudo bem?");

var idadeUsuario = prompt("Qual é a sua idade?");

idadeUsuario = parseInt(idadeUsuario);

if (idadeUsuario > 18) {
  console.log("Você é maior de idade!!")
}
else if (idadeUsuario == 18){
  console.log("Já pode ser preso!")
}
else if (idadeUsuario == 15) {
  console.log("Estude!")
};

if (idadeUsuario < 18) {console.log("Vou ligar para sua mãe!")};