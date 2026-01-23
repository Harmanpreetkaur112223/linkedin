import React, { useContext, useState } from 'react'
import { UserContextData } from '../context/UserProvider'

function CreatePost() {
   const{userData , setUserData , startPost , setStartPost} =  useContext(UserContextData)
   const [postData , setPostData] = useState(null)
   let [text , setText] = useState("")
  return (
    <div className='h-screen w-screen fixed top-0 left-0 z-index-[100] bg-black/20'>
        <div className='h-full w-full   flex items-center justify-center relative gap-8'>
            <div className='h-[80%] w-[50vw] relative rounded-lg bg-white opacity-[2] p-4  flex flex-col gap-4'>
                 <img src="cut.png" alt="" className='h-[2.2vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-4 text-[1.1vw] top-[2%] rounded-[50%] ' onClick={()=>setStartPost(false)}/>
                <div className=' h-fit w-fit flex flex-row gap-2 hover:bg-slate-200 rounded-lg cursor-pointer  px-4'>
                    <img src="profile.png" alt="" className='h-[9vh] rounded-[50%]' />
                   <div>
                     <h2 className='h-fit w-full text-[1.3vw] font-semibold'>{userData.user.firstName} {userData.user.lastName}</h2>
                    <p>Post to Anyone</p>
                   </div>
                </div>
                <div className=' w-full h-[70vw] flex items-center justify-center overflow-auto'>
                  <div className='w-[90%] flex justify-center h-full  text-gray-700'>
                     <div className="relative w-full max-w-xl">
      {/* Fake placeholder */}
      {text.length === 0 && (
        <div className="absolute top-4 left-4 pointer-events-none text-gray-500 text-[1.3vw] flex">
          <span>What do you want to talk about?</span>
          <span className="ml-1 animate-blink"></span>
        </div>
      )}

      {/* Actual textarea */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={12}
        className="w-full  h-full rounded-lg p-4 text-[1.3vw] focus:outline-none text-gray-500 "
      />
    </div>
                  </div>
                </div>
                <div className='h-[6.2vw]  width-full mt-[-10px]'>
                  <div className='w-[50%]  h-full p-4 flex items-center gap-4'>
                    <img src="/gallry.png" alt="" className='h-[3vw] p-2 cursor-pointer hover:bg-gray-100 rounded-full p-1' />
                    <img src="/camera.png" alt="" className='h-[3vw] p-2 cursor-pointer hover:bg-gray-100 rounded-full p-1' />
                     <img src="/plus.png" alt="" className='h-[2vw] p-2 cursor-pointer hover:bg-gray-100 rounded-full p-1' />



                </div>
                </div>
                <hr className='text-grey-400'/>
                <div className='h-[6.2vw]  width-full flex items-center justify-end'>
                   <div className='w-[50%]  h-full p-4  flex items-center gap-4 flex gap-4 justify-end items-center'>
                    <div className='h-fit text-white w-fit px-8 py-2 cursor-pointer  hover:shadow-sm hover:shadow-blue-300 hover:bg-white hover:text-blue-600  text-[1.1vw] bg-blue-400 rounded-lg '>Post</div>
                   </div>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default CreatePost
