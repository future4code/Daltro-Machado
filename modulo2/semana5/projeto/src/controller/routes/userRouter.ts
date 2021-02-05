import express from "express";
import { signup, login, doFriendship, unDoFriendship } from "../userController";

export const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.put("/friendship", doFriendship);
userRouter.delete("/friendship", unDoFriendship);
userRouter.post("/login", login);
