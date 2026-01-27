import express from "express"
import isAuth from "../middleware/isAuth.js"
import uploadOnMulter from "../middleware/multer.js"
import { createPost, getAllPosts } from "../controllers/post.controller.js"


const postRouter = express.Router()

postRouter.route("/create").post(isAuth , uploadOnMulter.single("postImage"),createPost)
postRouter.route("/all").get(isAuth,getAllPosts)


export default postRouter