import app from "./app.js";
import connectDB from "./config/db.js";
const port = process.env.PORT || 3000
connectDB()
.then(()=>{
    app.listen(port , ()=>{
    console.log(`server started at http://localhost:${port}`)
})
})
.catch((error)=>{
    console.log(error)
})