import { connection } from "../index";
import { USER_ROLES } from "../types/user";


	const userTableName = "User";

	export const addUser = async (
		id: string, 
		email: string, 
		password: string,
		role:USER_ROLES) => {
	  await connection
	    .insert({
	      id,
	      email,
		  password,
		  role
	    })
	    .into("User");
	};