import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";
import { getTokenData } from "../services/authenticator"
import { AuthenticationData} from "../services/authenticator"

export default async function getUserById(
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

      const user = await selectUserById(tokenData.id)
      

      if (!user) {
        errorCode = 404
         throw new Error("Usuário não encontrado")
      }

      res.status(200).send({
         id: user.id,
         name: user.name,
         email: user.email
       })

   } catch (error) {
      res.status(errorCode).send({
         message: error.message || error.sqlMessage
      })
   }
}


