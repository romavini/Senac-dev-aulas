// // Tipos
// let usuario;
// console.log(usuario, typeof(usuario));

// usuario = "513516";
// console.log(usuario, typeof(usuario));

// usuario = parseFloat(usuario);
// console.log(usuario, typeof(usuario));

// console.log(isNaN(usuario), typeof(isNaN(usuario)));


// //-----------
// // Console
// console.log("Olá!");

// let info = "Seu caminho é à esquerda.";
// console.log(info);
// console.log("Olá! " + info)
// console.log("Olá!", info)

// console.log(2 > 1)
// console.log(typeof(2 > 1))
// console.log(typeof(typeof(2 > 1)))

// prompt("Insira o número do cartão");

// let resposta;
// resposta = prompt("Qual a sua idade?")
// console.log(resposta, typeof(resposta), parseInt(resposta))


// //-----------
// // Decisão
// let idade = 18;

// if (idade < 18) {
//   // 1º escopo
//   console.log(idade, "Menor de idade ");
// } else if (idade == 18) {
//   // 2º escopo
//   console.log(idade, "Idade é 18")
// } else {
//   // 3º escopo
//   console.log(idade, "Maior de idade")
// };



// if (idade < 18) {
//   // 1º escopo
//   console.log(idade, "Menor de idade ");
// };
// if (idade == 18) {
//   // 1º escopo
//   console.log(idade, "Idade é 18");
// };
// if (idade >= 18) {
//   // 1º escopo
//   console.log(idade, "Maior de idade");
// };

// ====================================
// Exercício 1
// Recebe três valores, mostre qual é o menor e o maior entre eles.
// [Extra 1]: Mostrar os três valores em ordem;
// [Extra 2]: Validar a entrada de valores.


// ====================================
// Exercício 2
// Receber dois valores e exibir se são iguais ou não
//Entrada:
2
7
//Saída:
"2 e 7 não são iguais."
// ----------- 
//Entrada:
4
4
//Saída:
"4 e 4 são iguais."

// ====================================
// Exercício 3
// Receber um valor, tratá-lo e retornar se ele é par ou ímpar


// ====================================
// Exercício 4
// Conte de 1 à 20, mostrando se o valor é par ou ímpar;

for (let i = 1; i <= 20; i ++) {
  if (i % 2 == 0){
    console.log(i + " é par!");
  } else {
    console.log(i + " é ímpar!");
  };
};

// ====================================
// Exercício 5
// Receba um valor do usuário. Mostre a tabuada daquele valor


// ====================================
// Exercício 6
/*
Em uma eleição para vereadoreds, existem quatro candidatos. Os votos são informados por meio de código. Os códigos utilizados são:

1 , 2, 3, 4  - Votos para os respectivos candidatos 
(você deve montar a tabela ex: 1 - Jose/ 2- João/etc)
5 - Voto Nulo
6 - Voto em Branco

Faça um programa que calcule e mostre:
 - O total de votos para cada candidato;
 - O total de votos nulos;
 - O total de votos em branco;
 - A percentagem de votos nulos sobre o total de votos;
 - A percentagem de votos em branco sobre o total de votos;
 - Quem venceu a eleição.
*/