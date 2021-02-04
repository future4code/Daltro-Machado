import { connection } from "./connection"
import { User } from "../business/entities/user"
//import { convertUserRoleToString } from "./model/userModel"


export const insertUser = async(
   user: User
) => {
   await connection.insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
   }).into('labook_users')
}

export const selectUserByEmail = async (
   email: string
): Promise<User> => {
   try {
      const result = await connection("labook_users")
         .select("*")
         .where({ email })

      return {
         id: result[0].id,
         name: result[0].name,
         email: result[0].email,
         password: result[0].password
      }

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}

/* export const selectUserById = async (
   id: string
): Promise<user> => {
   try {
      const result = await connection("to_do_list_users")
         .select("*")
         .where({ id })

      return {
         id: result[0].id,
         name: result[0].name,
         nickname: result[0].nickname,
         email: result[0].email,
         password: result[0].password,
         role: result[0].role
      }

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}
 */

