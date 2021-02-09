import { connection } from "./connection";
import { Post, Comment } from "../business/entities/posts";

export const selectPostById = async (
   id: string
): Promise<any> => {
   const result: any = await connection("labook_posts")
   .select("*")
   .where({ id })
   
   return result
}


export const insertPost = async (
   post: Post
) => {
   await connection('labook_posts')
      .insert({
         id: post.id,
         photo: post.photo,
         description: post.description,
         type: post.type,
         created_at: post.created_at,
         author_id: post.authorId
      })
}

export const insertComment = async (
   newComment: Comment
) => {
   await connection('labook_comments')
      .insert({
         id: newComment.id,
         id_post: newComment.id_post,
         comment: newComment.comment,
         author_id: newComment.author_id,
         created_at: newComment.created_at
      })
}
