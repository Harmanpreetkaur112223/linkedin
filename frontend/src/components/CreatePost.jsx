import React, { useContext, useState } from 'react'
import { UserContextData } from '../context/UserProvider'
import axios from 'axios'
import { useRef } from 'react'
import { AuthContextData } from '../context/AuthContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function CreatePost() {
  const {serverUrl} = useContext(AuthContextData)
   const{userData , setUserData , startPost , setStartPost,posts , setPosts} =  useContext(UserContextData)
  //  const [posts , setPosts] = useState(null)
   const[posting , setIsPosting] = useState(false)
   let [text , setText] = useState("")
  let[frontEndPostImage , setFrontEndPostImage] = useState(null)
  let[backendPostImage , setbackendPostImage] = useState(null)
  const navigate = useNavigate()
  let postImage = useRef()

  const textAreaRef = useRef(null)
  useEffect(() => {
    const textarea = textAreaRef.current;
    if (!textarea) return;

    // Reset height to auto → measure scrollHeight → apply it
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [text]);

  const handlePostImage = (e)=>{
    const file = e.target.files[0]
    setFrontEndPostImage(URL.createObjectURL(file))
    setbackendPostImage(file)
  }
   const handlePost = async(e)=>{
     try {
      setIsPosting(true)
      const formData = new FormData()
      if(backendPostImage)
      {
        formData.append("postImage",backendPostImage)
      }
      formData.append("description",text)
      console.log(formData)
      const response = await axios.post(`${serverUrl}/api/post/create`,formData,{withCredentials:true})
      // setPosts((prev) => [{...prev} , response.data])
      setIsPosting(false)
      console.log("response",response)
      // console.log(posts)
      setText("")
      setFrontEndPostImage("")
      setStartPost(false)
    } catch (error) {
      setIsPosting(false)
      console.log("Create Post error ",error)
      setText("")
      setFrontEndPostImage("")
      // setStartPost(false)

    }
    // console.log(text)
   }
  return (
    <div className='h-screen w-screen fixed top-0 left-0 z-index-[100] bg-black/20'>
        <div className='h-full w-full   flex items-center justify-center relative gap-8'>
            <div className='h-[80%] w-[50vw] relative rounded-lg bg-white opacity-[2] p-4  flex flex-col gap-4'>
                 <img src="cut.png" alt="" className='h-[2.2vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-4 text-[1.1vw] top-[2%] rounded-[50%] ' onClick={()=>setStartPost(false)}/>
                <div className=' h-fit  w-fit flex flex-row gap-2 hover:bg-slate-200 rounded-lg cursor-pointer  px-4'>
                    <img src={userData.user?.profileImage || "profile.png"} alt="" className='h-[8vh] w-[8vh] rounded-[50%]' />
                   <div>
                     <h2 className='h-fit w-full text-[1.3vw] font-semibold'>{userData.user?.firstName} {userData.user?.lastName}</h2>
                    <p>Post to Anyone</p>
                   </div>
                </div>
                <div className=' w-full h-[70vw]  flex items-center justify-center overflow-auto'>
                  <div className='w-[90%] flex justify-center h-full    text-gray-700'>
                     <div className="relative w-full max-w-xl h-full ">
      {/* Fake placeholder */}
      {text.length === 0 && <> {!frontEndPostImage &&<>
        <div className="absolute top-4 left-4 pointer-events-none text-gray-500 text-[1.3vw] flex">
          <span>What do you want to talk about?</span>
          <span className="ml-1 animate-blink"></span>
        </div>
      </>}</>}

      {/* Actual textarea */}
     <div className='h-auto w-full  '> <textarea
        value={text}
        ref={textAreaRef}
        onChange={(e) => setText(e.target.value)}
        rows={1}
        className={`w-full  min-h-fit   rounded-lg p-4 text-[1.3vw]  resize-none overflow-hidden focus:outline-none text-gray-500`} 
      /></div>
    { {frontEndPostImage } && <div className='h-[20vw] w-full flex justify-center '><img src={frontEndPostImage||null} className='h-full bg-white outline-none w-[50%] h-[20vw]'/></div>}
    </div>
                  </div>
                </div>
                <div className='h-[6.2vw]  width-full mt-[-10px]'>
                  <div className='w-[50%]  h-full p-4 flex items-center gap-4'>
                    <img src="/gallry.png" alt="" className='h-[3vw] p-2 cursor-pointer hover:bg-gray-100 rounded-full p-1'onClick={()=>postImage.current.click()} />
                    <input type="file" name="postImage" accept='image/*' id="postImage" ref={postImage} hidden onChange={handlePostImage}  />
                    {/* <img src="/camera.png" alt="" className='h-[3vw] p-2 cursor-pointer hover:bg-gray-100 rounded-full p-1' />
                     <img src="/plus.png" alt="" className='h-[2vw] p-2 cursor-pointer hover:bg-gray-100 rounded-full p-1' /> */}



                </div>
                </div>
                <hr className='text-grey-400'/>
                <div className='h-[6.2vw]  width-full flex items-center justify-end'>
                   <div className='w-[50%]  h-full p-4  flex items-center gap-4 flex gap-4 justify-end items-center'>
                    <button
  type="submit"
  disabled={posting || text.length === 0}
  className={`h-fit w-fit px-8 py-2 text-[1.1vw] rounded-lg 
    ${posting || text.length === 0  
      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
      : "bg-blue-400 text-white cursor-pointer hover:shadow-sm hover:shadow-blue-300 hover:bg-white hover:text-blue-600"
    }`}
  onClick={handlePost}
>
  {posting ? "Posting..." : "Post"}
</button>
                   </div>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default CreatePost
