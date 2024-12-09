/*
Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.

*/

// Escolha da área
let area = prompt("Você deseja seguir para a área de Back-End (digite 0) ou Front-End (digite 1)?");

if (area === "0") {
  let backend = prompt("Você quer aprender C# ou Java?");
  alert(`Ótima escolha! Estudar ${backend} abrirá muitas oportunidades no Back-End.`);
} else if (area === "1") {
  let frontend = prompt("Você quer aprender React ou Vue?");
  alert(`Ótima escolha! Estudar ${frontend} abrirá muitas oportunidades no Front-End.`);
} else {
  alert("Opção inválida! Por favor, reinicie o jogo e digite 0 ou 1.");
}

// Especialização ou Fullstack
let espOuFull = prompt("Você gostaria de se especializar na sua área escolhida (digite 0) ou se tornar Fullstack (digite 1)?");

if (espOuFull === "0") {
  alert("Prepare-se para se aprofundar ainda mais na sua área escolhida!");
} else if (espOuFull === "1") {
  alert("Abra seus horizontes! Tornar-se Fullstack é um desafio incrível.");
} else {
  alert("Opção inválida! Por favor, reinicie o jogo e digite 0 ou 1.");
}

// Tecnologias adicionais
let tecnologias = [];
let resposta = "ok";

while (resposta.toLowerCase() === "ok") {
  let tecnologia = prompt("Qual tecnologia você gostaria de aprender?");
  tecnologias.push(tecnologia);
  resposta = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Responda 'ok' para continuar ou qualquer outra coisa para encerrar.");
}

alert("Ótimo! Aqui está a lista de tecnologias que você deseja aprender:");
alert(tecnologias.join(", "));


