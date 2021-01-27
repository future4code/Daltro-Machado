import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";
import { getTokenData } from "../service/tokenGenerate"
import { AuthenticationData} from "../service/tokenGenerate"

export default async function getUserById(
   req: Request,
   res: Response
) {
   let errorCode = 400
   try {
      
      const { authorization } = req.headers
      
      const tokenData: AuthenticationData = getTokenData(authorization!)
      
      if (tokenData.role !== "NORMAL") {
         errorCode = 401
         throw new Error("Apenas usuários normais podem acessar esta página");
       }

      const user = await selectUserById(tokenData.id)
      

      if (!user) {
        errorCode = 404
         throw new Error("Usuário não encontrado")
      }

      res.status(200).send({
         id: user.id,
         email: user.email
       })

   } catch (error) {
      res.status(errorCode).send({
         message: error.message || error.sqlMessage
      })
   }
}


