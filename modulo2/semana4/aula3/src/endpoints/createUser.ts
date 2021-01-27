import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import insertUserAddress from "../data/insertUserAddress";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import {generateId} from "../services/idGenerator";
import { address } from "../types/address"
import { getAddressByCep } from "../services/addressManager";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email ||
            !req.body.password ||
            !req.body.role ||
            !req.body.cep ||
            !req.body.number
        ) {
          throw new Error('Os campos "name","nickname", "email", "password", "cep" e "number", devem ser preenchidos!')
        }

        const id: string = generateId()
        const idAddress: string = generateId()
        
        const cypherPassword = await hash(req.body.password);

        if(isNaN(Number(req.body.cep)) || req.body.cep.includes("-")){
            throw new Error("Digite o CEP apenas com números e sem o hifen!");
        }

        const address: address = await getAddressByCep(req.body.cep);

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email,
            cypherPassword,
            req.body.role,
        )

        await insertUserAddress(
            idAddress,
            address.name,
            req.body.number,
            req.body.complement,
            address.neighbourhood,
            address.city,
            address.state,
            id            
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
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}