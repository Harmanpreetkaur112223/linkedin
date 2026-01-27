// import React from 'react'

// function Post() {
//   return (
//     <>
//     <div className='h-max w-full shadow-lg rounded-lg mt-4  p-2 flex flex-col gap-1 mb-4 bg-white' >
//       <div className='h-max w-full  flex flex-row justify-between'>
//         <div className=' h-full text-[0.89vw] text-gray-700' >Suggested</div>
//         <div className='h-full flex flex-row gap-1 '>
//           <img src="menu.png" alt="" className='h-[5vh] cursor-pointer rounded-[50%] hover:bg-slate-100 '/>
//           <img src="cut.png" alt="" className='h-[5vh] p-2 cursor-pointer rounded-[50%] hover:bg-slate-100 ' />
//         </div>
//       </div>
//       <hr />
//       <div className='h-[10%]  w-full  flex flex-row justify-between'>
//         <div className='h-full  flex flex-row gap-1 items-center w-[50%]'>
//           <img src="profile.png" alt=""className='h-[11vh] cursor-pointer p-2' />
//           <div>
//             <h3 className='text-[1.2vw] text-black cursor-pointer hover:text-blue-800 font-semibold hover:underline '>Abc singh</h3>
//             <p className='text-[0.8vw] text-gray-700 cursor-pointer '>Student at Anc</p>
//             <p className='text-[0.8vw] text-gray-700 cursor-pointer '>Time.</p>
//           </div>
//         </div>
//         <div className='text-blue-600  font-extrabold hover:bg-blue-100 p-4 h-[60%] flex items-center justify-center mt-2 mr-2 rounded-lg cursor-pointer'>+ follow</div>
//       </div>
//       <div className='h-fit p-2 '>
//         <p className='h-fit text-[0.9vw]'>Proud to showcase the inspiring journey of our student Dheeraj Khetwal (B.Tech CSE, 2nd Year) ✨

//         From national-level hackathons to leadership as a Google Student Ambassador, his experience at Amrapali University reflects innovation, confidence, and readiness for real-world challenges. 🚀🎓
//           Proud to showcase the inspiring journey of our student Dheeraj Khetwal (B.Tech CSE, 2nd Year) ✨ From national-level hackathons to leadership as a Google Student Ambassador, his experience at Amrapali University reflects innovation, confidence, and readiness for real-world challenges. 🚀🎓
//         </p>
        
//       </div>
//       <div className='h-full w-full p-2'>
//         <p className='text-blue-800 cursor-pointer hover:underline'>
//           #AmrapaliUniversity hashtag #StudentTestimonial hashtag#StudentSuccess hashtag#BTechCSE hashtag#FutureInnovators hashtag#GoogleStudentAmbassador hashtag#HackathonJourney hashtag#VibeCode hashtag#StartupUttarakhand hashtag#DevFest hashtag#InnovationMindset hashtag#TechLeaders hashtag#CampusToCorporate
//         </p>
//       </div>
//       <div className='h-full w-full '>
//         <img src="wallpaper.jpg" alt="" className='h-full w-full ' />
//       </div>

       
//         <div className='h-[8%] w-full flex flex-row justify-around  '>
//             <div className=' cursor-pointer   w-full flex items-center justify-center '>
//                 <div className='rounded-md p-4 h-[94%] w-fit flex items-center justify-center flex-row gap-[1vh] hover:bg-slate-100'>
//                 <img src="like.png" alt=""  className='h-[4vh]'/>
//                 <span className='text-[0.9vw] font-semibold '>Like</span>
//                 </div>
//             </div>
//            <div className=' cursor-pointer   w-full flex items-center justify-center '>
//                 <div className='rounded-md p-4 h-[96%] w-fit flex items-center justify-center flex-row gap-[1vh] hover:bg-slate-100'>
//                 <img src="comment.png" alt=""  className='h-[4vh]'/>
//                 <span className='text-[0.9vw] font-semibold '>Comment</span>
//                 </div>
//             </div>
//            <div className=' cursor-pointer   w-full flex items-center justify-center '>
//                 <div className='rounded-md p-4 h-[96%] w-fit flex items-center justify-center flex-row gap-[1vh] hover:bg-slate-100'>
//                 <img src="repost.png" alt=""  className='h-[4vh]'/>
//                 <span className='text-[0.9vw] font-semibold '>Repost</span>
//                 </div>
//             </div>
//              <div className=' cursor-pointer   w-full flex items-center justify-center '>
//                 <div className='rounded-md p-4 h-[96%] w-fit flex items-center justify-center flex-row gap-[1vh] hover:bg-slate-100'>
//                 <img src="send.png" alt=""  className='h-[4vh]'/>
//                 <span className='text-[0.9vw] font-semibold '>Send</span>
//                 </div>
//             </div>
//         </div>
//     </div>
    
//     </>
//   )
// }

// export default Post
import React from 'react';

function Post({user,description,postImage,likes,comments}) {
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
            src="profile.png"
            alt="profile"
            className="h-12 w-12 sm:h-14 sm:w-14 rounded-full cursor-pointer object-cover"
          />
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-black cursor-pointer hover:text-blue-800 hover:underline truncate">
              {user.firstName} {user.lastName}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 cursor-pointer truncate">
              {user.role === "student" ? `Student at ${user?.education[0]['college']}`:`Working as ${user.workProfile?.title} at ${user?.workProfile?.companyName}`}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 cursor-pointer">Time.</p>
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
          #AmrapaliUniversity #StudentTestimonial #StudentSuccess #BTechCSE #FutureInnovators #GoogleStudentAmbassador #HackathonJourney #VibeCode #StartupUttarakhand #DevFest #InnovationMindset #TechLeaders #CampusToCorporate
        </p>
      </div>

      {/* Image */}
      {postImage && <div className="mt-1">
        <img
          src={postImage || null}
          alt="post content"
          className="w-full h-auto rounded-lg object-cover max-h-[500px]"
        />
      </div>}

      {/* Action buttons */}
      <div className="flex items-center justify-around border-t border-gray-200 pt-2 mt-1">
        <ActionItem icon="like.png" label={likes.length} />
        <ActionItem icon="comment.png" label={comments.length} />
        {/* <ActionItem icon="repost.png" label="Repost" />
        <ActionItem icon="send.png" label="Send" /> */}
      </div>
    </div>
  );
}

function ActionItem({ icon, label }) {
  return (
    <button className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition">
      <img src={icon} alt={label} className="h-5 w-3 sm:h-6 sm:w-6" />
      <span className="text-xs sm:text-sm font-medium text-gray-700">{label}</span>
    </button>
  );
}

export default Post;