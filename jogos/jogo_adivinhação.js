// Jogo de Adivinhação
let segredo = Math.floor(Math.random() * 10); // Número aleatório, de 0 à 9
let jogoRodando = true; // Deixa o jogo rodando
let tentativas = 0; // Número atual de tentativas

while (jogoRodando) {
  if (tentativas == 5) { // Testa se ainda tem tentativas
    console.log("Você ultrapassou");
    jogoRodando = false; // Fim do jogo
  } else {
    tentativas++; // Tentativa + 1
    
    let palpite = prompt("Insira o palpite"); // Pede palpite
    palpite = parseInt(palpite); // Transforma em inteiro

    if (palpite == segredo) { // Palpite igual ao segredo
      console.log("Parabéns!");
      jogoRodando = false; // Fim do jogo
    } else if (palpite > segredo) { // Palpite maior que segredo
      console.log("Menos!")
    } else { // Palpite menor que segredo
      console.log("Mais!")
    }
  }
}