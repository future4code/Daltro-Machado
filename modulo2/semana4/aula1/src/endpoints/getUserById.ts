import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";
import { getTokenData } from "../service/tokenGenerate"

export default async function getUserById(
   req: Request,
   res: Response
) {
   let errorCode = 400
   try {
      const token = req.headers.authorization as string;
      console.log("Token:", token)

      const authenticationData = getTokenData(token);
      console.log("authenticationData:", authenticationData)

      const user = await selectUserById(authenticationData.id)
      console.log("user:", user)

      if (!user) {
        errorCode = 404
         throw new Error("Usuário não encontrado")
      }

      res.status(200).send({
         id: user.id,
         nickname: user.nickname
      })

   } catch (error) {
      res.status(errorCode).send({
         message: error.message || error.sqlMessage
      })
   }
}

