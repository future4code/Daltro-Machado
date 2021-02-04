import { Request, Response } from "express";
import { businessLogin, businessSignup } from "../business/userBusiness";
//import { generateToken, getTokenData } from "../business/services/authenticator";
import { signupInputDTO, User } from "../business/entities/user";
/* import { compare } from "bcryptjs";
import { generateId } from "../business/services/idGenerator"; */


export const login = async (
   req: Request,
   res: Response
): Promise<void> => {
    try {
       let message = "Success!"
 
       const { email, password } = req.body

       const token = await businessLogin(email, password)
 
       res.status(200).send({ message, token })
 
    } catch (error) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
 
       res.send({ message })
    }
 }

export const signup = async (
   req: Request,
   res: Response
) => {
    try {
      let message = "Success!"
      const input: signupInputDTO = 
      {
      name: req.body.name,
      password: req.body.password,
      email: req.body.email
      }

      const token = await businessSignup(input);

 
       res.status(201).send({ message, token })
 
    } catch (error) {
       res.statusCode = 400
       let message = error.sqlMessage || error.message
 
       res.send({ message })
    }
 }

/* export const getProfile = async(req: Request, res: Response)=>{

   const verifiedToken = getTokenData(req.headers.authorization as string);
   const id = verifiedToken.id;

 const profile =  await businessGetProfile(id);

 res.status(200).send({profile: profile});

} */