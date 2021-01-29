import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import {generateId} from "../services/idGenerator";
import {USER_ROLES} from "../data/insertUser"

export default async function createUser(
    req: Request,
    res: Response
) {
    let errorCode = 400

    try {

      
        if (
            !req.body.name ||
            !req.body.email ||
            !req.body.password ||
            !req.body.role
        ) {
          throw new Error('Os campos "name", "email", "password", e "role" devem ser informados!')
        }

        
        if (req.body.password.length < 6) {
            throw new Error('Sua senha precisa ter no mínimo 6 caracteres')
        }

        if (req.body.email.indexOf("@") === -1) {
            errorCode = 422
            throw new Error("Email Inválido");
        }

        if (
            req.body.role !== USER_ROLES.ADMIN &&
            req.body.role !== USER_ROLES.NORMAL
         ) {
            throw new Error(`O campo "role" deve ser "NORMAL" ou "ADMIN"`)
         }

        const id: string = generateId()

        const cypherPassword = await hash(req.body.password);

        
        await insertUser(
            id,
            req.body.name,
            req.body.email,
            cypherPassword,
            req.body.role,
        )


         const token: string = generateToken({
            id,
            role: req.body.role
         })

        res
            .status(201)
            .send({
               message:"Usuário criado!",
               token
            })

    } catch (error) {
        res.status(errorCode).send({
            message: error.message || error.sqlMessage
        })
    }
}