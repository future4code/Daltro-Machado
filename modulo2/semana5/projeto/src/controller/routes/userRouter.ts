import express from "express";
import { signup, login, doFriendship } from "../userController";

export const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.put("/friendship", doFriendship);
userRouter.post("/login", login);
