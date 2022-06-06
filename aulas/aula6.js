// // Menor valor entre 5.

// v1 = parseFloat(prompt("Valor 1"));
// v2 = parseFloat(prompt("Valor 2"));
// v3 = parseFloat(prompt("Valor 3"));
// v4 = parseFloat(prompt("Valor 4"));
// v5 = parseFloat(prompt("Valor 5"));

// if (v1 < v2 && v1 < v3 && v1 < v4 && v1 < v5){
//   console.log("O valor 1 é o menor: " + v1)
// } else if (v2 < v3 && v2 < v4 && v2 < v5){
//   console.log("O valor 2 é o menor: " + v2)
// } else if (v3 < v4 && v3 < v5) {
//   console.log("O valor 3 é o menor: " + v3)
// } else if (v4 < v5){
//   console.log("O valor 4 é o menor: " + v4)  
// } else {
//   console.log("O valor 5 é o menor: " + v5)  
// }

// Exercício mínimo entre 5.
let minimoValor = parseFloat(prompt("Insira o valor 1"));
for (let i = 2; i <= 5; i++){
  let novoValor = parseFloat(prompt("Insira o valor " + i))
  if (novoValor > minimoValor){
    minimoValor = novoValor
  }
}
console.log(minimoValor)

