import express from "express"
import isAuth from "../middleware/isAuth.js"
import uploadOnMulter from "../middleware/multer.js"
import { comment, createPost, deleteComment, getAllPosts, like } from "../controllers/post.controller.js"


const postRouter = express.Router()

postRouter.route("/create").post(isAuth , uploadOnMulter.single("postImage"),createPost)
postRouter.route("/all").get(isAuth,getAllPosts)
postRouter.route("/like/:id").post(isAuth,like)
postRouter.route("/comment/:id").post(isAuth,comment)
postRouter.route("/:id/comment/:commentId").delete(isAuth , deleteComment)



export default postRouter