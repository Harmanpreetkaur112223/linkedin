import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(`${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`,{serverSelectionTimeoutMS: 5000,})
        console.log("database connected")
        console.log(conn.connection.host)
    }
    catch(err){
        console.log(err.message)
    }
}

export default connectDB