let nome = prompt("Qual o seu nome?");
let anos = prompt("Quantos anos você tem?");
let ling = prompt("Qual linguagem de programação você está estudando?");
console.log("Olá " +nome+", você tem "+anos+" e já está aprendendo " +ling+"!");
let gosta = prompt("Você gosta de estudar " +ling+"? Responda com o número 1 para SIM ou 2 para NÃO.");
if (gosta === "1") {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
  } else if (gosta === "2") {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
  } else {
    alert("Resposta inválida. Por favor, responda com 1 ou 2.");
  }
