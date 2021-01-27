import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";
import { getTokenData } from "../service/tokenGenerate"
import { AuthenticationData} from "../service/tokenGenerate"
import deleteUser from "../data/deleteUser"

export default async function removeUserById(
   req: Request,
   res: Response
) {
   let errorCode = 400
   try {
      
      const { authorization } = req.headers
      
      const tokenData: AuthenticationData = getTokenData(authorization!)
      
      if (tokenData.role !== "ADMIN") {
         errorCode = 401
         throw new Error("Apenas Administradores podem apagar um usuário");
       }

      const user = await selectUserById(req.params.id)

         if (user.length===0) {
            errorCode = 422;
            throw new Error("Usuário inexistente.")
         }


      await deleteUser(req.params.id)
      

      res.status(200).send("Usuário apagado com sucesso")

   } catch (error) {
      res.status(errorCode).send({
         message: error.message || error.sqlMessage
      })
   }
}



