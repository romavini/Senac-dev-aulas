// let idade = prompt("Digfte sua idade:");
// idade = parseInt(idade);

// if (idade >= 18){
//   console.log("Pode entrar!")
// } else {
//   console.log("Vou chamar seus pais!")
// }

function Soma (a, b){
  let soma = a + b;
  return soma;
}

let resultado = Soma(5, 20)
console.log(resultado)


// Criar função para checar se o usuário é maior de idade
// Maior de idade: true
// Menor de idade: false
function ChecaMaiorIdade(a){
  if (a>=16){
    return true
  } else {
    return false
  }
}

let idade = prompt("Idade")
idade = parseInt(idade);

console.log(ChecaMaiorIdade(idade))

