export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export type Post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    created_at: string,
    authorId: string
 }

 export type Comment = {
    id: string,
    id_post: string,
    comment: string,
    author_id: string,
    created_at: string
 }