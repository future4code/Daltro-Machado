import { Request, Response } from "express";
import { businessCreateTask, businessGetTaskById } from "../business/taskBusiness";

export const getPostById = async (
   req: Request,
   res: Response
) => {
   try {

      const { id } = req.params

      const taskWithUserInfo = await businessGetTaskById(id)

      res.status(200).send(taskWithUserInfo)

   } catch (error) {
      res.status(400).send(error.message)
   }
}

export const createPost = async (
   req: Request,
   res: Response
) => {
   try {

      const { title, description, deadline, authorId } = req.body

      await businessCreateTask(
         title,
         description,
         deadline,
         authorId
      )

      res.status(201).end()

   } catch (error) {
      res.statusMessage = error.message
      res.status(500).end()
   }
}