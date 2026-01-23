
import User from "../models/user.model.js"
const getUserDetails = async(req , res)=>{
    try {
        const userId = req.userId;
        
        const user = await User.findById(userId).select("-password")
        console.log("user",user)
        if(!user)res.status(400).json({message:"User does not found"})
        res.status(200).json({user})
    } catch (error) {
    console.log(error)
     res.status(400).json({message:"Current user err"})   
    }
}




export {getUserDetails}