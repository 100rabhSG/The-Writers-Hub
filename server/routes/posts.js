import express from "express";
import { getPostsBySearch, getPosts, getPost, createPost, updatePost, deletePost, likePost, commentPost } from "../controllers/posts.js";
import auth from '../middleware/auth.js';

const router = express.Router();

//  We don't want to put all the logic for routes here in this file itself bcz if we keep adding logic here then this file will become very large and difficult to manage
//  So we will create a folder called controllers and inside that folder we will create a file called posts.js

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);  // :id is a dynamic route
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);

// here 'auth' is a middleware that is called before actions to verify is user is authorised to perform that action or not

export default router;