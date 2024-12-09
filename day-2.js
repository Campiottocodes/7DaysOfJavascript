/*Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites.Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome ?
  - Quantos anos você tem ?
    - Qual linguagem de programação você está estudando ?

      À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Note que cada informação entre[] é uma das respostas dadas pela pessoa.
*/

/* Codigo executato no console do navegador*/


let seuNome = prompt("Qual seu nome");
let suaIdade = prompt("Quantos anos voce tem?");
let qualSuaLinguagem = prompt("Qual linguagem de programação voce esta estudando?");

let msg = (`Olá ${seuNome}, você tem ${suaIdade} e já esta aprendendo ${qualSuaLinguagem}!`);

alert(msg);