/* Interpretação de Código

Exercício 1

O programa recebe um número digitado pelo usuário e testa, através do uso do resto da divisão, se o número é PAR. Ao dividir o número digitado por 2 ele realiza um teste: Se o resto for IGUAL A 0, ele envia a mensagem que o número passou no teste. Se o resultado da condição for falso, ou seja, o resto da divisão é DIFERENTE DE 0, o número não passou no teste porque é ímpar e a mensagem "Não passou no teste" será exibida.


Exercício 2 

a. O código serve para informar o preço da fruta que o usuário digitou.

b. O preço da fruta  Maçã  é  R$  2.25

c. O preço da fruta  Pêra  é  R$  5


Exercício 3

a. A primeira linha está solicitando que o usuário digite um numero, transformando o tipo do que foi digitado de string para número, e armazenando em uma variável declarada como CONST nomeada "numero".

b. Se digitou 10:
    "Esse número passou no teste"
    Será exibida uma mensagem de erro também devido a variável mensagem não ter sido definida fora do escopo filho (if)

   Se digitou -10, será exibida apenas a mensagem de erro da variável undefined.

c. Sim. Haverá um erro informando que a variável "mensagem" é undefined, porque ela foi declarada apenas dentro do bloco do IF logo ela não possui Escopo Global e não pode ser usada sem ser declarada fora do bloco em questão.




/*
Escrita de Código


Exercício 4*/

/* let idadeUsuario = Number(prompt("Qual a sua idade?"))
if (idadeUsuario >= 18) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir!")
}

 */
/* Exercício 5 */

/* let turno = prompt("Qual o seu turno ? Digite M (matutino), V (Vespertino) ou N (Noturno):").toUpperCase()
if (turno === "M") {
    console.log("Bom dia!")
} else {
   if(turno === "V"){
    console.log("Boa Tarde!")
   }   
   else if(turno === "N"){
    console.log("Boa Noite!")
   } else{
    console.log("Turno inválido!")
    }  
  } */



/* Exercício 6 */

/* let turno = prompt("Qual o seu turno ? Digite M (matutino), V (Vespertino) ou N (Noturno):").toUpperCase()
switch (turno){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
    default:
        console.log("Turno inválido!")
        break
   }    */
   


/* Exercício 7 */

/* let genero = prompt("Qual o gênero do filme ?").toLowerCase()
let preco = Number(prompt("Qual o preço do ingresso?"))
if ((genero === "fantasia") && (preco < 15)){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
} */
   




/* Desafio 1 */

/* let genero = prompt("Qual o gênero do filme ?").toLowerCase()
let preco = Number(prompt("Qual o preço do ingresso?"))
if ((genero === "fantasia") && (preco < 15)){
    let snack = prompt("Qual snack que você quer comprar?").toLowerCase()
    console.log("Bom filme!")
    console.log("... com", snack)
} else {
    console.log("Escolha outro filme :(")
} */



/* Desafio 2 */

const nome = prompt("Digite seu nome completo:")
let tipoJogo = prompt("Digite IN para jogo Internacional ou DO para jogo Doméstico:").toUpperCase()
let etapa = prompt("Qual a etapa do jogo? Digite SF para semifinal, DT para decisão do 3º lugar ou F para final:").toUpperCase()
let categoria = prompt("Escolha a categoria do assento: 1, 2, 3 ou 4 ?")
const quantidade = Number(prompt("Digite a quantidade de ingressos desejados:"))
let preco = 0
let moeda = "R$"
let contador = 0

console.log(tipoJogo)
console.log(etapa)
console.log(categoria)
//Testa se os dados foram digitados dentro das opções possíveis

if ((tipoJogo === "IN") || (tipoJogo === "DO")){
    contador += 1
    console.log(contador)
}

if ((etapa === "SF") || (etapa === "DT") || (etapa === "F")){
    contador += 1
    console.log(contador)
}

if ((categoria === "1") || (categoria === "2") || (categoria === "3") || (categoria === "4")){
    contador += 1
    console.log(contador)
}



if (contador === 3){

    //Testa a categoria e a etapa definindo o valor do ingresso
switch (categoria){
    case "1":
        if (etapa === "SF") {
            etapa = "Semifinal"
            preco = 1320
        } else if (etapa === "DT"){
            etapa = "Decisão do 3º Lugar"
            preco = 660
          } else{
            etapa = "Final"
            preco = 1980
            }
        break
    case "2":
        if (etapa === "SF") {
            etapa = "Semifinal"
            preco = 880
        } else if (etapa === "DT"){
            etapa = "Decisão do 3º Lugar"
            preco = 440
          } else{
            etapa = "Final"
            preco = 1320
            }
        break
    case "3":
        if (etapa === "SF") {
            etapa = "Semifinal"
            preco = 550
        } else if (etapa === "DT"){
            etapa = "Decisão do 3º Lugar"
            preco = 330
          } else{
            etapa = "Final"
            preco = 880
            }
        break
    case "4":
        if (etapa === "SF") {
            etapa = "Semifinal"
            preco = 220
        } else if (etapa === "DT"){
            etapa = "Decisão do 3º Lugar"
            preco = 170
          } else{
            etapa = "Final"
            preco = 330
            }
        break
    } 

//*Testa se o Jogo é Domestico ou Internacional, alterando o preço e a moeda
if (tipoJogo === "IN") {
    tipoJogo = "Internacional"
    preco = preco / 4.10
    moeda = "U$"
} else {
    tipoJogo = "Nacional"
}

// Imprime o recibo na console
console.log("---Dados da compra---")
console.log("Nome do cliente:", nome)
console.log("Tipo do jogo:", tipoJogo)
console.log("Etapa do jogo:", etapa)
console.log("Categoria:", categoria)
console.log("Quantidade de Ingressos:", quantidade, "ingressos")
console.log("---Valores---")
console.log("Valor do Ingressos:", moeda, preco)
console.log("Valor total:", moeda, quantidade*preco)

} else {
    console.log("Dados inválidos! Recarregue a página e tente novamente.")
}