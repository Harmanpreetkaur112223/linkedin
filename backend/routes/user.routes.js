import express from "express"
import { getUserDetails } from "../controllers/user.controllers.js"
import isAuth from "../middleware/isAuth.js";

const userRouter = express.Router()

userRouter.route("/me").get(isAuth,getUserDetails)


export default userRouter;