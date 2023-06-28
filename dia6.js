var listaCompras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: []
  };
  
  var adicionarMais = true;
  
  while (adicionarMais) {
    var resposta = prompt("Deseja adicionar uma comida na lista de compras? (sim/não/remover)");
  
    if (resposta == "sim") {
      var comida = prompt("Digite o nome da comida:");
      var categoria = prompt("Em qual categoria essa comida se encaixa? (frutas/laticinios/congelados/doces)");
  
      if (listaCompras.hasOwnProperty(categoria)) {
        listaCompras[categoria].push(comida);
      } else {
        console.log("Categoria inválida!");
      }
    } else if (resposta== "remover") {
      if (Object.keys(listaCompras).length == 0) {
        console.log("A lista de compras está vazia!");
      } else {
        console.log("Itens na lista de compras:");
        for (var categoria in listaCompras) {
          console.log("   " + categoria + ": " + listaCompras[categoria].join(", "));
        }
  
        var itemRemover = prompt("Digite o nome do item que deseja remover:");
  
        var itemEncontrado = false;
        for (var categoria in listaCompras) {
          var index = listaCompras[categoria].indexOf(itemRemover);
          if (index !== -1) {
            listaCompras[categoria].splice(index, 1);
            itemEncontrado = true;
            break;
          }
        }
  
        if (itemEncontrado) {
          console.log("O item foi removido da lista de compras.");
        } else {
          console.log("Não foi possível encontrar o item dentro da lista!");
        }
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
  