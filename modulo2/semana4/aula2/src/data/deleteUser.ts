import { connection } from "..";

export default async function deleteUser(
    id: string
):Promise<void> {
    await connection.raw(`
      DELETE FROM User
      WHERE id = ${id};
    `)
 } 