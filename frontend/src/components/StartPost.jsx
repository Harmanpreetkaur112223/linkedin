// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// function StartPost() {
//     const navigate = useNavigate()
//   return (
//     <div className='w-full h-[20%] shadow-lg rounded-md flex flex-col mb-8 bg-white'>
//         <div className='h-[60%]  flex flex-row items-center  justify-start pr-4'>
//             <div className='h-full w-[15%]  '>
//                 <img src="profile.png" alt=" " onClick={()=>navigate("/profile")} className=' mt-1 ml-1 border-white cursor-pointer rounded-[50%] h-[3.7vw] mt-4 ml-2' />
//             </div>
//             <div className=' w-full '>
//                 <form action="">
//                     <input type="text" name="" id="" placeholder="Start a post" className='p-2 text-blue-900 font-medium border-1 w-full rounded-[18px] outline-none focus:bg-slate-200 focus:text-'  />
//                 </form>
//             </div>
//         </div>
//         <div className='h-[40%] w-full flex flex-row justify-around '>
//             <div className=' cursor-pointer   w-full flex items-center justify-center '>
//                 <div className='rounded-md p-4 h-[96%] w-fit flex items-center justify-center flex-row gap-[1vh] hover:bg-slate-100'>
//                 <img src="video.png" alt=""  className='h-[5vh]'/>
//                 <span className='text-[0.9vw] font-semibold '>Video</span>
//                 </div>
//             </div>
//            <div className=' cursor-pointer   w-full flex items-center justify-center '>
//                 <div className='rounded-md p-4 h-[96%] w-fit flex items-center justify-center flex-row gap-[1vh] hover:bg-slate-100'>
//                 <img src="gallry.png" alt=""  className='h-[5vh]'/>
//                 <span className='text-[0.9vw] font-semibold '>Photo</span>
//                 </div>
//             </div>
//            <div className=' cursor-pointer   w-full flex items-center justify-center '>
//                 <div className='rounded-md p-4 h-[96%] w-fit flex items-center justify-center flex-row gap-[1vh] hover:bg-slate-100'>
//                 <img src="article.png" alt=""  className='h-[5vh]'/>
//                 <span className='text-[0.9vw] font-semibold '>Write article</span>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default StartPost
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContextData } from '../context/UserProvider';
import CreatePost from './CreatePost';
function StartPost() {
  let {startPost , setStartPost ,userData , setUserData} = useContext(UserContextData)
  const navigate = useNavigate();
 const handlePostStart = ()=>{
  console.log("startPost ",startPost)
  setStartPost(true)
 }
  return (
    <div className="w-full relative bg-white rounded-lg shadow shadow-gray-200/70 mb-6 border border-gray-200 py-4">
      {/* Top part - Profile + Input */}
      <div className="flex items-center gap-3 px-4 pt-4 pb-2">
        <div className="flex-shrink-0">
          <img
            src={userData.user?.profileImage || "/profile.png"}
            alt="Your profile"
            onClick={() => navigate('/profile')}
            className="w-[11px] h-[11px] sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white cursor-pointer hover:opacity-90 transition"
          />
        </div>

        <div className="flex-1">
          <input
            type="text"
            placeholder="Start a post"
            className="
              w-full px-4 py-3 
              bg-gray-100 hover:bg-gray-50 focus:bg-white
              text-gray-700 placeholder-gray-500
              rounded-full border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition-all duration-200
              cursor-pointer text-sm sm:text-base
            "
            readOnly
            onClick={handlePostStart}
          />
        </div>
      </div>
            {startPost && <div className='absolute top-0 left-0  h-screen w-screen'> <CreatePost/></div>}
      {/* Bottom actions */}
      {/* <div className="flex items-center justify-around sm:justify-start gap-2 sm:gap-4 px-2 sm:px-4 pb-3 border-t border-gray-100 mt-1">
        <ActionButton
          icon="/video.png"
          label="Video"
          color="text-blue-600"
        />
        <ActionButton
          icon="/gallry.png"
          label="Photo"
          color="text-green-600"
        />
        <ActionButton
          icon="/article.png"
          label="Write article"
          color="text-red-600"
          hideOnMobile={false}
        />
      </div> */}
    </div>
  );
}

// function ActionButton({ icon, label, color, hideOnMobile = false }) {
//   return (
//     <button
//       type="button"
//       className={`
//         flex items-center justify-center gap-2 
//         px-3 sm:px-5 py-2.5 
//         rounded-lg hover:bg-gray-100 active:bg-gray-200
//         transition-colors w-full sm:w-auto
//         ${hideOnMobile ? 'hidden sm:flex' : 'flex'}
//       `}
//     >
//       <img
//         src={icon}
//         alt={label}
//         className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
//       />
//       <span
//         className={`
//           text-xs sm:text-sm font-medium whitespace-nowrap
//           ${color || 'text-gray-700'}
//         `}
//       >
//         {label}
//       </span>
//     </button>
//   );
// }

export default StartPost;