import { connection } from "..";

export default async function insertFollowUser(
    follower_id: string,
    followed_id: string
) {
    await connection('follow_relations')
        .insert({
            follower_id,
            followed_id
        })
}