import { UserBusiness } from "../src/business/UserBusiness";
import { stringToUserRole, User, UserRole } from "../src/model/User";

describe("Testing UserBusiness.getUserById", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
  
    test("Should return 'User not found' when user does not exist", async () => {
      expect.assertions(2);
      try {
        const getUserById = jest.fn();
        userDatabase = { getUserById };
  
        const userBusiness = new UserBusiness.getUserById(
          userDatabase as any,
          hashGenerator as any,
          tokenGenerator as any,
          idGenerator as any
        );
  
        await userBusiness.getUserById("invalid-id");
      } catch (err) {
        expect(err.statusCode).toBe(404);
        expect(err.message).toBe("User Not Found");
      }
    });

    test("Should return 'Success' when user exist", async () => {
        const getUserById = jest.fn(
          (id: string) =>
            new User(
              "id",
              "Astrodev",
              "astrodev@gmail.com",
              "hash",
              stringToUserRole("ADMIN")
            )
        );
    
        userDatabase = { getUserById };
    
        const userBusiness = new UserBusiness.getUserById(
          userDatabase as any,
          hashGenerator as any,
          tokenGenerator as any,
          idGenerator as any
        );
    
        const user = await userBusiness.getUserById("id");
    
        expect(getUserById).toHaveBeenCalledWith("id");
        expect(user).toEqual({
          id: "id",
          name: "Astrodev",
          email: "astrodev@gmail.com",
          role: UserRole.ADMIN,
        });
      });
    

  });