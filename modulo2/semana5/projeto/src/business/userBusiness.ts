import { compare, hash } from "./services/hashManager";
import { insertUser, selectUserByEmail, } from "../data/userDatabase";
import { generateToken } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import { User, signupInputDTO } from "./entities/user";
/* import { selectTaskByUserId } from "../data/taskDatabase";
import { setTasks, convertStringToUserRole } from "../data/model/userModel";

 */
export const businessSignup = async (
   input: signupInputDTO
 ) => {
 
    if (!input.name || !input.email || !input.password) {
       throw new Error('"name", "email" and "password" must be provided')
    }

    if (input.password.length < 6) {
      throw new Error('password must be at leats 6 characters')
  }

  if (input.email.indexOf("@") === -1) {
      throw new Error("Invalid Email");
  }

 
    const id: string = generateId()
 
    const cypherPassword = await hash(input.password);
 
    const user = {
       id,
       name: input.name,
       email: input.email,
       password: cypherPassword,
    }
 
    await insertUser(user);
 
    const token: string = generateToken({ id })
 
    return token
 }

export const businessLogin = async (
   email: string,
   password: string
) => {
   if (!email || !password) {
      throw new Error('"email" and "password" must be provided')
   }
   
   const user: User = await selectUserByEmail(email)

   if (!user) {
      throw new Error("Invalid credentials")
   }

   const passwordIsCorrect: boolean = await compare(password, user.password)

   if (!passwordIsCorrect) {
      throw new Error("Invalid credentials")
   }

   const token: string = generateToken({
      id: user.id,
   })

   return token
}

/* export const businessGetProfile = async(id: string)=>{

   const user = await selectUserById(id);
   const userTasks = await selectTaskByUserId(id);
   setTasks(user, userTasks);

   return user;

} */









