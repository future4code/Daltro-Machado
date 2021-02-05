import { connection } from "./connection"
import { Friendship, User } from "../business/entities/user"

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
): Promise<any> => {
   try {
      const result = await connection("labook_users")
         .select("*")
         .where({ email })

      return result[0]
   
   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}

export const insertFriendship = async(
   friendship: Friendship
) => {
   await connection.insert({
      id_friend1: friendship.id_friend1,
      id_friend2: friendship.id_friend2
   }).into('labook_friendships')
}

export const selectUserById = async (
   id: string
): Promise<any> => {
   try {
      const result = await connection("labook_users")
         .select("*")
         .where({ id })

      return result
   
   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}


