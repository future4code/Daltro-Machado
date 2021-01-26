import { Request, Response } from "express";
import { addUser } from "../data/AddUser";
import { IdGenerate } from "../service/IdGenerate";
import { generateToken } from "../service/tokenGenerate";
import { hash } from "../service/generateHash";
import { USER_ROLES } from "../types/user";


export default async function createUser(
    req: Request,
    res: Response
) {
    let errorCode = 400
    try {

        if (
            !req.body.email ||
            !req.body.password ||
            !req.body.role
         ) {
            throw new Error('Preencha os campos "email", "password", e "role"')
         }

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            errorCode = 422
            throw new Error("Email Inválido");
        }


        if (!req.body.password || req.body.password.length < 6) {
            errorCode = 422
            throw new Error("Senha Inválida");
        }

        if (
            req.body.role !== USER_ROLES.ADMIN &&
            req.body.role !== USER_ROLES.NORMAL
         ) {
            throw new Error(`O campo "role" deve ser "NORMAL" ou "ADMIN"`)
         }

        const id: string = IdGenerate();

        const cypherPassword: string = hash(req.body.password)

        await addUser(
            id,
            cypherPassword,
            req.body.email,
            req.body.role
        );

        const token = generateToken({id,
            role: req.body.role
        });

        res
            .status(200)
            .send(`{token: ${token}}`);

    } catch (error) {
        res.status(errorCode).send({
            message: error.message || error.sqlMessage
        })
    }
}

