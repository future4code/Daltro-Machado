import express from "express";
import { createPost, getPostById } from "../postController";
export const postsRouter = express.Router();

postsRouter.post("/create", createPost);
postsRouter.get("/:id", getPostById);