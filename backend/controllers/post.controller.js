import uploadOnCloudinary from "../config/cloudinary.js";
import Post from "../models/post.model.js"
import User from "../models/user.model.js"



const createPost = async(req , res)=>{

    try {
       const {description} = req.body;
       let post;
       if(!description)return res.status(400).json({message:"Post description required"}).populate("user","firstName  lastName  email  profileImage  role  education")
        .populate({
        path: "comments.user",
        select: "firstName lastName email profileImage role education"
      });
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
        const posts = await Post.find().populate("user","firstName  lastName  email  profileImage  role  education")
        .populate({
        path: "comments.user",
        select: "firstName lastName email profileImage role education"
      });
        if(!posts) return res.status(200).json({message:"No posts Found"})
            console.log(posts)
        res.status(201).json({posts:[...posts]})
        
    } catch (error) {
        console.log("get post err",error)
    }
}
const like = async(req , res)=>{
    try {
        const postId = req.params.id;
        const user = req.userId
        let post = await Post.findById(postId).populate("user","firstName  lastName  email  profileImage  role  education")
        .populate({
        path: "comments.user",
        select: "firstName lastName email profileImage role education"
      });
        if(!post) return res.status(400).json({message:"no post found"})
        if(post.likes.includes(user))
        {
            post.likes = post.likes.filter(id => id.toString() !== user.toString())
            console.log(post)

        }
        else{post.likes.push(user)}
        await post.save()
        res.status(201).json({post})
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error})

    }
}

const comment = async(req , res)=>{
    try {
        const postId = req.params.id;
        const userId = req.userId
        const {content} = req.body
        if(!content) return res.status(401).json({message:"content is required"})
        const post = await Post.findById(postId).populate("user","firstName  lastName  email  profileImage  role  education")
        .populate({
        path: "comments.user",
        select: "firstName lastName email profileImage role education"
      });

        console.log("post",post)
        if(!post) return res.status(401).json({message:"Invalid post Id"})
         post.comments.push({content,user:userId})
    await post.save()
    // console.log("post updated",updatedPost)
        res.status(201).json({post })
    } catch (error) {
        console.log("comment err",error)
        res.status(500).json({message:error})
    }
}

const deleteComment = async(req , res)=>{
    try {
        // console.log(req.params.id)
        // console.log(req.params.commentId)
        const post = await Post.findById(req.params.id)
        if(!post)return res.status(404).json({message:"Post not found"})
        const comment = post.comments.filter(c=> c._id.toString() === req.params.commentId.toString())
        if(!comment) return res.status(404).json({message:"No such comment found"})
        // if(comment.user._id.toString() !== req.userId.toString()) return res.status(500).json({message:"Unauthorized user"})
        post.comments = post.comments.filter(c=> c._id.toString() != req.params.commentId.toString() )
        await post.save()

        res.status(201).json({message:"successfully removed comment",post})
        console.log(comment)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error})
    }
}
export {createPost , getAllPosts,like,comment,deleteComment}