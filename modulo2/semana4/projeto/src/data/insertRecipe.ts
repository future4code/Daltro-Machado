import { connection } from "..";

export default async function insertRecipe(
    id: string,
    title: string,
    description: string,
    create_date: string,
    authorId: string
) {
    await connection('Cookenu_Recipes')
        .insert({
            id,
            title,
            description,
            create_date,
            author_id: authorId
        })
}