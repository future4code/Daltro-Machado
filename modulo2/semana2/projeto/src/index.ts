import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();

app.use(express.json());

//---------------- Criando Tipos e Funções--------------------//

let errorCode: number = 400;

type user = {
    name: string,
    nickname: string,
    email: string    
}

const createUser = async (
    name: string,
    nickname: string,
    email: string,
): Promise<void> => {
    await connection
      .insert({
        name: name,
        nickname: nickname,
        email: email,
      })
      .into("TodoListUser");
  };

  const getUserById = async (id: number): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM TodoListUser WHERE id = "${id}"
    `)

    return result[0]
  }


  const updateUser = async (
    id: number,
    field: string,
    data: string
  ): Promise<any> => {
    
    if (field === "name") {
        await connection("TodoListUser").update({
            name: data,
          })
          .where("id", id);
    }
    
    if (field === "nickname") {
        await connection("TodoListUser").update({
            name: data,
          })
          .where("id", id);
    }

    if (field === "email") {
        await connection("TodoListUser").update({
            name: data,
          })
          .where("id", id);
    }

  };



//---------------- Criando Endpoint--------------------//

// Adicionando Usuário

  app.post("/user", async (req: Request, res: Response) => {
    
    const reqBody: user = {
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email
    }

    if(!reqBody.name || !reqBody.nickname || !reqBody.email){
        errorCode = 422;
        throw new Error("Algum campo está inválido. Preencha corretamente.");
    }

    try {
      await createUser(req.body.name, req.body.nickname, req.body.email);

      res.status(200).send("Usuário criado com sucesso!");


    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }
  });

// Procurando Usuário pelo ID

  app.get("/user/:id", async (req: Request, res: Response) => {

    
    try {
      const id = Number(req.params.id);
      const user = await getUserById(id);
      
      if (user[0] === undefined) {
        errorCode = 404;
        throw new Error("Usuário não encontrado");
      }

  
      res.status(200).send(user[0])
    
    
    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }
  });


    // Editando Usuário

    app.post("/user/:id", async (req: Request, res: Response) => {
        
        const id: number = Number(req.params.id)
        let field: string = ""
        let data: string = ""

        const user = await getUserById(id);
      
        if (user[0] === undefined) {
            errorCode = 404;
            throw new Error("Usuário não encontrado");
        }
                
        
        if ((!req.body.name) && (!req.body.nickname) && (!req.body.email) ){
            errorCode = 422;
            throw new Error("Você precisa passar pelo menos uma informação para ser alterada!");
        }
        
        
        if(req.body.name){
            const name: string = req.body.name
            if (name === "") {
                errorCode = 422;
                throw new Error("Nome inválido. Preencha corretamente.");
            }
        }

        if(req.body.nickname){
            const nickname: string = req.body.nickname
            if (nickname === "") {
                errorCode = 422;
                throw new Error("Nickname inválido. Preencha corretamente.");
            }
        }

        if(req.body.email){
            const email: string = req.body.email
            if (email === "") {
                errorCode = 422;
                throw new Error("Email inválido. Preencha corretamente.");
            }
        }

    
        try {
          if (req.body.name){
            await updateUser(id, "name", req.body.name);
    
            res.status(200).send("Nome alterado com sucesso!");
          }
          
          if (req.body.nickname){
            await updateUser(id, "nickname", req.body.nickname);
    
            res.status(200).send("Nickname alterado com sucesso!");
          }
          
          if (req.body.email){
            await updateUser(id, "email", req.body.email);
    
            res.status(200).send("Email alterado com sucesso!");
          }
    
    
        } catch (error) {
            res.status(errorCode).send({message: error.message});
        }
      });







const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
  }

// Letra c  
  const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result.count;
    //console.log("result:", result)
    //console.log("count:", count)
    return count;
  };


// Exercício 2


// Letra a

const updateActor = async (
    id: string,
    salary: number,
  ): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };
  
  
// Letra b

const deleteActor = async (
    id: string,
  ): Promise<any> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  };


// Letra c

const avgSalary = async (
    gender: string,
  ): Promise<any> => {
    const result = await connection("Actor")
    .avg("salary as average")
    .where("gender", gender);

    return result[0].average;
};


// Exercício 3

//Letra a

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = "${id}"
    `)
    return result[0]
  }


app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

// Letra b

app.get("/actor/search", async (req: Request, res: Response) => {
    try {
      const gender: string = req.query.gender as string;
      const totalGender = await countActors(gender);
      //console.log("result:", totalGender)
    
      res.status(200).send(totalGender[0])
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });



// Exercício 4

//Letra a

app.post("/actor", async (req: Request, res: Response) => {
    try {
      await updateActor(
        req.body.id,
        req.body.salary,
      );
  
      res.status(200).send("Informações Atualizadas");
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });


// Letra b

app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await deleteActor(id);
  
      res.status(200).send("Artista apagado!")
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });


  // Exercicio 5

  const createMovie = async (
    id: string,
    name: string,
    synopsis: string,
    release_date: Date,
    rating: number,
    playing_limit_date: Date
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        synopsis: synopsis,
        release_date: release_date,
        rating: rating,
        playing_limit_date: playing_limit_date
      })
      .into("Movies");
  };

  app.post("/movie", async (req: Request, res: Response) => {
    try {
      await createMovie(
        req.body.id,
        req.body.name,
        req.body.synopsis,
        new Date(req.body.release_date),
        req.body.rating,
        new Date(req.body.playing_limit_date)
      );

      res.status(200).send("Filme criado com sucesso!");
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });


// Exercício 6

const getAllMovies = async (): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Movies LIMIT 15
    `)
    return result
  }

  app.get("/movie/all", async (req: Request, res: Response) => {
    try {
      const result = await getAllMovies();
  
      res.status(200).send(result[0])
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });
  

// Exercício 7

const searchMovie = async (word: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Movies WHERE name LIKE "%${word}%" OR synopsis LIKE "%${word}%"
      ORDER BY release_date ASC 
    `)
    return result
  }


app.get("/movie/search", async (req: Request, res: Response) => {
    try {
      const word: string = req.query.word as string;
      const result = await searchMovie(word);
  
      res.status(200).send(result[0])
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });





const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

