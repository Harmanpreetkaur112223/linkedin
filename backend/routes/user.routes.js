import express from "express"
import { editProfile, getUserDetails } from "../controllers/user.controllers.js"
import isAuth from "../middleware/isAuth.js";

const userRouter = express.Router()

userRouter.route("/me").get(isAuth,getUserDetails)
userRouter.route("/editProfile").post(isAuth,editProfile)



export default userRouter;