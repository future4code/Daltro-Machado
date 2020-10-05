// EXEMPLO 1 

// function dizOi() {
//     console.log("oi")
// }

// dizOi()


// EXEMPLO 2

// ------------------------------------------- EXEMPLO DE FUNCAO NOMEADA -----------------

// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)

// function somaDoisNumeros(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }




// ------------------------------------------- EXEMPLO DE FUNCAO NÃO NOMEADA -----------------


// const somaDoisNumeros = function(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }
    
// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)



// ------------------------------------------- EXEMPLO DE ARROW FUNCTION (FUNCAO FLECHA) -----------------


// const somaDoisNumeros = (numero1, numero2) => {
//     const soma = numero1 + numero2
//     return soma
// }


// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)




// ------------------------------------------- EXERCÍCIO 1 -----------------

// function verificaArray(arrayDeParametro) {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length 
// }


// ------------------------------------------- EXERCÍCIO 2 -----------------


// const verificaTamanhoDoArray = (arrayDeParametro) => {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length
// }

// const profs = ["chijo", "paulinha", "sot", "caio", "severo"]

// const tamanhoDoArray = verificaTamanhoDoArray(profs)



// Interpretação de Código

/* Exercício 1

a.  10
    50

b.  Não apareceria nada no console. A função iria calcular os valores 10 e 50, mas eles não seriam exibidos no console.
*/

/* Exercicio 2

a.  Darvas
    Caio

b.  Amanda
    Caio
*/


/* Exercicio 3

A função testa cada elemento de um array recebido no momento da invocação e se o elemento for par, ela multiplica este por ele mesmo e o adiciona em um novo array. Devolvendo um array formado com o quadrado dos elementos pares do array original. Assim sendo, um bom nome para esta função seria paresAoQuadrado ou arrayParAoQuadrado.
*/


// Exercicio de escrita de código

/* Exercicio 4

// letra a

/*
function mensagem() {
    console.log("Eu sou Daltro, tenho 45 anos, moro no Rio de Janeiro e sou estudante.")
}
*/


//letra b

/*
function mensagem(nome, idade, cidade, status) {
    nome = prompt("Digite seu nome:")
    idade = prompt("Digite sua idade:")
    cidade = prompt("Digite sua cidade:")
    status = confirm("Você é um estudante atualmente ?")
    if (status) {
        console.log("Eu sou", nome + ", tenho", idade, "anos, sou de(o)", cidade, "e sou estudante.") 
    } else {
        console.log("Eu sou", nome + ", tenho", idade, "anos, moro no", cidade, "e não sou estudante.")
    }
    
}
mensagem()
*/


// Exercicio 5

// letra a 

/*
function somaNumeros(a, b) {
    const soma = a + b
    return soma
}


num1 = Number(prompt("Digite o primeiro número:"))
num2 = Number(prompt("Digite o segundo número:"))
console.log(somaNumeros(num1,num2))
*/


// letra b

/*
function testaNumeros(a, b) {
    if (a >= b) {
        return true
    } else {
        return false
    }
}


num1 = Number(prompt("Digite o primeiro número:"))
num2 = Number(prompt("Digite o segundo número:"))
testaNumeros(num1, num2)
*/


//letra c

/*
function repeteFrase(a) {
    for (let i = 1; i <= 10; i++) {
        console.log(i+".",a)        
    }
}
repeteFrase(prompt("Digite uma frase:"))
*/


// Exercicio 6

// letra a
/*


function tamanhoArray(array) {
    return array.length
}

console.log(tamanhoArray(array))
*/


//letra b

/*
function numeroPar(numero) {
    if ((numero%2) === 0) {
        return true
    } else {
        return false
    }
}
*/


// letra c

/*
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function TotalNumerosPares(array) {
    let contador = 0
    for (const elemento of array) {
            if ((elemento%2) === 0) {
            contador = contador + 1
        }     
    }
    return contador
}
*/


// letra d

/*
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function numeroPar(numero) {
    if ((numero%2) === 0) {
        return true
    } else {
        return false
    }
}

function TotalNumerosPares(numero) {
    let contador = 0
    for (const elemento of array) {
            if (numeroPar(elemento)) {
            contador = contador + 1
        }     
    }
    return contador
}
*/


// DESAFIOS

// Exercicio 1

/*
let imprimeConsole = (a) => {
    console.log(a)
    }

let somaDoisNumeros = (a, b) => {
    const soma =  a+b
    imprimeConsole(soma)
    }
*/


// Exercicio 2

// letra a

/*
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
function novoArray(array) {
    let array2xPar = []
    for (let i = 0; i < array.length; i++) {
        let elemento = array[i];
        if ((elemento%2) === 0) {
            array2xPar.push(elemento * 2)
            console.log(elemento)
         
        }
    }
    return array2xPar
}

novoArray(numeros)
*/


// letra b

/*
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

let maiorElemento = (a) => {
    let maior = a[0]
    for (const elemento of a) {
        if (elemento > maior) {
            maior = elemento
        }
    }
    return maior
}

maiorElemento(numeros)

*/


// letra c


// errado

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

let achaMaiorIndice = (array) => {
    let maiorElemento = array[0]
    let maiorIndice = 0
    for (let index = 0; index < array.length; index++) {
        let elemento = array[index];
        if (elemento > maiorElemento) {
            maiorIndice = index
        }
        
    }
    return maiorIndice
}

console.log(achaMaiorIndice(numeros))



// letra d

/*
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

let inverteArray = (array) => {
    let tamanho = array.length
    let novoArray = []
    for (let index = (tamanho - 1); index >= 0; index--) {
        const elemento = array[index];
        novoArray.push(elemento)
    }
    return novoArray
    
}

inverteArray(numeros))
*/