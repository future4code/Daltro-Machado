/* Interpretação de Código

Exercício 1

O programa está somando cada valor assumido pela variável "i" ao valor da variável "valor". A variável "i" assumirá valores entre 0 e 4, que serão somados um a um ao conteudo da variável "valor". Logo após a execução do FOR será exibido no console o valor da variável "valor" que será igual a 10.



Exercício 2


a. Serão exibidos os numeros 19, 21, 23, 25, 27 e 30

b. Sim. O FOR OF faz com que a variável definida na sua estrutura (no caso "numero") navegue por cada elemento do array em questão executando o loop a mesma quantidade de vezes que a quantidade de índices existentes no array. Dessa forma, pode-se criar uma variável com valor inicial 0 (primeiro índice de um array) e ir incrementando ela a cada execução e se quiser manipular ou exibir estes índices de alguma forma, basta utilizar esta variável (contador).




Escrita de Código


Exercício 3*/

//Letra a

/* const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let elemento of array) {
    console.log(elemento)
} */

// Letra b.

/* const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let elemento of array) {
    console.log(elemento/10)
} */


// Letra c.

/* const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray = []
for (let elemento of array) {
    if ((elemento%2) === 0) {
        novoArray.push(elemento)    
    }
}
console.log(novoArray) */


// Letra d.

/* const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray = []
let indice = 0
for (let elemento of array) {
    novoArray.push("O elemento do índex " + indice + " é: " + elemento)
    console.log(novoArray[indice])
    indice ++
} */


// Letra e.

/* const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let valorMaximo = array[0]
let valorMinimo = array[0]

for (let elemento of array) {
    if (valorMaximo < elemento) {
        valorMaximo = elemento
    }
    if (valorMinimo > elemento) {
        valorMinimo = elemento
    }
}
console.log("O maior número é", valorMaximo, "e o menor é", valorMinimo) */



/* Desafio 1 

0
00
000
0000

*/


/* Desafio 2 Bamboozled */

/* const numero = Number(prompt("Digite o número:"))
console.log("Vamos jogar!!!")
let chute = Number(prompt("Dê o seu chute!"))
let tentativas = 0
if (chute !== numero) {
    while (chute !== numero) {
        tentativas ++
        console.log("O número chutado foi:", chute)
        if (chute > numero) {
            console.log("Errrrrrrrou, seu chute foi maior que o número!")  
        } else {
            console.log("Errrrrrrrou, é menor!")  
        }
        chute = Number(prompt("Dê o seu chute!"))
    }
    tentativas ++
    console.log("Acertou!!! O número é", chute)
    console.log("O número de tentativas foi:", tentativas)    
} else {
    tentativas ++
    console.log("Acertou!!! O número é", chute)
    console.log("O número de tentativas foi:", tentativas)
   
} */




/* Desafio 3 */

/* let numero = Math.floor((Math.random() * 100) + 1);
console.log("Vamos jogar!!!")
let chute = Number(prompt("Tente acertar o número entre 0 e 100 escolhido pelo computador!"))
let tentativas = 0
if (chute !== numero) {
    while (chute !== numero) {
        tentativas ++
        console.log("O número chutado foi:", chute)
        if (chute > numero) {
            console.log("Errrrrrrrou, seu chute foi maior que o número!")  
        } else {
            console.log("Errrrrrrrou, seu chute foi menor que o número!")  
        }
        chute = Number(prompt("Tente acertar o número entre 0 e 100 escolhido pelo computador!"))
    }
    tentativas ++
    console.log("Acertou!!! O número é", chute)
    console.log("O número de tentativas foi:", tentativas)    
} else {
    tentativas ++
    console.log("Acertou!!! O número é", chute)
    console.log("O número de tentativas foi:", tentativas)
} */

// A alteração do código em si foi fácil. Simplesmente precisei alterar a forma com que a variável "numero" receberia o número. Fiz alguns pequenos ajustes nas mensagens para o usuário para definir o range de numeros. A parte mais difícil foi encaixar a uma função da qual não sabia como funcionava exatamente no meu código. Mas também não foi complicado. Acredito que se eu ja tivesse o conhecimento sobre a função Math.floor() seria mais simples.
