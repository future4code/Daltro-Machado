import { insertPost, selectPostById } from "../data/postDatabase"
import { Post, POST_TYPES } from "./entities/posts"
import { AuthenticationData } from "./entities/user"
import { getTokenData } from "./services/authenticator"
import { getCreatedDate } from "./services/getCreatedDate"
import { generateId } from "./services/idGenerator"

export const businessCreatePost = async (
   photo: string,
   description: string,
   type: string,
   token: string
) => {
 
   const tokenData: AuthenticationData = getTokenData(token!)

   if (!tokenData) {
      throw new Error("Invalid token!");
   }

   if (
      !photo ||
      !description ||
      !type
   ) {
      throw new Error('"photo", "description", and "type" must be informed')
   }

   if (
      type !== POST_TYPES.EVENT &&
      type !== POST_TYPES.NORMAL
   ) {
      throw new Error(`"type" must be "NORMAL" or "EVENT"`)
   }

   const id: string = generateId()
   
   const created_at = getCreatedDate(1)

   const authorId = tokenData.id

   const post: Post = {
      id,
      photo,
      description,
      type,
      created_at,
      authorId
   }

   await insertPost(
      post
   )

   return "Success!"

}

export const businessGetPostById = async(
   id:string, token: string
)=>{

   const tokenData: AuthenticationData = getTokenData(token!)

   if (!tokenData) {
      throw new Error("Invalid token!");
   }

   const result = await selectPostById(id)

   if (!result) {
      throw new Error("Post not found")
   }

   const post: Post = {
      id: result[0].id,
      photo: result[0].photo,
      description: result[0].description,
      type: result[0].type,
      created_at: result[0].created_at,
      authorId: result[0].author_id,
   }

   return post
}

