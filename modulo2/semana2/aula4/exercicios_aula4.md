### Exercício 1

## Letra a
    É um campo em uma tabela através do qual esta tabela se relaciona com outra tabela. Este campo deve possuir o mesmo formato da Primary Key da tabela de referência e seus valores devem necessariamente existir na tabela de referência.

## Letra b

~~~sql
    CREATE TABLE Rating (
	id INT PRIMARY KEY AUTO_INCREMENT,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
    );

    INSERT INTO Rating (comment, rate, movie_id)
    VALUES
    ("MARAVILHOSO, sinto falta de filmes assim hoje em dia","10", "001"),
    ("Muito muito muito muito muito chatinho","2", "001"),
    ("O filme é bom! Quem espera um filme de ação tradicional certamente está decepcionado. A MM tem seu próprio amadurecimento durante o filme, e a Gal entregou o mesmo carisma. Até a volta do Steve, que antes me parecia um erro, se mostrou algo necessário para o desenvolvimento da personagem. Além disso, os vilões são muitíssimo bem desenvolvidos também. Eles são humanos com motivações humanas, porém levadas às últimas consequências. A mensagem do filme, que apesar de ser ambientado nos anos 80, é muito forte e atual. Fala de egoísmo, vaidades e da negação da verdade. Um filme necessário em 2020, ano marcado por líderes negacionistas, fake news, e por um egoísmo responsável por ceifar a vida de tantos.","9", "004"),
    ("Mais exagerado e menos equilibrado do que o primeiro filme, tem boas atuações de Pedro Pascal (como o vilão Maxwell Lord) e Kirsten Wiig (como a cientista Barbara Minerva, que se transformará na vilã Mulher-Leopardo). Boas cenas de ação e um inesperado reencontro com Steve Trevor (Chris Pine) estão entre os pontos altos do filme. No papel principal, a israelense Gal Gadot continua esbanjando charme e carisma. Apesar de todas as qualidades, o roteiro é confuso e mal amarrado. Nota-se o esforço heróico da diretora Patty Jenkins para que o resultado não desagrade o espectador. A ideia principal não deixa de ser interessante: tome muito cuidado com seus desejos, pois eles podem ter um preço. Uma participação especialíssima, que nos lembra da clássica série de TV, é outro atrativo. O terceiro e último filme da série foi confirmado há alguns dias.","6", "004"),
    ("Como fã do filme com Sônia e José Wilker, não foi fácil assistir a esse novo com esses novos atores. Mas... Valeu. Os atores se sairam muito bem e deu para assistir numa boa. Mas... Sonia e Wilker deixam saudades.","7.5", "003"),
    ("Foi impossível não rir com Dona Picucha. Foi impossível não torcer para ela se livrar da acompanhante que a família desejava impor. Foi impossível não vibrar quando ela arma todo um esquema para sua filha solteirona ficar com Jesus. Foi impossível não se emocionar quando ela explica a diferença de cada filho. Foi impossível não torcer para ela existir de verdade.","9", "002"),
    ("Furtado e Ana Luiza criaram uma personagem deliciosa, que Fernanda Montenegro torna ainda mais cativante. Nos bastidores da Globo, a aposta é de que Doce de Mãe poderá virar série e entrar na grade fixa da emissora.  (...) Com uma pegada meio A Grande Família, Doce de Mãe tem diálogos, trilha, pique e esse elenco afiado, ou em estado de graça.","8.7", "002");
~~~


## Letra c
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-daltro-machado`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

Ele diz que não é possível adicionar ou atualizar a linha porque uma condição da chave estrangeira falhou. No caso, o conteúdo do campo definido como chave estrangeira, precisa existir na tabela de referÊncia.


## Letra d
~~~sql
    ALTER TABLE Movies
    DROP COLUMN rating;
~~~

## Letra e
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-daltro-machado`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

Ele diz que não é possível adicionar ou atualizar a linha porque uma condição da chave estrangeira falhou. Neste caso, a linha em questão está relacionado à uma informação em uma outra tabela onde a chave estrangeira aponta para a PK deta linha.


### Exercicio 2

## Letra a
Esta tabela relaciona o id de um ator ao id de um filme. Ambos os ids são PK's em suas respectivas tabelas e aqui estão definidos como FK. Cada linha desta tabela possuirá um id de ator e um id de filme correspondente, podenos ambas as informações se repetirem uma vez que não são PK e a relação entre filmes e atores é de N:M.

## Letra b
~~~sql
    INSERT INTO MovieCast (movie_id, actor_id)
    VALUES
    ("001","001"),
    ("001","002"),
    ("002","006"),
    ("003","007"),
    ("004","005"),
    ("004","007");
~~~

## Letra c
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-daltro-machado`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

Ele diz que não é possível adicionar ou atualizar a linha porque uma condição da chave estrangeira falhou. No caso, o conteúdo informado da coluna movie_id não existe na tabela de referência.

## Letra d
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-daltro-machado`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Ele diz que não é possível adicionar ou atualizar a linha porque uma condição da chave estrangeira falhou. Neste caso, a linha em questão está relacionado à uma informação em uma outra tabela onde a chave estrangeira aponta para a PK deta linha.


### Exercicio 3

## Letra a
O operador ON é a condição que indica quais combinações das duas tabelas serão exibidas. Caso não seja definida essa condição, serão exibidas todas as combinações possíveis para estas duas tabelas.

## Letra b
~~~sql
    SELECT name, Movies.id, rate FROM Movies
    INNER JOIN Rating ON Movies.id = Rating.movie_id
~~~


### Exercicio 4

## Letra a
~~~sql
    SELECT name, Movies.id, rate, comment FROM Movies
    LEFT JOIN Rating ON Movies.id = Rating.movie_id;
~~~

## Letra b
~~~sql
SELECT Movies.id, Movies.name, MovieCast.actor_id FROM Movies
RIGHT JOIN MovieCast ON MovieCast.movie_id = Movies.id;
~~~

## Letra c
SELECT AVG(Rating.rate) AS "Avaliação Média", Movies.id, Movies.name FROM Movies
LEFT JOIN Rating ON Movies.id = Rating.movie_id
GROUP BY (Movies.id) ORDER BY (AVG(Rating.rate)) DESC;


### Exercicio 5

## Letra a
SELECT * FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

Essa query une em um primeiro momento as tabelas Movies e MovieCast. Depois com um novo JOIN ela acrescenta a essa junção as informações da tabela Actor. Há a nec essidade de um segundo JOIN, pois as tabelas Movies e Actor são independentes uma das outra, não possuindo chaves que façam a ligação diretamente entre elas. Para isso foi usada a tabela de junção MovieCast, que possue duas FK, sendo cada uma delas relacionada a uma das tabelas independentes.


## Letra b
~~~sql
    SELECT m.id AS "Id do Filme", m.name AS "Filme", a.id AS "Id do Ator", a.name AS "Ator" FROM Movies m
    LEFT JOIN MovieCast mc ON m.id = mc.movie_id
    JOIN Actor a ON a.id = mc.actor_id;
~~~

## Letra c
Error Code: 1054. Unknown column 'm' in 'field list'

O erro acusa que não reconhece uma coluna "m". Isso acontece pq "m" está sendo usado como apelido para a tabela Movies e quando escrito na linha de campos deveria vir seguido de um "." e o nome do campo desta tabela. Porém, houve um erro de digitação e o "m" foi seguido de uma virgula no lugar do ponto. fazendo com que o SQL entendesse que aquele "m" era um campo e, assim não o reconheceu. Ao trocar a virgula "m,title" por um ponto "m.title", a query passou a funcionar.

## Letra d
~~~sql
    SELECT m.name AS "Filme", a.name AS "Ator", r.comment AS "Comentários", r.rate AS "Avaliação" FROM Movies m
    LEFT JOIN Rating r on r.movie_id = m.id
    LEFT JOIN MovieCast mc ON m.id = mc.movie_id
    JOIN Actor a ON a.id = mc.actor_id;
~~~


### Exercicio 6

## Letra a
É uma relação M:N

## Letra b
~~~sql
    CREATE TABLE Awards (
	id INT PRIMARY KEY AUTO_INCREMENT,
	award VARCHAR(255) NOT NULL,
    year VARCHAR(4) NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);
~~~

## Letra C
~~~sql
    INSERT INTO Awards (award, year, movie_id)
    VALUES
    ("Melhor Filme","2006", "001"),
    ("Melhor Filme Estrangeiro","2006", "001"),
    ("Melhor Trilha Sonora","2006", "002"),
    ("Melhor Enredo","2006", "002"),
    ("Melhor Fotografia","2017", "003"),
    ("Melhor Enredo","2017", "003"),
    ("Melhor Filme de Ação","2020", "004"),
    ("Melhor Efeitos Especiais","2020", "004"),
    ("Melhor Fotografia","2003", "005"),
    ("Melhor Filme de Drama","2003", "005");
~~~

## Letra d
~~~sql
    SELECT m.name AS "Filme", a.award AS "Oscar de", a.year AS "Ano" FROM Movies m 
    INNER JOIN Awards a ON m.id = a.movie_id;
~~~

