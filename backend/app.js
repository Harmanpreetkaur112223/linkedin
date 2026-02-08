import express, { urlencoded } from "express";
import dotenv from "dotenv"

import cookieParser from "cookie-parser";
import cors from "cors"
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";
import connectionRouter from "./routes/connection.routes.js";
import http from 'http'
import { Server } from "socket.io";


dotenv.config({path:'./.env'})
const app = express()
//create server using http and app
let server = http.createServer(app)

const io = new Server(server,{
  cors:({
  origin: "http://localhost:5173", // frontend URL
  credentials: true
})
})
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
app.use("/api/post",postRouter)
app.use("/api/connection",connectionRouter)

io.on("connection",(socket)=>{
  console.log("user connected", socket.id)
  socket.on("disconnect",(socket)=>{
    console.log(socket.id)
  })
})
export  { server , io}