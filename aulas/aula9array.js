// Array
let lista = [];

// console.log(lista)
// console.log(typeof(lista))

let frutas = ["banana", "maçã", "pera"];

// console.log(frutas)
// console.log(frutas[0])
// console.log(frutas[1])
// console.log(frutas[2])

// frutas.push("uvaa")
// console.log(frutas)
// frutas.pop()
// console.log(frutas)

// let alunos = [];
// for (let i = 1; i <= 3; i++){
//   alunos.push(prompt("Insira o aluno"))
// }
// alunos.sort()
// console.log(alunos)

alunos = [];
while (alunos.length < 5){
  alunos.unshift(prompt("Insira aluno"));
}
console.log(alunos);