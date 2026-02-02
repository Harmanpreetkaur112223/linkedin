import React, { useContext, useState } from 'react'
import { UserContextData } from '../context/UserProvider';
import axios from 'axios';
import { AuthContextData } from '../context/AuthContext';

function CommentOuter({id , post}) {
      const[commentData , setCommentData] = useState({content:""})
      const { posts, setPosts, userData, getPosts } = useContext(UserContextData);
          const { serverUrl } = useContext(AuthContextData);
          const [currentPost, setCurrPost] = useState(post);
        

    const handleCommentChange=(e)=>{
    // console.log(commentData)
    setCommentData({[e.target.name]:e.target.value})
    
  }
     const handleComment = async (e) => {
        // setOnComment(prev=>!prev)
        // console.log(comments)
       try {
         e.preventDefault()
        // const formdata = new FormData()
        // formdata.append("content",commentData)
        const response = await axios.post(`${serverUrl}/api/post/comment/${id}`,commentData,{withCredentials:true})
        setCurrPost(response.data.post)
        console.log(response)
        setCommentData({content:""})
       } catch (error) {
        console.log("comment error",error)
       }
      };
  return (
     <div className="h-fit py-4 mt-2  border border-t-1">
        <div className="h-fit w-full  px-4 py-2 flex items-center gap-2 ">
          <div className="w-fit h-fit ">
            <img
            src={userData.user.profileImage || "profile.png"}
            alt="profile"
            className="h-8 w-8 sm:h-14 sm:w-14 rounded-full cursor-pointer object-cover"
          />
          </div>
          <div className="w-[90%]  h-full flex items-center justify-around gap-2 ">
            <input type="text" name="content" autoComplete="off" value={commentData.content} onChange={handleCommentChange} id="comment" className="w-[90%] py-2 px-2 rounded-[21px] border outline-none border-gray-600 " placeholder="write a comment..." />
            <img
            src="send.bl.png"
            alt="profile"
            className="h-[2vh] w-[2vh]  p-4 sm:h-14 sm:w-14 rounded-full cursor-pointer object-cover"
            onClick={handleComment}
          />
          </div>
        </div>
        <div></div>
      </div>
)
}

export default CommentOuter