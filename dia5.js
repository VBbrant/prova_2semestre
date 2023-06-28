var listaCompras = {
    Frutas: [],
    Laticinios: [],
    Congelados: [],
    Doces: []
  };
  
  var adicionarMais = true;
  
  while (adicionarMais) {
    var resposta = prompt("Deseja adicionar uma comida na lista de compras? (sim/não)");
  
    if (resposta.toLowerCase() == "sim") {
      var comida = prompt("Digite o nome da comida:");
      var categoria = prompt("Em qual categoria essa comida se encaixa? (frutas/laticinios/congelados/doces)");
  
      if (listaCompras.hasOwnProperty(categoria)) {
        listaCompras[categoria].push(comida);
      } else {
        console.log("Categoria inválida!");
      }
    } else if (resposta.toLowerCase() == "não") {
      adicionarMais = false;
    } else {
      console.log("Resposta inválida!");
    }
  }
  
  console.log("Lista de compras:");
  
  for (var categoria in listaCompras) {
    console.log("   " + categoria + ": " + listaCompras[categoria].join(", "));
  }
  