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