/* Interpretação de Código

Exercicio 1
Acredito que será impreso no console uma mensgaem de erro, pois não foi feita a declaração de "a" e "b" como variáveis.
Mas assumindo que "a" e "b" tivessem sido definidos como variáveis utilizando o "let" seria escrito o seguinte no console:

10

10 5

Caso fosse utilizado o "const" seria impresso primeiro o valor 10 e depois seria exibido um erro por tentar alterar o valor de const.
*/


/* Exercicio 2

Assumindo que as variáveis foram definidas como let:

Será impresso no console:

10 10 10

*/

/* Escrita de Código

Exercicio 1
Letras a, b, c
*/

let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

/* Análise Letra d:
Apareceu "undefined" porquê não atrinuimos um valor para as variáveis, e dessa forma o javascript não pode definir que tipo de variável é aquela.
*/

/* Letra d repetida*/
nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

/* Letra e*/

console.log(typeof nome)
console.log(typeof idade)

/* O console mostrou agora que ambas as variáveis são dotipo STRING, mesmo eu tendo digitado um número na janela do prompt. Entendo que os valores recebidos no PROMPT são armazenados como string.
*/


/* Letra f*/
console.log("Olá", nome, "você tem", idade, "anos")


/* Exercicio 2*/

let serie = prompt("Qual sua série de TV favorita?")
let estiloMusical = prompt("Qual seu estilo musical favorito?")
let lugar = prompt("Em que lugar do mundo você gostaria de morar?")
let diversao = prompt("O que você mais gosta de fazer para se divertir?")
let comida = prompt("Qual sua comida preferida?")

console.log("1. Qual sua série de TV favorita?")
console.log("Resposta: Minha série favorita é", serie)

console.log("2. Qual seu estilo musical favorito?")
console.log("Resposta: Eu adoro ouvir", estiloMusical)

console.log("3. Em que lugar do mundo você gostaria de morar?")
console.log("Resposta: Eu gostaria de morar no", lugar)

console.log("4. O que você mais gosta de fazer para se divertir?")
console.log("Resposta: Eu adoro", diversao)

console.log("5. Qual sua comida preferida?")
console.log("Resposta: Minha comida preferida é", comida)


/*Exercicio 3*/

let arrayComida = ["Bife", "Strognof", "Escondidinho", "Macarrão", "Empadão"]
console.log(arrayComida)

console.log("Essas são as minhas comidas preferidas:")
console.log(arrayComida[0])
console.log(arrayComida[1])
console.log(arrayComida[2])
console.log(arrayComida[3])
console.log(arrayComida[4])

arrayComida[1] = prompt("Qual a sua comida preferida?")
console.log(arrayComida)


/* Exercicio 4*/

let perguntas = ["Você estudou Javascript hoje?", "Você tem mais de 1,80 de altura?", "Você foi a praia hoje?"]
let respostas = [true, true, false]

console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])