import { Request, Response } from "express";
import deleteFollowUser from "../data/deleteFollowUser";
import { AuthenticationData, getTokenData } from "../services/authenticator";
import selectUserById from "../data/selectUserById";


export default async function unFollowUser(
   req: Request,
   res: Response
) {
   try {

      const { authorization } = req.headers
      
      const tokenData: AuthenticationData = getTokenData(authorization!)
      
      if (!tokenData) {
         throw new Error("Token inválido!");
      }


      if (req.body.userToUnfollowId === '') {
         throw new Error("Id Inválido!")
      }

      const user = await selectUserById(req.body.userToUnfollowId)

      if (!user) {
         res.statusCode = 404
         throw new Error("Usuário não encontrado")
      }


      await deleteFollowUser(
         tokenData.id,
         req.body.userToUnfollowId
      )


      res.status(200).send({
         message: "Você não segue mais esse Usuário!"
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