#### Exercicio 1

## Letra a
    Acho que utilizar strings é o melhor opção. Este tipo de dados é melhor que números pois permitem uma variedade de combinações e significados muito maior que se limitássemos paenas à numeros.


#### Exercicio 2

## Letra a

    O código acima armazena nas variáveis, "userTableName" e "connection" o nome da tabela que será acessada e os dados para a conexaão com o Banco utilizado respectivamente. Então cria a função assíncrona "createUser" que recebe como parâmetros as informações que serão inseridas na tabela "User" através do comando ".insert". Por último o ".into" indica a tabela em que as informações serão armazendas.

## Letra b

~~~sql
    CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
~~~


### Exercicio 3

## Letra a
    O "as string" informa ao typescript que a informação que virá do ".env" virá como uma string. É uma afirmação, uma garantia que o tipo de dado enviado será uma string.



### Exercicio 7

## Letra a
    A linha "as any" está informando que o resultado da função "jwt.verify() que será armazenado na variável "payload" poderá assumir qualquer tipo de dados.



