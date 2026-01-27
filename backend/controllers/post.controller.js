import uploadOnCloudinary from "../config/cloudinary.js";
import Post from "../models/post.model.js"
import User from "../models/user.model.js"



const createPost = async(req , res)=>{

    try {
       const {description} = req.body;
       let post;
       if(!description)return res.status(400).json({message:"Post description required"})
        if(req.file){
            const postImage = await uploadOnCloudinary(req.file.path)
            if(!postImage)return res.status(400).json({message:"Invalid post image"})
             post = new Post({user:req.userId,description,postImage})
        


        }
        else{
            post = new Post({user:req.userId,description})
        }
        await post.save()
        res.status(201).json({success:true,message:"Post created successfully",post})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Create post error",error})
    }
}
const getAllPosts = async(req , res)=>{
    try {
        const posts = await Post.find().populate("user" )
        if(!posts) return res.status(200).json({message:"No posts Found"})
            console.log(posts)
        res.status(201).json({posts:[...posts]})
        
    } catch (error) {
        console.log("get post err",error)
    }
}

export {createPost , getAllPosts}