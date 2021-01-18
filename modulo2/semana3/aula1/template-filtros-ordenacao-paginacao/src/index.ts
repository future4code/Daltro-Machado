import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { user } from "./types/user";
import { searchUserInput } from "./types/user"

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

// Criando Funções de Conexão

// Get All users

const selectAllUsers =  async(): Promise<any> => {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `)

   return result[0]
}



// Criando Endpoints

// Get All users

/* app.get("/user/all", async function (
   req: Request,
   res: Response
): Promise<void> {
   try {
      const users: user[] = await selectAllUsers();

      if(!users.length){
         res.statusCode = 404
         throw new Error("Nenhum usuário encontrado!")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}); */

/* // Exercicio 1 - Letra a

app.get("/user/search", async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const {
         name
      } = req.query

      if (!name) {
         res.statusCode = 422
         throw new Error(`"nome" é obrigatório!`)
      }

      const users: any = await connection
         .select("*")
         .from("aula48_exercicio")
         .where("name", "LIKE", `%${name}%`)
      
      if (!users.length) {
         res.statusCode = 404
         throw new Error("Nenhum usuário encontrado")
      }

      res.send(users)

   } catch (error) {
      res.send(error.sqlMessage || error.message)
   }
})
*/

// Exercicio 1 - Letra b

app.get("/user/:type", async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const type: string = req.params.type


      const users: any = await connection
         .select("*")
         .from("aula48_exercicio")
         .where("type", "LIKE", `%${type}%`)
      
      if (!users.length) {
         res.statusCode = 404
         throw new Error("Nenhum usuário encontrado")
      }

      res.send(users)

   } catch (error) {
      res.send(error.sqlMessage || error.message)
   }
})

/* // Exercicio 2

app.get("/user/search", async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const {
         orderBy = "name",
         orderType = "ASC",
      } = req.query as searchUserInput



      const users: any = await connection
         .select("*")
         .from("aula48_exercicio")
         .orderBy(orderBy, orderType)
       
      if (!users.length) {
         res.statusCode = 404
         throw new Error("Nenhum usuário encontrado")
      }

      res.send(users)

   } catch (error) {
      res.send(error.sqlMessage || error.message)
   }
}) */

// Exercicio 3

app.get("/user/all", async function (
   req: Request,
   res: Response
): Promise<void> {
   try {

      const {
         page = "1"
      } = req.query as searchUserInput

      const pageNumber: number = Number(page)


      const resultsPerPage: number = 5
      const offset: number = resultsPerPage * (pageNumber - 1)

      const users: any = await connection
         .select("*")
         .from("aula48_exercicio")
         .limit(resultsPerPage)
         .offset(offset)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("Nenhum usuário encontrado")
      }

      res.send(users)

      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
});



// Exercicio 4

app.get("/user/search", async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const {
         search = "%",
         field = "name",
         orderBy = "name",
         orderType = "DESC",
         page = "1"
      } = req.query as searchUserInput

      const pageNumber: number = Number(page)


      const resultsPerPage: number = 5
      const offset: number = resultsPerPage * (pageNumber - 1)

      const users: any = await connection
         .select("*")
         .from("aula48_exercicio")
         .where(`${field}`, "LIKE", `%${search}%`)
         .orderBy(orderBy, orderType)
         .limit(resultsPerPage)
         .offset(offset)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("Nenhum usuário encontrado")
      }

      res.send(users)

   } catch (error) {
      res.send(error.sqlMessage || error.message)
   }
})


// Servidor

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});