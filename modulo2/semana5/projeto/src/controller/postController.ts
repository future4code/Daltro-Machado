import { Request, Response } from "express";
import { businessCreatePost, businessGetPostById } from "../business/postBusiness";

export const getPostById = async (
   req: Request,
   res: Response
) => {
   try {
      let message = "Success!"

      const { id } = req.params

      const token: string = req.headers.authorization as string

      const post = await businessGetPostById(id, token)

      res.status(200).send({ message, post })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
   }
}

export const createPost = async (
   req: Request,
   res: Response
) => {
   try {
      
      const { photo, description, type } = req.body

      const token: string = req.headers.authorization as string

      let message = await businessCreatePost(photo, description, type, token)
     
      res.status(201).send({ message })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
   }
}