import { Request, Response } from "express";
import selectRecipeById from "../data/selectRecipeById";
import { getTokenData } from "../services/authenticator"
import { AuthenticationData} from "../services/authenticator"

export default async function getRecipeById(
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

      const result = await selectRecipeById(req.params.id)


      if (!result) {
         throw new Error("Receita não encontrada")
      }

      

      res.status(200).send({
         id: result.id,
         title: result.title,
         description: result.description,
         create_date: new Date(result.create_date).toLocaleDateString()
      })

   } catch (error) {
      res.status(errorCode).send({
         message: error.message || error.sqlMessage
      })
   }
}