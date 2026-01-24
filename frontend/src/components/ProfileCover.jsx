import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContextData } from '../context/UserProvider'
import AddExperience from './AddExperience'

function ProfileCover() {
    const navigate = useNavigate()
    const {userData , setUserData , addExperience , setAddExperience} = useContext(UserContextData)
    console.log(userData)
    const handleExperience=()=>{
        setAddExperience(true)
        console.log("experience" , addExperience)
    }
  return (
    <>
    <div className=' flex flex-col h-[50%] shadow-md rounded-[10px] bg-white relative cursor-pointer  ' onClick={()=>navigate("/profile")}>
        <div className=' flex flex-col h-[25%] w-full   'onClick={()=>navigate("/profile")}  >
            <img src="img.jpeg" alt="" className='h-full rounded-tl-[10px] rounded-tr-[10px] cursor-pointer' />
        </div>
        <img src="profile.png" alt=" " className='absolute top-[30px] left-[10px] border-2 border-white cursor-pointer rounded-[50%] h-[4.7vw] ' />
        <div className=' flex justify-center items-center  h-[75%] w-full  ' >
            <div className=' h-[70%] w-[80%] mt-8 flex items-center flex-col cursor-pointer' >
                <p className='font-bold text-[1.4vw] cursor-pointer '>{userData.user.firstName} {userData.user.lastName}</p>
                <p className=' text-[0.9vw] cursor-pointer '>{userData.user.role === 'student'?`Student at ${ userData.user.education[0].college}`:`Working at ${userData.user?.recruiterProfile?.companyName}`} </p>
                {/* <p className='text-gray-400 cursor-pointer hover:text-black hover:underline text-[0.9vw] '>{userData.user.location}</p> */}
                {/* <button value="Experience">+ Experience</button> */}
               <Link className='border-1 mt-8 text-blue-500 font-semibold hover:text-blue-600 hover:border-2 hover:bg-blue-100 focus:bg-blue-500 hover:border-blue-600 focus:text-white h-fit w-fit border-blue-500 text-[1vw] px-2 py-1 rounded-[15px]' to="/profile/editIntro">Add profile section</Link>
               
            </div>
        </div>
    </div>
    </>
  )
}

export default ProfileCover