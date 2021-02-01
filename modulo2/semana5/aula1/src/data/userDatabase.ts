import { connection } from "./connection"
import { user } from "../business/entities/user"


export const insertUser = async(
   user: user
) => {
   await connection.insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role
   }).into('Camadas_User')
}

export const selectUserByEmail = async (
   email: string
): Promise<user> => {
   
      const result = await connection("Camadas_User")
         .select("*")
         .where({ email })

      return {
         id: result[0].id,
         name: result[0].name,
         email: result[0].email,
         password: result[0].password,
         role: result[0].role
      }
}
 
export const selectAllUsers = async (): Promise<user> => {
   
      const users: any = [];

      const result = await connection("Camadas_User")
         .select("*")
      
      for(let user of result){
			users.push(user);
		}

      return users
}

export const deleteUser = async (
   id: string
) => {
   
      await connection("Camadas_User")
         .delete()
         .where({ id })

}

