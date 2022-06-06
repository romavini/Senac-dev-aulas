// Exercício 1 

let valor1 = parseFloat(prompt("valor 1")); // Recebe do Usuário
let valor2 = parseFloat(prompt("valor 2")); // Trata o valor
let valor3 = parseFloat(prompt("valor 3"));

if (valor1 > valor2) { // Valor 1 é maior que o 2
  if (valor1 > valor3) { // Se sim, Valor 1 maior que o 3
    console.log("Valor 1: " + valor1 + " é maior!")
  } else { // Senão, Valor 3
    console.log("Valor 3 é maior!")
  }
} else if (valor2 > valor3) { // Senão, Valor 2 é maior que 3
  console.log("Valor 2 é maior!")
} else { // Senão
  console.log("Valor 3 é maior!")
}