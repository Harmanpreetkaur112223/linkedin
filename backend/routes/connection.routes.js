import express from "express"
import isAuth from "../middleware/isAuth.js"
import { acceptConnection, getAllConnections, rejectConnection, removeConnection, sendConnection } from "../controllers/connection.controllers.js"
const connectionRouter = express.Router()

connectionRouter.route("/send/:recieverId").post(isAuth , sendConnection)
connectionRouter.route("/accept/:connectionId").put(isAuth,acceptConnection)
connectionRouter.route("/reject/:connectionId").put(isAuth,rejectConnection)
connectionRouter.route("/remove/:connectionId").delete(isAuth, removeConnection)
connectionRouter.route("/all").get(isAuth,getAllConnections)

export default connectionRouter