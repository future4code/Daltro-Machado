import { Request, Response } from "express";
import { addUser } from "../data/AddUser";
import { IdGenerate } from "../service/IdGenerate";
import { generateToken } from "../service/tokenGenerate";


export default async function createUser(
    req: Request,
    res: Response
) {
    let errorCode = 400
    try {

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            errorCode = 422
            throw new Error("Email Inválido");
        }


        if (!req.body.password || req.body.password.length < 6) {
            errorCode = 422
            throw new Error("Senha Inválida");
        }

        const id: string = IdGenerate();

        await addUser(
            id,
            req.body.email,
            req.body.password
        );

        const token = generateToken({id});

        res
            .status(200)
            .send(`{token: ${token}}`);

    } catch (error) {
        res.status(errorCode).send({
            message: error.message || error.sqlMessage
        })
    }
}

