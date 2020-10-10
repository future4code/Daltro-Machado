// Lista de Exercícios

// Interpretação de Código

// Exercicio 1

/* Este código está armazenando na variavel (meuDinheiro) o valor de 100 dolares processado pela
função "conversorDeMoeda()". o valor de 100 é o parâmetro passado para a função, que irá solicitar
ao usuário que digite o valor da cotação do dólar e após converter essa cotação para número e
armazená-la na variável (cotacao), irá multiplicar esta variável (cotacao) pelo parâmetro recebido (100),
retonando como saída dafunção a string "R$" concatenada com o valor calculado.
*/

// Execicio 2

/*
O código calcula e exibe o valor de um investimento de acordo com o investimento escolhido.
Da forma como foi escrito, ele irá sempre armazenar nas variáveis (novoMontante) e (segundoMontante)
respectivamente o valor de 150 investidos em Ações e 200 investidos no Tesouro Direto.
A função "investeDinheiro()" irá, em momentos distintos, receber estes dois parâmetros (tipo de
investimento e valor) calculando o valor após o investimento, multiplicando o valores recebidos (150 e 200)
por um multiplicador pré-definido de acordo com o investimento informado (Ações e Tesouro Direto).
A cada execução da função ela irá armazenar na variável (valorAposInvestimento) o resultado da multiplicação.
O retorno da função será a variável (valorAposInvestimento).
Existe uma teste de o tipo de investimento não ser válido, mas como os valores passados para afunção estão
pré-definidos no código, a mensagem de alerta não será mostrada.
*/

// Exercício 3

/*
O código primeiro cria 3 arrays, um com números e outros dois vazios.
Depois uma FOR percorre o array de numeros e testa cada um dos elementos para saber se é PAR ou IMPAR.
Então, caso seja PAR, adiciona o elemento no array1 e caso se for IMPAR adiciona no array2.
Após isso, uma frase informando o total de números é exibida no console seguida da quantidade de
numeros existentes nos três arrays.
*/

// Exercicio 4

/*
O código cria um array de números e duas variáveis, uma com valor infinito (numero1) e outra
com valor 0 (numero2). Depois, em um loop FOR ele percorre o array de numeros testando cada elemento desse array duas vezes
para encontrar o maior e o menor número do array. A cada núemro maior e menor que seu antecessor ele armazena
nas variáveis (numero1) e (numero2).
Após o loop ele exibe no console o valor das variáveis (numero1) e (numero2).
Acredito porém que existe uma falha nesta lógica para encontrar o menor número. Para este teste o código
utiliza a variável (numero2) que recebe valor inicial 0. Ele testa se o elemento do indice 0 é maior que
o conteúdo da variável e se for, atribui esse elemento a mesma. A lógica funcionará bem SE o primeiro elemento
do array não for um numero negativo. Caso isto aconteça esse número será descartado como o menor numero do array.
*/


// Exercícios de Lógica de Programação

// Exercício 1
/* 
Para iterar uma lista, podemos usar qualquer uma das 3 estruturas de loops, While, For e Forof.
*/

/* function exercicio1() {

const lista = [3, 4, 89, 56, 31, 48, 1, 100]

// Primeira forma
let indice = 0
while (indice < lista.length) {
    console.log(lista[indice])
    indice = indice + 1
}

// Segunda forma
for (let index = 0; index < lista.length; index++) {
    console.log(lista[index])
}

// Terceira forma
for (let i of lista) {
    console.log(i)
}
} */



// Exercício 2

/*
a) FALSE

b) FALSE

c) TRUE

d) TRUE

e) TRUE
*/


// Exercício 3

/*
const quantidadeDeNumerosPares
let i = 0
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
}

Este código não funciona pois não foi atribuído um valor a variável quantidadeDeNumerosPares.
O while tem que se repetir enquanto i for apenas < que quantidadeDeNumerosPares e não enquanto for <=.
Também não foi criado um incremento para a variavel i, o que pode resultar em um loop infinito.
Com as alterações abaixo o código irá realizar o que foi pedido.
*/

/* function exercicio3(n) {
    let i = 0
    console.log("Os", n, "primeiros números pares são:")
    while(i < n) {
      console.log(i*2)
      i = i + 1
    }
}

exercicio3(Number(prompt("Digite a quantidade de números pares que deseja ver:"))) */


// Exercicio 4

/* function exercicio4(l1, l2, l3) {
    if ((l1 === l2) && (l1 === l3)) {
        console.log("O seu triangulo é um Triângulo Equilátero!")
    } else {
        if ((l2 === l3) || (l1 === l3) || (l1 === l2)){
            console.log("O seu triangulo é um Triângulo Isósceles!")
        } else {
            console.log("O seu triangulo é um Triângulo Escaleno!")
        }
    }
    
}

const lado1 = Number(prompt("Digite a medida do primeiro lado do triângulo"))
const lado2 = Number(prompt("Digite a medida do segundo lado do triângulo"))
const lado3 = Number(prompt("Digite a medida do terceiro lado do triângulo"))
exercicio4(lado1, lado2, lado3) */


// Exercicio 5

/* function exercicio5(n1, n2) {
  let maior = 0
  let menor = 0
  if (n1>=n2) {
      maior = n1
      menor = n2
  } else {
     maior = n2
     menor = n1
  }
  console.log("O maior número é", maior)

  if ((n1%n2) === 0) {
     console.log("O número", n1, 'é divisível por', n2) 
  } else {
    console.log("O número", n1, "não é divisível por", n2) 
  }

  if ((n2%n1) === 0) {
    console.log("O número", n2, 'é divisível por', n1) 
 } else {
   console.log("O número", n2, "não é divisível por", n1) 
 }
 console.log("A diferença entre eles é", maior-menor) 
}

const numero1 = Number(prompt("Digite o primeiro número:"))
const numero2 = Number(prompt("Digite o segundo número:"))
exercicio5(numero1, numero2) */


// Exercícios de Funções

// Exercício 1  INCOMPLETO

/* const numeros = [3, 4, 89, 56, 31, 48, 1, 100]

function funcao1(arrayNumeros) {
//  let maiorElemento = arrayNumeros[0]
 const novoArray = arrayNumeros.map((elemento, indice, array) => {
    Math.min.apply(Math, array)
    Math.max.apply(Math, array)
    
 });
    
}
funcao1(numeros) */


// Exercicio 2

/* let hello = () => {
    console.log("Hello Future4")
    }

hello() */

// Exercícios de Objetos

// Exercicio 1

/*
Objetos são arrays que podemos criar sempre que necessitarmos de uma estruturas mais complexas de dados,
com uma sintaxe que permite específica podemos definir para cada elemento, uma chave e um valor.
*/

// Exercício 2

/* function criarRetangulo(lado1, lado2) {
    const usuario = {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1 + lado2),
        area: lado1 * lado2
    }
    return usuario
}
console.log(criarRetangulo(4,7)) */


// Exercício 3

/*
const filmeFavorito = {
    titulo: "Duelo de Titãs",
    ano: "2000",
    diretor: "Boaz Yakin",
    protagonista: "Denzel Washington",
    coadjuvante1: "Will Patton",
    coadjuvante2: "Wood Harris"
}
console.log("Venha assistir ao filme", filmeFavorito.titulo, "de", filmeFavorito.ano, "dirigido por", filmeFavorito.diretor, "e estrelado por", filmeFavorito.protagonista, filmeFavorito.coadjuvante1, "e", filmeFavorito.coadjuvante2, ".")
*/

// Exercicio 4

/* const pessoa = {
    nome: 'Maria dos Anjos',
    idade: 23,
    email: 'mariadosanjos@gmail.com',
    endereco: 'Av. Brasil 5000'
}

function anonimizarPessoa() {
    const pessoaAnonima = {
        ...pessoa,
        nome: 'ANÔNIMO'
    }
    return pessoaAnonima
}

console.log(anonimizarPessoa()) */


// Exercícios de Funções de Array

// Exercicio 1

/* const nome = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

// letra a

const adultos = nome.filter((elemento, indice, array) =>{
    if (elemento.idade >= 20) {
        return true
    }
    return false
})



// letra b

const criancas = nome.filter((elemento, indice, array) =>{
    if (elemento.idade < 20) {
        return true
    }
    return false
}) */


// Exercicio 2

// letra a

/* const numeros = [1, 2, 3, 4, 5, 6]

const arrayDobro = numeros.map((elemento, indice, array) =>{
    return elemento * 2

})
*/

// letra b

/* const numeros = [1, 2, 3, 4, 5, 6]

const arrayTriploString = numeros.map((elemento, indice, array) =>{
    return String((elemento * 3))

})
 */

// letra c

/* const numeros = [1, 2, 3, 4, 5, 6]

const arrayParImpar = numeros.map((elemento, indice, array) =>{
    if ((elemento%2) === 0) {
        return elemento = `${elemento} é par`
    } else {
        return elemento = `${elemento} é impar`
    }
}) */


// Exercicio 3

// letra a

/* const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const pessoasPermitidas = pessoas.filter((elemento, indice, array) =>{
    if ((elemento.idade < 60) && (elemento.idade > 14) && (elemento.altura >= 1.5)) {
        return true
    }
    return false
})
 */

// letra b

/* const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const pessoasProibidas = pessoas.filter((elemento, indice, array) =>{
    if ((elemento.idade > 60) || (elemento.idade <= 14) || (elemento.altura < 1.5)) {
        return true
    }
    return false
})
 */


// Exercicio 4
