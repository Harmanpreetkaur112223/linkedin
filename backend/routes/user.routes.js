import express from "express"
import { editProfile, getUserDetails } from "../controllers/user.controllers.js"
import isAuth from "../middleware/isAuth.js";
import uploadOnMulter from "../middleware/multer.js"

const userRouter = express.Router()

userRouter.route("/me").get(isAuth,getUserDetails)
userRouter.route("/editProfile").post(isAuth,uploadOnMulter.fields([
    {
        name:"profileImage",
        maxCount : 1
    },
    {
        name:"coverImage",
        maxCount:1
    }
]),editProfile)



export default userRouter;