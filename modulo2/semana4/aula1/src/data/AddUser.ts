import { connection } from "../index";


	const userTableName = "User";

	export const addUser = async (
		id: string, 
		email: string, 
		password: string) => {
	  await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into("User");
	};