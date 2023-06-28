function soma(a, b) {
    return a + b;
  }
  
  function subtracao(a, b) {
    return a - b;
  }
  
  function multiplicacao(a, b) {
    return a * b;
  }
  
  function divisao(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Erro: divisão por zero";
    }
  }
  
  function calculadora() {
    while (true) {
      let opcao = prompt(
        "Escolha uma opção:\n+ para Soma\n- para Subtração\n* para Multiplicação\n/ para Divisão\nS para Sair"
      );
  
      if (opcao.toLowerCase() === "s") {
        alert("Até a próxima");
        break;
      }
  
      let valorA = parseFloat(prompt("Digite o primeiro valor:"));
      let valorB = parseFloat(prompt("Digite o segundo valor:"));
      let resultado;
  
      switch (opcao) {
        case "+":
          resultado = soma(valorA, valorB);
          break;
        case "-":
          resultado = subtracao(valorA, valorB);
          break;
        case "*":
          resultado = multiplicacao(valorA, valorB);
          break;
        case "/":
          resultado = divisao(valorA, valorB);
          break;
        default:
          alert("Opção inválida. Tente novamente.");
          continue;
      }
  
      alert("Resultado: " + resultado);
    }
  }
  
  calculadora();
  