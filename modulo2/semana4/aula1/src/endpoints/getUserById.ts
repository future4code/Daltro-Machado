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
      const authenticationData = getTokenData(token);

      const user = await selectUserById(authenticationData.id)

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

