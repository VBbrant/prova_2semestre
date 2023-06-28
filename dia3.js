let area = prompt("Você quer seguir para a área de Front-End ou para a área de Back-End ?");
if (area === "Front-End") {
    linguagem = prompt("Você quer aprender React ou Vue ?");
} else if (area === "Back-End") {
    linguagem = prompt("Você quer aprender C# ou Java ?");
}

let escolha = prompt("Você deseja se especializar na área escolhida ou se desenvolver para se tornar Fullstack?");

if (escolha == "especializacao") {
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
} else if (escolha=="Fullstack") {
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg == "ok") {
    let tecnologia = prompt("Qual?");
    alert(`${tecnologia} é realmente uma tecnologia muito legal!`);
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}
