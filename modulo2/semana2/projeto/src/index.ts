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

type task = {
    title: string,
    description: string,
    limit_date: string,
    creator_user_id: number    
}

const createUser = async (
    name: string,
    nickname: string,
    email: string
): Promise<void> => {
    await connection
      .insert({
        name: name,
        nickname: nickname,
        email: email,
      })
      .into("TodoListUser");
  };

  const createTask = async (
    title: string,
    description: string,
    limit_date: string,
    creator_user_id: number
): Promise<void> => {
    await connection
      .insert({
        title: title,
        description: description,
        limit_date: limit_date,
        creator_user_id: creator_user_id 
      })
      .into("TodoListTask");
  };

  const getUserById = async (id: number): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM TodoListUser WHERE id = "${id}"
    `)

    return result[0]
  }


  const updateUser = async (
    id: number,
    name: string,
    nickname: string,
    email: string
  ): Promise<any> => {
    
    await connection("TodoListUser").update({
        name: name,
        nickname: nickname,
        email: email
    })
        .where("id", id);
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
        const user = await getUserById(id);
      
        if (user[0] === undefined) {
            errorCode = 404;
            throw new Error("Usuário não encontrado");
        }
                
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
          
            await updateUser(id, reqBody.name, reqBody.nickname, reqBody.email);
            res.status(200).send("Usuário atualizado com sucesso!");
             
    
        } catch (error) {
            res.status(errorCode).send({message: error.message});
        }
      });

 // Criando tarefa

 app.put("/task", async (req: Request, res: Response) => {
    
    const reqBody: task = {
        title: req.body.title,
	    description: req.body.description,
	    limit_date: req.body.limit_date,
	    creator_user_id: Number(req.body.creator_user_id)
    }

    if(!reqBody.title || !reqBody.description || !reqBody.limit_date || !reqBody.creator_user_id){
        errorCode = 422;
        throw new Error("Algum campo está inválido. Preencha corretamente.");
    }

    try {
      await createTask(reqBody.title, reqBody.description, reqBody.limit_date, reqBody.creator_user_id);

      res.status(200).send("Tarefa criada com sucesso!");


    } catch (error) {
        res.status(errorCode).send({message: error.message});
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

