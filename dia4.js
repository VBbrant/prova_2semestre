let num = Math.floor(Math.random() * 11);
let max = 3;
let tentativas = 0;
console.log("Tente adivinhar o número entre 0 e 10!");
while (tentativas < max) {
  const chute = parseInt(prompt("Digite o seu chute:"));

  if (chute === num) {
    console.log("Parabéns! Você acertou!");
    break;
  } else {
    console.log("Você errou. Tente novamente!");
    tentativas=tentativas+1;
  }
}

if (tentativas === max) {
  console.log("Suas tentativas acabaram. O número era:", num);
}