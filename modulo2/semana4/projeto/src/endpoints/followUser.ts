import { Request, Response } from "express";
import insertFollowUser from "../data/insertFollowUser";
import { AuthenticationData, getTokenData } from "../services/authenticator";
import selectUserById from "../data/selectUserById";


export default async function followUser(
   req: Request,
   res: Response
) {
   try {

      const { authorization } = req.headers
      
      const tokenData: AuthenticationData = getTokenData(authorization!)
      
      if (!tokenData) {
         throw new Error("Token inválido!");
      }


      if (req.body.userToFollowId === '') {
         throw new Error("Id Inválido!")
      }

      const user = await selectUserById(req.body.userToFollowId)

      if (!user) {
         res.statusCode = 404
         throw new Error("Usuário não encontrado")
      }


      await insertFollowUser(
         tokenData.id,
         req.body.userToFollowId
      )


      res.status(200).send({
         message: "Seguindo o Usuário!"
      })

   } catch (error) {
      let { message } = error

      if (
         message === "jwt must be provided" ||
         message === "invalid signature" ||
         message === "jwt expired"
      ) {
         res.statusCode = 401
         message = "Não autorizado"
      }

      res.send({
         message
      })
   }
}