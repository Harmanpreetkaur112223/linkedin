import User from "../models/user.model.js"
import { validationResult } from 'express-validator';
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
const signup = async(req , res)=>{

    try {
        // 1. Basic input validation (you can also use express-validator middleware)
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ 
    //     success: false,
    //     errors: errors.array() 
    //   });
    // }

    // console.log(req.body)
    // check for validations
       const {
      firstName,
      lastName,
      userName,
      email,
      password,
      gender,
      role,
      location,
      // conditional fields
      college, degree, specialization, startYear, endYear, skills, jobPreferences, accomplishments, recommendations,
      companyName, recruiterRole, experience
    } = req.body
        if(!(firstName && lastName && userName && email && password && gender && role)) res.status(400).json({message:"Missing required fields"})

        // check for existing user
        const existedUser = await User.findOne({$or:[{email},{userName}]})
        if(existedUser)return res.status(400).json({
            success:false,
            message: existedUser.email === email?"Email already logged in":"User name already taken"
        })
        // hash password
        // console.log("existed user",existedUser)
        if(password.length < 8)return res.status(400).json({message:"password must be atleast 8 characters long"})
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password , salt)
        
        // create user profile based on role
        const profileData = {}
        if(role === "student")
        {
            profileData.education = {
                college: college || "",
                degree: degree || "",
                specialization: specialization || "",
                startYear: startYear ? Number(startYear) : undefined,
                endYear: endYear ? Number(endYear) : undefined,
                skills: Array.isArray(skills) ? skills : [],
                jobPreferences: jobPreferences || "",
                accomplishments: accomplishments || "",
                recommendations: recommendations || ""
            }
            // console.log({...profileData})
        }
        else if(role === "recruiter"){
            profileData.recruiterProfile = {
                companyName : companyName || "",
                recruiterRole : recruiterRole || "",
                experience : experience? Number(experience) : 0
            }
            console.log("recruiter profile",profileData)
        }
        else{
            return res.status(400).json({
                sucess:false,
                message:"Role must be either student or recruiter"
            })
        }
        // create new user
        const user = new User({
            firstName,
            lastName,
            userName,
            email,
            password:hashedPassword,
            location:location || "",
            gender,
            role,
            ...profileData,
            isEmailVerified:false
        })
        await user.save()
        // console.log(user)
        // generate JWt token :- optional
        const payload = {
            id:user._id,
            email:user.email,
            
        }
        const token = jwt.sign(payload , process.env.JWT_SECRET,{expiresIn : process.env.JWT_EXPIRES_IN || '7d'})
        // console.log(token)
        res.cookie("token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",   // false in dev, true in prod
  sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
});

        // send back the response and decide wheter to send the token immediately or after email verification
        res.status(201).json({
        success: true,
        message: "User registered successfully",
         user: {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            email: user.email,
            role: user.role,
            gender: user.gender,
            location: user.location,
            createdAt: user.createdAt
      },
      token   // ← remove this line if you want email verification first
    });
    } catch (error) {
        console.error("Signup error" , error)
        res.status(500).json({
        success: false,
        message: "Server error during registration",
        error: error.message
    });
    }
}

const Login = async(req , res)=>{
    try {
        const {email , password} = req.body;
        console.log(email , password)
        if(!email || !password)return res.status(400).json({message:"Missing credentials"})
        const user = await User.findOne({email:email});
        if(!user)return res.status(400).json({message:"No user exists"})
        const isPwdCorrect = await bcrypt.compare(password , user.password)
        if(!isPwdCorrect) return res.status(400).json({message:"Invalid credentials"})
        const token = await jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN})
        // res.cookie("token",token,{httpOnly:true,secure:true})
        // console.log(token)
        res.cookie("token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",   // false in dev, true in prod
  sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
});
res.status(201).json({user , token})
    } catch (error) {
        console.log("Login error ",error)
         res.status(500).json({
        success: false,
        message: "Server error during login",
        error: error.message
    });
    }
}
const Logout = async(req , res)=>{
    try {
        res.clearCookie("token")
        res.status(200).json({
            success:true,
            message:"Successfully logged out"
        })
    } catch (error) {
        console.log("logout error",error)
        res.status(500).json({
            success:false,
            message:"server error during logout",
            error:error.message
        })
    }
}
export {signup , Login , Logout}