import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { AuthContextData } from "../context/AuthContext";
import axios from "axios";
import { UserContextData } from "../context/UserProvider";
import CommentOuter from "./CommentOuter";

function Post({ id, post, user, description, postImage, likes, comments }) {
  const { serverUrl } = useContext(AuthContextData);
  const { posts, setPosts, userData, getPosts } = useContext(UserContextData);
  const[onComment , setOnComment] = useState(false)
  const[currentComments , setCurrentComments] = useState(comments || [])
  const [isLiked, setIsLiked] = useState(
    likes.includes(userData.user?._id) || false,
  );
  const [currentPost, setCurrPost] = useState(post);
  const handleLike = async (e) => {
    try {
      const response = await axios.post(
        `${serverUrl}/api/post/like/${id}`,
        {},
        { withCredentials: true },
      );
      console.log("like response ", response);
      setCurrPost(response.data.post);
      setIsLiked((prev) => !prev);
    } catch (error) {
      console.log("like error", error);
    }
  };
 
  useEffect(() => {
    getPosts();
  }, [currentPost, setCurrPost,currentComments,setCurrentComments]);

  const handleCommentCut = async(commentId) =>{
    // console.log(id)
    const response = await axios.delete(`${serverUrl}/api/post/${id}/comment/${commentId}`,{withCredentials:true})
    console.log(response.data.post)
    setCurrentComments(response.data.post.comments)
    // setCurrentComments(currentComments.filter(comment=>comment._id != commentId))
  }
  
  return (
    <div className="w-full bg-white shadow-lg rounded-lg mt-4 mb-6 p-3 sm:p-4 flex flex-col gap-2 md:gap-3">
      {/* Suggested + menu buttons */}
      <div className="flex items-center justify-between text-gray-600">
        <div className="text-sm sm:text-base">Suggested</div>
        <div className="flex items-center gap-1 sm:gap-2">
          <img
            src="menu.png"
            alt="menu"
            className="h-8 w-8 sm:h-9 sm:w-9 p-1.5 cursor-pointer rounded-full hover:bg-gray-100 transition"
          />
          <img
            src="cut.png"
            alt="close"
            className="h-8 w-8 sm:h-9 sm:w-9 p-1.5 cursor-pointer rounded-full hover:bg-gray-100 transition"
          />
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Profile + Follow */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
          <img
            src={user?.profileImage || "profile.png"}
            alt="profile"
            className="h-12 w-12 sm:h-14 sm:w-14 rounded-full cursor-pointer object-cover"
          />
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-black cursor-pointer hover:text-blue-800 hover:underline truncate">
              {user?.firstName} {user?.lastName}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 cursor-pointer truncate">
              {user?.role === "student"
                ? `Student at ${user?.education[0]["college"]}`
                : `Working as ${user?.workProfile?.title} at ${user?.workProfile?.companyName}`}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 cursor-pointer">
              Time.
            </p>
          </div>
        </div>

        <button className="text-blue-600 font-bold px-4 py-1.5 sm:py-2 rounded-lg hover:bg-blue-50 transition whitespace-nowrap text-sm sm:text-base">
          + follow
        </button>
      </div>

      {/* Main content text */}
      <div className="px-1 text-sm sm:text-base leading-relaxed text-gray-800">
        {description}
      </div>

      {/* Hashtags */}
      <div className="px-1">
        <p className="text-blue-700 text-sm sm:text-base cursor-pointer hover:underline break-words">
          #AmrapaliUniversity #StudentTestimonial #StudentSuccess #BTechCSE
          #FutureInnovators #GoogleStudentAmbassador #HackathonJourney #VibeCode
          #StartupUttarakhand #DevFest #InnovationMindset #TechLeaders
          #CampusToCorporate
        </p>
      </div>

      {/* Image */}
      {postImage && (
        <div className="mt-1">
          <img
            src={postImage || null}
            alt="post content"
            className="w-full h-auto rounded-lg object-cover max-h-[500px]"
          />
        </div>
      )}

      <div className="flex items-center justify-between px-8 border-t border-gray-200 pt-2 mt-1">
        <div className=" h-full w-[50%] flex gap-2 text-gray-600">
          <div><img 
            className={`h-5 w-3 sm:h-6 sm:w-6 cursor-pointer `}
          
          src="blue-like.png" alt="" /></div>
          <div>{currentPost.likes?.length ?? 0}</div>
        </div>
        <div className=" h-full w-[50%] flex gap-2 text-gray-600 justify-end">
          <div>comments</div>
          <div>{currentComments?.length ?? 0}</div>
        </div>
      </div>
      {/* Action buttons */}
      <div className="flex items-center justify-around border-t border-gray-200 pt-2 mt-1">
        <button className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition">
          <img
            src={isLiked ? "like2.png" : "like.png"}
            alt="like"
            className={`h-5 w-3 sm:h-6 sm:w-6 ${isLiked ? "text-blue-800" : "text-black"} cursor-pointer `}
            onClick={handleLike}
          />
          <span
            className={`text-xs sm:text-sm font-medium ${isLiked ? "text-blue-600" : "text-gray-700"}`}
          >
            {isLiked ? "liked" : "like"}
          </span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition">
          <img
            src="comment.png"
            alt="comment"
            className="h-5 w-3 sm:h-6 sm:w-6"
            onClick={()=>(setOnComment(prev=>!prev))}
          />
          <span className="text-xs sm:text-sm font-medium text-gray-700 cursor-pointer"
            onClick={()=>(setOnComment(prev=>!prev))}
           >
            comment
          </span>
        </button>
      </div>
     {onComment && <CommentOuter id={id} post = {post}/>}
     {onComment && <>
     {currentComments.length !== 0 && <>
      {currentComments.map((val,idx)=>
      <div key={idx} className="h-fit py-1 w-full flex flex-col  border-t gap-2">
        <div className=" w-full px-4 h-fit py-2  flex items-center justify-between ">
          <div className="w-fit h-fit flex gap-4 items-center ">
            <img
            src={userData.user.profileImage || "profile.png"}
            alt="profile"
            className="h-8 w-8 sm:h-14 sm:w-14 rounded-full cursor-pointer object-cover"
          />
          <div className="font-semibold">{val.user.firstName} {val.user.lastName}</div>
          </div>
        <div>
           <img
            src="cut.png"
            alt="cut"
            className="h-[4vh] w-[4vh] p-2 rounded-full hover:bg-gray-200 cursor-pointer"
            onClick={()=>handleCommentCut(val._id)}
          />
        </div>
        </div>
        <div className=" w-full h-fit py-2 px-8">
          {val.content}
        </div>
      </div>)}
     </>} 
     </>}
    </div>
  );
}



export default Post;
