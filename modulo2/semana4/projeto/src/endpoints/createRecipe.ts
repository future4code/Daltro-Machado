import { Request, Response } from "express";
import insertRecipe from "../data/insertRecipe";
import {generateId} from "../services/idGenerator";
import { getTokenData } from "../services/authenticator"
import { AuthenticationData} from "../services/authenticator"

export default async function createRecipe(
   req: Request,
   res: Response
) {
   let errorCode = 400
   try {

      const { authorization } = req.headers
      
      const tokenData: AuthenticationData = getTokenData(authorization!)
      
      if (!tokenData) {
         errorCode = 401
         throw new Error("Token inválido!");
      }

      if (
         !req.body.title ||
         !req.body.description
      ) {
         errorCode = 406
         throw new Error('"title", "description" são obrigatórios')
      }

      const id: string = generateId()

      const date = new Date();
      const day = date.getDate();           
      const month = date.getMonth() + 1;    
      const year = date.getFullYear();

      const create_date: string = year + '/' + month + '/' + day

      await insertRecipe(
         id,
         req.body.title,
         req.body.description,
         create_date,
         tokenData.id
      )

      res.status(200).send({
         message: "Receita criada com sucesso!"
      })

   } catch (error) {
      let message = error.sqlMessage || error.message

      res.status(errorCode).send({ message })
   }
}