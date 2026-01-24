import React, { useContext } from 'react'
import { UserContextData } from '../context/UserProvider'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import CreatePost from '../components/CreatePost'
import AddIntro from '../components/AddIntro'

function Profile() {
  const {userData , setUserData , startPost , setStartPost , addIntro , setAddIntro} = useContext(UserContextData)
  const navigate = useNavigate()
  console.log(" from profile userData",userData.user)
  const handleIntro = () =>{
    setAddIntro(true)
    console.log("addIntro",addIntro)
  }
  return (
    <>
    <Navbar/>

    <div className='h-min border-1 px-[10vw] py-8 flex lg:flex-row flex-col  justify-around bg-slate-100 gap-8  '>
      <div className='w-[70%] h-full shadow-lg rounded-lg  flex flex-col'>
        <div className='w-full h-[80vh] bg-white rounded-lg mb-4 '>
          <div className='h-[40%] w-full cursor-pointer relative '>
            <img src="img.jpeg" alt="" className='h-full w-full rounded-tl-lg rounded-tr-lg ' />
             <img src="camera.png" alt="" className='h-[5vh] cursor-pointer absolute right-2 top-1 rounded-[50%]' />
            <img src="profile.png" alt="" className='h-[10vw]  rounded-tl-lg rounded-tr-lg absolute top-[50%] left-[2%] cursor-pointer' />


          <div className='min-h-[50%] w-full  mt-8 flex justify-between items-center relative'>
          <div className='w-[full]  h-full pl-4'>
             <img src="edit-text.png" alt="" onClick = {()=>navigate("/profile/editIntro")} className='h-[2.6vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-1 top-1 rounded-[50%]' />
            <div className='text-[1.7vw] font-bold '>{userData.user.firstName} {userData.user.lastName}</div>
            <div>{userData.user.role === "student"? `Student at ${ userData.user.education[0].college}`:`Working at ${userData.user?.recruiterProfile?.companyName}`}</div>
            <div>{userData.user.location} <span><Link className='text-blue-500 font-semibold cursor-pointer'>Contact info</Link></span></div>
            {/* <div>{userData.user.userName}</div> */}
          </div>
          <div className='w-[50%] h-full  font-semibold text-[1.1vw]'> {userData.user.role === "student"?`Student at ${ userData.user.education[0].college}`:`Working at ${userData.user?.recruiterProfile?.companyName}`}</div>
          </div>
          <div className='h-[30%] w-[70%] flex flex-row gap-8 pl-4 py-1  mt-1  items-center'>
            {/* <Link className='border-1 text-blue-500 font-semibold hover:text-blue-600 hover:border-2 hover:bg-blue-100 focus:bg-blue-500 hover:border-blue-600 focus:text-white h-fit w-fit border-blue-500 text-[1vw] px-2 py-1 rounded-[15px]'>Open to</Link> */}
            <Link className='border-1 text-blue-500 font-semibold hover:text-blue-600 hover:border-2 hover:bg-blue-100 focus:bg-blue-500 hover:border-blue-600 focus:text-white h-fit w-fit border-blue-500 text-[1vw] px-2 py-1 rounded-[15px]' to="/profile/addSection">Add profile section</Link>
            {/* <Link className='border-1 text-blue-500 font-semibold hover:text-blue-600 hover:border-2 hover:bg-blue-100 focus:bg-blue-500 hover:border-blue-600 focus:text-white h-fit w-fit border-blue-500 text-[1vw] px-2 py-1 rounded-[15px]'>Enhance Profile</Link> */}
            {/* <Link className='border-1 text-blue-500 font-semibold hover:text-blue-600 hover:border-2 hover:bg-blue-100 focus:bg-blue-500 hover:border-blue-600 focus:text-white h-fit w-fit border-blue-500 text-[1vw] px-2 py-1 rounded-[15px]'>Resources</Link> */}
          </div>
          <div className='h-[35%] w-full p-1  mt-1 flex flex-row gap-2 '>
             <div className='h-full w-[50%] rounded-lg bg-blue-100 relative '>
              
               <img src="edit-text.png"  alt="" className='h-[2.6vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-2 top-[14%] rounded-[50%]' />
             </div>
             <div className='h-full w-[50%] rounded-lg shadow-sm shadow-black relative'>
               <img src="cut.png" alt="" className='h-[2.2vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-2 top-[14%] rounded-[50%]' />
             </div>

          </div>

          </div>
         
        </div>
        <div className='w-full h-[45vh] bg-white rounded-lg mb-4 p-2 flex flex-col gap-2 justify-around'>
          <div className='text-[1.5vw] font-semibold pl-4 '>Suggested for you</div>
          <div className='w-full h-min p-1  flex flex-row gap-1'>
            <img src="veye.png" alt="" className='h-[2.2vw] p-2 cursor-pointer inline-block rounded-[50%]' />
            <div className='text-[1.1vw] text-gray-800 '>Private to you</div>
          </div>
          <div className='flex lg:flex-row flex-col gap-2  justify-around h-[70%] w-full'>
             <div className='w-[45%] ml-4 shadow-sm shadow-black rounded-lg h-full mb-4 relative'>
             <img src="cut.png" alt="" className='h-[2.2vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-2 top-[6%] rounded-[50%]' />
          </div>
          <div className='w-[45%] mr-4 shadow-sm shadow-black rounded-lg h-full mb-4 relative'>
             <img src="cut.png" alt="" className='h-[2.2vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-2 top-[6%] rounded-[50%]' />
          </div>
          </div>
         

        </div>
        <div className='w-full h-[45vh] bg-white rounded-lg mb-4  pt-2 flex flex-col gap-2 justify-around'>
           <div>
            <div className='text-[1.5vw] font-semibold pl-4 '>Suggested for you</div>
          <div className='w-full h-min p-1  flex flex-row gap-1'>
            <img src="veye.png" alt="" className='h-[2.2vw] p-2 cursor-pointer inline-block rounded-[50%]' />
            <div className='text-[1.1vw] text-gray-800 '>Private to you</div>
          </div>
           </div>
           <div className='h-[50%] w-full  flex flex-row gap-2 justify-between'>
            <div className='h-full w-[33.3%]    flex justify-center items-center'>a</div>
             <div className='h-full w-[33.3%]   flex justify-center items-center '>b</div>
              <div className='h-full w-[33.3%]  flex justify-center items-center  '>c</div>
           </div>
           <div className='h-min mb-0 bg-gray-100 hover:bg-gray-200 flex cursor-pointer text-[1.1vw] font-semibold justify-center items-center pt-4 pb-2'>
            <div>
              Show all analytics
              
            </div>
            <img src="like.png" alt=""  className='h-[1.5vw] p-1'/>
           </div>
        </div>
        <div className='w-full h-[30vh] bg-white rounded-lg mb-4 relative   pt-2 flex flex-col gap-2 justify-around'>
            <div>
            <div className='text-[1.5vw] font-semibold pl-4 '>Suggested for you</div>
          <div className='w-full h-min p-1  flex flex-row gap-1'>
            <img src="veye.png" alt="" className='h-[2.2vw] p-2 cursor-pointer inline-block rounded-[50%]' />
            <div className='text-[1.1vw] text-gray-800 '>Private to you</div>
          </div>
           </div>
           <div>
            You haven’t posted yet
      Posts you share will be displayed here
           </div>
           <img src="edit-text.png" alt="" className='h-[2.6vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-2 top-[14%] rounded-[50%]' />
            <Link to = "/profile" className='border-1 text-blue-500 font-semibold hover:text-blue-600 hover:border-2 hover:bg-blue-100 fhover:border-blue-600  h-fit w-fit border-blue-500 text-[1vw] px-2 py-1 rounded-[15px] absolute top-[14%] right-[50px] ' onClick={()=>setStartPost(true)}>Create Post</Link>
            {startPost && <CreatePost/>}
            <div className='h-min mb-0 bg-gray-100 hover:bg-gray-200 flex cursor-pointer text-[1.1vw] font-semibold justify-center items-center pt-4 pb-2'>
            <div>
              Show all activity
              
            </div>
            <img src="like.png" alt=""  className='h-[1.5vw] p-1'/>
           </div>
        </div>
        <div className='w-full h-[30vh] bg-white rounded-lg mb-4'></div>
        <div className='w-full h-[30vh] bg-white rounded-lg mb-4'></div>
        <div className='w-full h-[40vh] bg-white rounded-lg mb-4'></div>


      </div>
      <div className='w-[25%] h-[12vw] shadow-lg  rounded-lg  bg-white flex flex-col gap-4 py-4 px-4'>
        <div className='h-[48%] w-full relative'>
          <div className='text-[1.2vw] font-bold'>Profile Language</div>
          <div>English</div>
          <img src="edit-text.png" alt="" className='h-[2.6vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-2 top-[14%] rounded-[50%]' />
        </div>
        <hr />
        <div className='h-[48%] w-full relative '>
          <div className='text-[1.2vw] font-bold'>Public profile and URL</div>
          <img src="edit-text.png" alt="" className='h-[2.6vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-2 top-[14%] rounded-[50%]' />
        </div>
      </div>


    </div>
    </>
  )
}

export default Profile