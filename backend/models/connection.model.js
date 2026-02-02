import mongoose, { connection } from "mongoose"

const connectionSchems = mongoose.Schema({
    sender:{
        type:String,
        required:true
    }
    ,
    reciever:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['pending' , 'accepted','rejected']
    }
},{timestamps:true})

const Connection = mongoose.model("Connection",connectionSchems)
export default Connection