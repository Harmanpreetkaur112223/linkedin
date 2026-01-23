import express from "express"
import { Login, Logout, signup } from "../controllers/auth.controllers.js"

const authRouter = express.Router()

authRouter.route('/signup').post(signup)
authRouter.route("/login").post(Login)
authRouter.route("/logout").get(Logout)


export default authRouter;