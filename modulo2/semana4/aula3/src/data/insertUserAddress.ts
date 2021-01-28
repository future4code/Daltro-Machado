import { connection } from "../index";

export default async function insertUserAddress(
    id: string,
    name: string,
    number: string,
    neighbourhood: string,
    city: string,
    state: string,
    user_id: string,
    complement?: string
) {
    await connection.insert({
        id,
        name,
        number,
        neighbourhood,
        city,
        state,
        user_id,
        complement
    }).into('users_address')
}

