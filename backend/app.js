import express, { urlencoded } from "express";
import dotenv from "dotenv"

import cookieParser from "cookie-parser";
import cors from "cors"
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
dotenv.config({path:'./.env'})
const app = express()


app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true
}))


// middlewares
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)

export default app