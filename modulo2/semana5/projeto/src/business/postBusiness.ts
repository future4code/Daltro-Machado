import { insertComment, insertPost, selectPostById } from "../data/postDatabase"
import { Post, POST_TYPES, Comment } from "./entities/posts"
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
      throw new Error(`"type" must be "normal" or "event"`)
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



export const businessCreateComment = async (
   id_post: string,
   comment: string,
   token: string
) => {
 
   const tokenData: AuthenticationData = getTokenData(token!)

   if (!tokenData) {
      throw new Error("Invalid token!");
   }

   if (
      !id_post ||
      !comment
   ) {
      throw new Error('"id_post" and "comment" must be informed')
   }

   const id: string = generateId()
   
   const created_at = getCreatedDate(1)

   const author_id = tokenData.id

   const newComment: Comment = {
      id,
      id_post,
      comment,
      author_id,
      created_at
   }

   await insertComment(
      newComment
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

   if (result.length === 0) {
      throw new Error("Post not found")
   }

   const post: Post = {
      id: result[0].id,
      photo: result[0].photo,
      description: result[0].description,
      type: result[0].type,
      created_at: new Date(result[0].created_at).toLocaleDateString(),
      authorId: result[0].author_id,
   }
  

   return post
}

