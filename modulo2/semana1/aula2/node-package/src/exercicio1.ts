const minhaString: string = "teste"
// Letra A - Ao tentar atribuir um numero a ela o nome da variavel fica sublinhado em vermelho, indicando um erro e a mensagem indicando que não podemos atribuir um valor do tipo número à uma variavel do tipo string.

const meuNumero: number | string = 1
// Letra B - Para que a variavel aceite mais de um tipo de valores podemos separar os tipos com o caracter |.

// Letra C - Para garantir que o objeto só aceite os tipos acima precisamos fazer a tipagem na declaração do mesmo, conforme abaixo:
const usuario1: { name: string, age: number, favColor: string} = {
    name: "Astrodev",
    age: 30,
    favColor: "Azul"
}

// Letra D - 
type person = {
    name: string,
    age: number,
    favColor: string
}

const usuario2: person = {
    name: "Paula",
    age: 40,
    favColor: "anil"
}

const usuario3: person = {
    name: "Carolina",
    age: 25,
    favColor: "Verde"
}

const usuario4: person = {
    name: "Ana",
    age: 20,
    favColor: "Roxo"
}

// Letra E
enum rainbowColors {
    VIOLETA = "Violeta",
    ANIL = "anil",
    AZUL = "azul",
    VERDE = "verde",
    AMARELO = "amarelo",
    LARANJA = "laranja",
    VERMELHO = "vermelho"
    }

    type pessoa = {
        name: string,
        age: number,
        favColor: rainbowColors
    }
    
    const user1: pessoa = {
        name: "Paula",
        age: 40,
        favColor: rainbowColors.AZUL
    }
    
    const user2: pessoa = {
        name: "Carolina",
        age: 25,
        favColor: rainbowColors.VERMELHO
    }
    
    const user3: pessoa = {
        name: "Ana",
        age: 20,
        favColor: rainbowColors.VIOLETA
    }