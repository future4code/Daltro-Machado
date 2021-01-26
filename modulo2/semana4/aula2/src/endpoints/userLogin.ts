import { Request, Response } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { generateToken } from "../service/tokenGenerate";
import { compare } from "../service/generateHash";


export default async function userLogin(
    req: Request,
    res: Response
) {
    let errorCode = 400
    try {

        const input: loginInput = {
            email: req.body.email,
            password: req.body.password
        }

        if(!input.email || !input.password){
            errorCode = 422
            throw new Error("Por favor, preencha todos os campos.");
        }

        if (!input.email || input.email.indexOf("@") === -1) {
            errorCode = 422
            throw new Error("Email Inválido");
        }

        const user = await getUserByEmail(input.email);

        if(!user){
            errorCode = 404
            throw new Error("Usuário não encontrado!");
        }

        const passwordIsCorrect: boolean = compare(
            input.password,
            user.password
         )

        if(!passwordIsCorrect){
            errorCode = 422
            throw new Error("Senha incorreta!");
        }

        const token = generateToken({
            id: user.id,
            role:user.role
         });
        res.status(200).send(`{token: ${token}}`);

    } catch (error) {
        res.status(errorCode).send({
            message: error.message || error.sqlMessage
        })
    }
}


export type loginInput = {
    email: string,
    password: string
}


