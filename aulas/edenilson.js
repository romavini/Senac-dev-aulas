

let joao = 0
let jose = 0
let claudio = 0
let mario = 0
let nulo = 0
let branco = 0

let totalVotos = 0


console.log("### Comecem a Votação ###")

for (let eleitores = 1; eleitores <= 5; eleitores++) {
  console.clear();

  console.log(" 1 João ")
  console.log(" 2 José ")
  console.log(" 3 Claudio ")
  console.log(" 4 Mário ")
  console.log(" 5 Nulo ")
  console.log(" 6 Em Branco ")


  let vote = prompt(" Voto ")

  if (vote == "1") {
    joao++
    totalVotos++
  } else if (vote == "2") {
    jose++
    totalVotos++
  } else if (vote == "3") {
    claudio++
    totalVotos++
  } else if (vote == "4") {
    mario++
    totalVotos++
  } else if (vote == "5") {
    nulo++
    totalVotos++
  } else if (vote == "6") {
    branco++
    totalVotos++
  }
}
console.log("")
console.log(" Resultados ")

console.log(" voto João " + joao)
console.log(" voto José " + jose)
console.log(" voto Claudio " + claudio)
console.log(" voto Mário " + mario)
console.log(" voto Nulo " + nulo)
console.log(" Em Branco " + branco)

console.log(" Total de Votos " + totalVotos)

if (joao > jose && joao > claudio && joao > mario) {
  console.log(" João Venceu !!!")
} else if (jose > claudio && jose > mario) {
  console.log(" José Venceu !!! ")
} else if (claudio > mario) {
  console.log(" Cláudio Venceu !!! ")
} else if (mario > joao) { // else
  console.log(" Mário Venceu !!!")
};
