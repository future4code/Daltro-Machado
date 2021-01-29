import { connection } from "..";

export default async function deleteFollowUser(
    follower_id: string,
    followed_id: string
) {
    await connection('follow_relations')
        .delete()
        .where({ follower_id } && { followed_id })
}