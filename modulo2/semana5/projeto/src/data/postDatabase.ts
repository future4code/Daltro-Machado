import { connection } from "./connection";
/* import { task } from "../business/entities/task";
import { toTaskModel } from "./model/taskModel"; */
import { Post } from "../business/entities/posts";

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

/* 
export const selectTaskByUserId = async (
   id: string
): Promise<task[]> => {

   const result = await connection.raw(`
        SELECT * FROM to_do_list_tasks
        WHERE author_id = '${id}';
    `)
   const tasks: task[] = [];

   for(let task of result[0]){
      tasks.push(toTaskModel(task));
   }
    
   return tasks;
} */