### Exercício 1
a) Quando usamos o raw a resposta do banco inclui informações extras além das contidas nas linhas das tabelas. Essas informações são enviadas em um segundo array, fazendo com que a resposta seja um grande array composto com outros dois arrays. No primeiro "subarray" estão as informações dos elementos (as que queremos) e no segundo array as informações complementares que, neste caso, podemos ignorar.


b) O comando abaixo muda o nome da coluna "gender" para "sex" e mantém o tipo desta coluna como uma string de no máximo 6 caracteres.

~~~~sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
~~~~


c) O comando abaixo altera o tamanho máximo de caracteres permitidos nesta coluna para 255, mantendo o nome e o tipo.

~~~~sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
~~~~

d)
~~~sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
~~~~


### Exercício 2
a)  
~~~~sql
    UPDATE Actor
    SET
    name = "Dira Paes", 
    birth_date = "1972-06-15"
    WHERE id = "003";
~~~~

b)
~~~~sql
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
~~~~


c) 
~~~~sql
    UPDATE Actor
    SET
    name = "Carolina Dieckman",
    birth_date = "1980-02-13",
    salary = 800000,
    gender = "female"
    WHERE id = "005";
~~~~

d) 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

Apesar de não ter sido acusado um erro, este comando não realizou nenhuma alteração na tabela pois não existia nenhum elemento com o id igual a "345". Logo nenhuma linha foi afetada.

~~~~sql
    UPDATE Actor
    SET name = "Pedro Cardoso"
    WHERE id = "345";
~~~~


### Exercício 3
a) Obs: Eu já havia alterado o nome da Fernanda Montenegro pelo da Dira Paes anteriormente, então estou apagando pelo nome da Dira.
~~~~sql
    DELETE FROM Actor WHERE name = "Dira Paes";
~~~~

b) 
~~~~sql
    DELETE FROM Actor
    WHERE gender = "male" AND salary > 1000000;
~~~~


### Exercício 4
a) 
~~~sql
   SELECT MAX(salary) FROM Actor;
~~~~

b)
~~~~sql
    SELECT MIN(salary) FROM Actor
    WHERE gender = "female";
~~~~

C) 
~~~~sql
    SELECT COUNT(*) FROM Actor
    WHERE gender = "female";
~~~~

d)
~~~~sql
    SELECT SUM(salary) FROM Actor;
~~~~

### Exercício 5
a) A query abaixo retorna a contagem agrupada pelo campo "gender" de todos os atores exibindo ao lado o genêro de cada resultado.

~~~~sql
    SELECT COUNT(*), gender
    FROM Actor
    GROUP BY gender
~~~~

b) 
~~~~sql
    SELECT id, name FROM Actor
    ORDER BY name DESC;
~~~~

c)
~~~~sql
    SELECT * FROM Actor
    ORDER BY salary;
~~~~

d)
~~~~sql
    SELECT * FROM Actor
    ORDER BY salary DESC LIMIT 3;
~~~~

e)
~~~~sql
    SELECT AVG(salary) AS 'Média de Salários', gender AS 'Gênero'
    FROM Actor
    GROUP BY gender;
~~~~

### Exercício 6
a) 
~~~~sql
    ALTER TABLE Movies ADD COLUMN playing_limit_date DATE;
~~~~

b)
~~~~sql
    ALTER TABLE Movies CHANGE rating rating FLOAT;
~~~~

c) 
~~~~sql
    UPDATE Movies
    SET playing_limit_date = "2021-01-30"
    WHERE id = "003";

    UPDATE Movies
    SET playing_limit_date = "2020-12-30"
    WHERE id = "002";
~~~~

d) 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Ocorreu o mesmo que na letra D do exercicio 2. Uma tentativa de alterar um elemento não existente. Apensar de não acusar nenhum erro, nenhuma alteração é feita na tabela.

~~~~sql
    DELETE FROM Movies
    WHERE id = "004";

    UPDATE Movies
    SET synopsis = "Ótima comédia"
    WHERE id = "004";
~~~~


### Exercício 7

a)
~~~~sql
    SELECT COUNT(*) FROM Movies
    WHERE playing_limit_date > CURDATE() AND rating > 7.5;
~~~~

b)
~~~~sql
    SELECT AVG(rating) FROM Movies;  
~~~~

c)
~~~~sql
    SELECT COUNT(*) FROM Movies
    WHERE playing_limit_date > CURDATE();
~~~~

d)
~~~~sql
    SELECT COUNT(*) FROM Movies
    WHERE release_date > CURDATE();
~~~~

e)
~~~~sql
    SELECT MAX(rating) FROM Movies;
~~~~

f)
~~~~sql
    SELECT MIN(rating) FROM Movies;
~~~~


### Exercício 8

a)
~~~~sql
    SELECT * FROM Movies
    ORDER BY name ASC;
~~~~

b)
~~~~sql
    SELECT * FROM Movies
    ORDER BY name DESC LIMIT 5;
~~~~

c)
~~~~sql
    SELECT * FROM Movies
    WHERE playing_limit_date > CURDATE()
    ORDER BY release_date DESC LIMIT 3;
~~~~

d)
~~~~sql
    SELECT * FROM Movies
    ORDER BY rating DESC LIMIT 3;
~~~~