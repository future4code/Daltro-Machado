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


