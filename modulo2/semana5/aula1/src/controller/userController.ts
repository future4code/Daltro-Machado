import { Request, Response } from "express";
import { businessLogin, businessSignup, businessGetAll, businessDeleteUser } from "../business/userBusiness";

export const login = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const { email, password } = req.body

      const token = await businessLogin(email, password)

      res.send({
         message: "Usuário logado!",
         token
      })

   } catch (error) {
      res.status(400).send(error.message)
   }
}
export const signup = async (
   req: Request,
   res: Response
) => {
   try {
      const { name, email, password, role } = req.body

      const token = await businessSignup(
         name,
         email,
         password,
         role
      )

      res
         .status(201)
         .send({
            message: "Usuário criado!",
            token
         })

   } catch (error) {
      res.status(400).send(error.message)
   }
}

export const getAll = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const { authorization } = req.headers
      
      const result = await businessGetAll(authorization!)

      res.send(result)

   } catch (error) {
      res.status(400).send(error.message)
   }
}

export const deleteUserById = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const { authorization } = req.headers
      const id = req.params.id

      await businessDeleteUser(authorization!, id)

      res
      .status(201)
      .send({message: "Usuário Apagado!"})

   } catch (error) {
      res.status(400).send(error.message)
   }
}

