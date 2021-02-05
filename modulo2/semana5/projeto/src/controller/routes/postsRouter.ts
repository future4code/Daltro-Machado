import express from "express";
import { createPost, getPostById, commentPost } from "../postController";
export const postsRouter = express.Router();

postsRouter.post("/create", createPost);
postsRouter.post("/comment", commentPost);
postsRouter.get("/:id", getPostById);