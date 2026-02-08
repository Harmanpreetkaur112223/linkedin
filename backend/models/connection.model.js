import mongoose from "mongoose"

const connectionSchems = mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
                ref:"User"
    }
    ,
    reciever:{
        type:mongoose.Schema.Types.ObjectId,
                ref:"User"
    },
    status:{
        type:String,
        enum:['pending' , 'accepted','rejected']
    }
},{timestamps:true})

const Connection = mongoose.model("Connection",connectionSchems)
export default Connection