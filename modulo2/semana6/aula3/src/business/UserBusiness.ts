import { CustomError } from "../errors/CustomError";
import { User, stringToUserRole, UserRole } from "../model/User";
import userDatabase from "../data/UserDatabase";
import hashGenerator from "../services/hashGenerator";
import idGenerator from "../services/idGenerator";
import tokenGenerator, { AuthenticationData, TokenGenerator } from "../services/tokenGenerator";

export class UserBusiness {
   static getUserById: any;

   public async signup(
      name: string,
      email: string,
      password: string,
      role: string
   ) {
      try {
         if (!name || !email || !password || !role) {
            throw new CustomError(422, "Missing input");
         }

         if (email.indexOf("@") === -1) {
            throw new CustomError(422, "Invalid email");
         }

         if (password.length < 6) {
            throw new CustomError(422, "Invalid password");
         }

         const id = idGenerator.generate();

         const cypherPassword = await hashGenerator.hash(password);

         await userDatabase.createUser(
            new User(id, name, email, cypherPassword, stringToUserRole(role))
         );

         const accessToken = tokenGenerator.generate({
            id,
            role,
         });
         return { accessToken };
      } catch (error) {
         if (error.message.includes("email")) {
            throw new CustomError(409, "Email already in use")
         }

         throw new CustomError(error.statusCode, error.message)
      }

   }

   public async login(email: string, password: string) {

      try {
         if (!email || !password) {
            throw new CustomError(422, "Missing input");
         }

         const user = await userDatabase.getUserByEmail(email);

         if (!user) {
            throw new CustomError(401, "Invalid credentials");
         }

         const isPasswordCorrect = await hashGenerator.compareHash(
            password,
            user.getPassword()
         );

         if (!isPasswordCorrect) {
            throw new CustomError(401, "Invalid credentials");
         }

         const accessToken = tokenGenerator.generate({
            id: user.getId(),
            role: user.getRole(),
         });

         return { accessToken };
      } catch (error) {
         throw new CustomError(error.statusCode, error.message)
      }
   }

   public async getUserById(userId: string) {

      try {
   
         const user: any = await userDatabase.getUserById(userId)
   
         if (!user) {
            throw new CustomError(404, "User Not Found");
         }
   
         return {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            role: user.getRole(),
          }
   
      } catch (error) {
         throw new CustomError(error.statusCode, error.message)
         }
      }

      public async getAllUsers(role: UserRole) {
         if (stringToUserRole(role) !== UserRole.ADMIN) {
            throw new CustomError(401, "You must be an admin to access this endpoint");
         }
         const users = await userDatabase.getAllUsers();
      
         if (!users) {
            throw new CustomError(404, "User Not Found");
         }
      
         return users.map((user) => ({
           id: user.getId(),
           name: user.getName(),
           email: user.getEmail(),
           role: user.getRole(),
         }));
       }
}





export default new UserBusiness()



