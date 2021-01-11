### Exercício 1
a) CREATE TABLE Actor ( - Usado para criar a tabela com o nome especificado a seguir

    id VARCHAR(255) PRIMARY KEY, - Nesta linha é criado o campo id e o VARCHAR(255) define o tipo do campo como uma String com tamanho máximo de 255 caracteres. O PRIMARY KEY define o campo como a chave primária da tabela, que não poderá possuir valores repetidos e de preenchimento obrigatório.

    name VARCHAR (255) NOT NULL, - Como na linha anterior, aqui o campo name é definido como string e de preenchimento obrigatório, não podendo ter valores null.

    salary FLOAT NOT NULL, - Este campo salary foi definido com um número não inteiro e de preenchimento obrigatório.

    birth_date DATE NOT NULL, - Cria o campo birth_date do tipo data (formato YYYY/MM/DD) com preenchimento obrigatório

	gender VARCHAR(6) NOT NULL - Cria uma campo string com no maximo 6 caracteres chamado gender.
);



b) SHOW DATABASES - Foram exibidos na aba de resultados o nome do banco utilizado "dumont-daltro-machado" e na linha de baixo "information_schema".
SHOW TABLES - Foi exibido o nome da tabela criada anteriormente (Actor).

c) DESCRIBE Actor - O Workbench exibiu a descrição da tabela Actor, mostrando o nome dos campos, o tipo de cada campo assim como qual deles é a PK, se estão configurados como nulos ou não e seus valores (no caso todos constam como default pois não foram inseridos valores ainda).



### Exercício 2
a)
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES (
    "002", 
    "Glóra Pires",
    1200000,
    "1963-08-23", 
    "female"
    );

b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
    A mensagem diz: Entrada 002 duplicada para a chave primária.
    Este erro aocnteceu porque o campo "id" foi definido como chave primária da tabela e não aceita valores duplicados. O valor "002" já foi utilizado como id de outro elemento.

c) Error Code: 1136. Column count doesn't match value count at row 1
O erro indica que a quantidade de campos informados na primeira linha não corresponde aos campos e valores informados nas linhas seguintes. Na prática falta a informação dos campos "birth_date" e "gender".

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "003", 
    "Fernanda Montenegro",
    300000,
    "1929-10-19", 
    "female"
    );

d) Error Code: 1364. Field 'name' doesn't have a default value
Aqui, apesar do campo "name" não ter sido informado nem na primeira linha nem ter tido seu valor definido, acontece o erro pois no momento da criação da tabela o campo foi definido como NOT NULL, logo ele precisa ter uma valor para que um elemento seja criado.

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "004",
    "Edson Celulari",
    400000,
    "1949-04-18", 
    "male"
    );

e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
O campo birth_date é do tipo DATE e os valores para este tipo de campo precisam ser informados entre aspas.

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "005", 
    "Juliana Paes",
    719333.33,
    "1979-03-26", 
    "female"
    );

f) 

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "006", 
    "Antônio Fagundes",
    500000,
    "1969-06-16", 
    "male"
    );

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "007", 
    "Letícia Sabatella",
    600000,
    "1978-07-12", 
    "female"
    );


### Exercício 3
a)
    SELECT * from Actor WHERE gender = "female";

b) 
    SELECT salary from Actor WHERE name = "Tony Ramos";

c) A query abaixo não retornou nenhum informação pois não existe nenhum elemento com o campo gender com este valor.
    
    SELECT * from Actor WHERE gender = "invalid";

d) 
    SELECT id, name, salary from Actor WHERE salary <= 500000;

e) Error Code: 1054. Unknown column 'nome' in 'field list'
O erro aponta um nome de coluna desconhecido. O nome do campo é "name" e não "nome" como informado.

    SELECT id, name from Actor WHERE id = "002";


### Exercício 4
a) A query abaixo seleciona todos os elementos da tabela "Actor" onde o valor do campo "salary é maior que 30000 e o valor do campo  "name" começa com "A" ou "J".
    SELECT * FROM Actor
    WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 30000

b)
    SELECT * from Actor WHERE (name NOT LIKE "A%") AND salary > 350000;

C) 
    SELECT * FROM Actor
    WHERE (name LIKE "%G%" OR name LIKE "%g%");

d)
    SELECT * FROM Actor
    WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;


### Exercício 5
a) A query abaixo cria uma tabela chamada Movies com os campos: id (PK do tipo string), name (tipo string), synopsis (do tipo Text, similar ao string porém sem definição de tamanho), release-date (tipo Date) e rating (do tipo Inteiro). Todos os campos foram definidos como obrigatórios, não podendo conter valores nulos. E o campo "name" foi definido como UNIQUE, dessa forma, os elementos não podem ter valores iguais neste campo.

    CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
	rating INT NOT NULL
);

b)
    INSERT INTO Movies (id, name, synopsis, release_date, rating)
    VALUES (
    "001", 
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06", 
    7
);

c)
    INSERT INTO Movies (id, name, synopsis, release_date, rating)
    VALUES (
    "002", 
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2006-12-27", 
    10
);

d)
    INSERT INTO Movies (id, name, synopsis, release_date, rating)
    VALUES (
    "003", 
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02", 
    8
);

e)
    INSERT INTO Movies (id, name, synopsis, release_date, rating)
    VALUES (
    "004", 
    "O Homem Que Copiava",
    "Um humilde operador de copiadora se apaixona pela vizinha e, para conseguir se aproximar da jovem, se transforma num falsificador de dinheiro.",
    "2003-06-13", 
    9
);


### Exercício 6
a) 
    SELECT id, name, rating from Movies WHERE id = "003";

b)
    SELECT * from Movies WHERE name = "Se eu Fosse Você";

c) 
    SELECT id, name, synopsis from Movies WHERE rating > 7;


### Exercício 7
a) 
    SELECT * from Movies WHERE name = "%vida%";

b)
    SELECT * FROM Movies
    WHERE (name LIKE "%amor%" OR synopsis LIKE "%amor%");

c) 
    SELECT * from Movies WHERE release_date < CURDATE();

d) 
    SELECT * FROM Movies
    WHERE (name LIKE "%amor%" OR synopsis LIKE "%amor%") AND release_date < CURDATE() AND rating > 7

