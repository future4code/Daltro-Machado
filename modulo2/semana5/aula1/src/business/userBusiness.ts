import { compare, hash } from "./services/hashManager";
import { insertUser, selectUserByEmail, selectAllUsers, deleteUser } from "../data/userDatabase";
import { generateToken, getTokenData } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import { user, USER_ROLES, authenticationData } from "./entities/user";

export const businessSignup = async (
   name: string,
   email: string,
   password: string,
   role: USER_ROLES
) => {

   if (
      !name ||
      !email ||
      !password ||
      !role
  ) {
    throw new Error('Os campos "name", "email", "password", e "role" devem ser informados!')
  }

  if (password.length < 6) {
      throw new Error('Sua senha precisa ter no mínimo 6 caracteres')
  }

  if (email.indexOf("@") === -1) {
      throw new Error("Email Inválido");
  }

  if (
      role !== USER_ROLES.ADMIN &&
      role !== USER_ROLES.NORMAL
   ) {
      throw new Error(`O campo "role" deve ser "NORMAL" ou "ADMIN"`)
   }

   const id: string = generateId()

   const cypherPassword = await hash(password);

   await insertUser({
      id,
      name,
      email,
      password: cypherPassword,
      role
   })

   const token: string = generateToken({
      id,
      role: role
   })

   return token
}


export const businessLogin = async (
   email: string,
   password: string
) => {
   if (!email || !password) {
      throw new Error("'email' e 'senha' são obrigatórios")
   }

   const user: user = await selectUserByEmail(email)

   if (!user) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const passwordIsCorrect: boolean = await compare(password, user.password)

   if (!passwordIsCorrect) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const token: string = generateToken({
      id: user.id,
      role: user.role
   })

   return token
}

export const businessGetAll = async(
   token:string
)=>{

   const tokenData: authenticationData = getTokenData(token!)
      
      if (!tokenData) {
         throw new Error("Token inválido!");
      }

      const users = await selectAllUsers()
      

      if (!users) {
         throw new Error("Não existem usuários no banco!")
      }

      return users
   }  


   export const businessDeleteUser = async(
      token:string,
      id:string
   )=>{
   
      const tokenData: authenticationData = getTokenData(token!)
         
         if (!tokenData) {
            throw new Error("Token inválido!");
         }
   
         await deleteUser(id)
     
      }  

