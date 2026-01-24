
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

const editProfile = async(req , res)=>{
    try {
        const{isUserIntro,isUserAbout,isUserEducation,isUserSkill,isUserExperience} = req.body
       if(isUserIntro){
         const {firstName , lastName , additionalName , email , headline , location,userName , about , connections,followers,following,noOfConnections , noOfFollowers , noOfFollowing,gender,role,studentProfile,recruiterProfile,skills,posts,noOfPosts} = req.body
        if((!firstName || !lastName || !email) )return res.status(400).json({message:"missing credentials"})
        const data = {firstName , lastName , additionalName , email , headline , location,userName , about , connections,followers,following,noOfConnections , noOfFollowers , noOfFollowing,gender,role,studentProfile,recruiterProfile,skills,posts,noOfPosts}
        const user = await User.findByIdAndUpdate(req.userId,data,{new:true}).select(" -password ")
        if(!user) return res.status(400).json({message:"Invalid User"})
        res.status(200).json({
            success:true,
            user,
            message:"Profile Editted successfully"
        })
       }
       if(isUserAbout){
        const {about} = req.body
        if(about.length == 0)return res.status(400).json({message:"About cannot be empty"})
        const updatedUser = await User.findByIdAndUpdate(req.userId,{about},{new:true})
        if(!updatedUser)return res.status(400).json({message:"Invalid user"})
        res.status(200).json({message:"User about updated successfully",user:updatedUser})
       }
       if(isUserEducation){
        const {college , degree,specialization,startDate,endDate,grade,studentDescription} = req.body;
        // const data = {college , degree,specialization,startDate,endDate,grade,studentDescription}
        if((!college , !degree , !specialization , !startDate , !endDate , !grade, !studentDescription))
        {
            return res.status(400).json({message:"missing credentials"})
        }
        const updatedUser = await User.findByIdAndUpdate(req.userId,{$push:{education:{
            college,degree,specialization,startDate,endDate,grade,studentDescription
        }}},{new:true})
         if(!updatedUser)return res.status(400).json({message:"Invalid user"})
        res.status(200).json({message:"User Education updated successfully",user:updatedUser})
       }
       if(isUserSkill){
        const {skills} = req.body
        if(skills.length == 0) return res.status(400).json({message:"Empty skills"})
        const updatedUser = await User.findByIdAndUpdate(req.userId,{$push:{skills:skills}},{new:true})
      if(!updatedUser)return res.status(400).json({message:"Invalid user"})
         res.status(200).json({message:"User Skills updated successfully",user:updatedUser})
       }
    if(isUserExperience)
    {
        const {companyName , title , experience ,employementType} = req.body
        console.log(companyName,title,experience,employementType)
        if((!companyName, !title , !experience , !employementType))
            {
            return res.status(400).json({message:"missing credentials"})
        }
        const updatedUser = await User.findByIdAndUpdate(req.userId,{$push:{workProfile:{companyName,title,experience,employementType}}},{new:true})
         if(!updatedUser)return res.status(400).json({message:"Invalid user"})
         res.status(200).json({message:"User recruiterProfile updated successfully",user:updatedUser})
       
    }

    } catch (error) {
        console.log("edit profile error",error)
       return res.status(500).json({message:"Edit profile error"})
    }
}


export {getUserDetails , editProfile}