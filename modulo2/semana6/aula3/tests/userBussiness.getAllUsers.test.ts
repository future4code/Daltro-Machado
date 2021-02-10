import { UserBusiness } from "../src/business/UserBusiness";
import { stringToUserRole, User, UserRole } from "../src/model/User";


describe("Testing UserBusiness.allUsers", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
  
    test("Should return 'You must be an admin to access this endpoint' when user is NORMAL", async () => {
      expect.assertions(2);
      try {
        const userBusiness = new UserBusiness.getAllUsers(
          userDatabase as any,
          hashGenerator as any,
          tokenGenerator as any,
          idGenerator as any
        );
  
        await userBusiness.getAllUsers(UserRole.NORMAL);
      } catch (err) {
        expect(err.statusCode).toBe(401);
        expect(err.message).toBe("You must be an admin to access this endpoint");
      }
    });

    test("Should return 'Success!", async () => {
        const getAllUsers = jest.fn(() => [
          new User(
            "id",
            "Astrodev",
            "astrodev@gmail.com",
            "hash",
            stringToUserRole("ADMIN")
          ),
        ]);
        userDatabase = { getAllUsers };
    
        const userBusiness = new UserBusiness.getAllUsers(
          userDatabase as any,
          hashGenerator as any,
          tokenGenerator as any,
          idGenerator as any
        );
    
        const result = await userBusiness.getAllUsers(UserRole.ADMIN);
    
        expect(getAllUsers).toHaveBeenCalledTimes(1);
        expect(result).toContainEqual({
          id: "id",
          name: "Astrodev",
          email: "astrodev@gmail.com",
          role: UserRole.ADMIN,
        });
      });    
  });