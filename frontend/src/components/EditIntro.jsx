import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import { UserContextData } from '../context/UserProvider'
import { AuthContextData } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function EditIntro() {
    let{userData , setUserData ,isUserAbout,setIsUserAbout,isUserIntro,setIsUserIntro,isUserEducation,setIsUserEducation,isUserSkill,setIsUserSkill,isUserExperience,setIsUserExperience} = useContext(UserContextData)
    let navigate = useNavigate()
    let{serverUrl} = useContext(AuthContextData)
    let[firstName , setFirstName] = useState(userData.user?.firstName || "")
    let[lastName , setLastName] = useState(userData.user?.lastName || "")
    let[additionalName , setAdditionalName] = useState(userData.user?.additionalName || "")
    let[email , setEmail] = useState(userData.user?.email || "")
    let[headline , setHeadline] = useState(userData.user?.headline || "")
    let[location  , setLocation ] = useState(userData.user?.location  || "")



    const handleUpdateSubmit = async(e)=>{
            e.preventDefault()
        try {
            setIsUserIntro(true)
            console.log({serverUrl})
           const response =  await axios.post(`${serverUrl}/api/user/editProfile`,{
                firstName,lastName,additionalName,email,headline,location,isUserIntro,isUserAbout,isUserEducation,isUserSkill,isUserExperience
            },{withCredentials:true})
            setUserData(response.data)
            setIsUserIntro(false)
            console.log("Editted data",userData)
            navigate("/profile")
            
        } catch (error) {
             const message =
        error.response?.data?.message ||
        "edit failed. Please check your credentials.";
      
      console.error("Edit profile error:", message);
        }
    }

  return (
    <>
    <Navbar/>
    <div className="h-screen w-screen bg-slate-100 flex items-center justify-center">
        <div className='w-[60%]  h-[80%]   bg-white flex shadow-lg shadow-gray-700 flex-col items-center  justify-center rounded-lg'>
               
            <div className='h-[10%]  w-full flex items-center text-[1.4vw] font-semibold pl-4'>Edit Intro  </div> <hr />
            <div className="h-[80%] w-[90%]  rounded-lg  overflow-auto ">
                <form  className="h-full w-full px-2 flex flex-col gap-8" >
                    <div className='h-fit w-full '>
                        <label htmlFor="firstName" className='mb-2 text-gray-700 '>First name*</label>
                        <input type="text" id='firstName' name='firstName' className='border h-fit w-full rounded-sm p-2 hover:outline' value={firstName} required autoComplete='off' onChange={(e)=>setFirstName(e.target.value)}/>
                    </div>
                    <div className='h-fit w-full '>
                        <label htmlFor="lastName" className='mb-2 text-gray-700 '>Last name*</label>
                        <input type="text" id='lastName' name='lastName' className='border h-fit w-full rounded-sm p-2 hover:outline'value={lastName} required autoComplete='off' onChange={(e)=>setLastName(e.target.value)}/>
                    </div>
                    <div className='h-fit w-full '>
                        <label htmlFor="additionalName" className='mb-2 text-gray-700 '>Additional name</label>
                        <input type="text" id='additionalName' name='additionalName' className='border h-fit w-full rounded-sm p-2 hover:outline' value={additionalName} onChange={(e)=>setAdditionalName(e.target.value)}/>
                    </div>
                     <div className='h-fit w-full '>
                        <label htmlFor="email" className='mb-2 text-gray-700 '>email*</label>
                        <input type="email" id='email' name='email' className='border h-fit w-full rounded-sm p-2 hover:outline' value={email} required autoComplete='off ' onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                     <div className='h-fit w-full '>
                        <label htmlFor="headline" className='mb-2 text-gray-700 '>Headline*</label>
                        <input type="text" id='headline' name='headline' className='border h-fit w-full rounded-sm p-2 hover:outline' value={userData.user.role === 'student'?`Student at ${userData.user.education[0].college}`:`Working at ${userData.user.recruiterProfile.companyName}`} required autoComplete='off' onChange={(e)=>setHeadline(e.target.value)}/>
                    </div>
                     <div className='h-fit w-full '>
                        <label htmlFor="location" className='mb-2 text-gray-700 '>Location</label>
                        <input type="text" id='location' name='location' className='border h-fit w-full rounded-sm p-2 hover:outline' value={location} autoComplete='off' onChange={(e)=>setLocation(e.target.value)}/>
                    </div>
                </form>
            </div>
            <hr />
            <div className='h-[10%]  w-full flex items-center justify-end pr-8 text-[1.1vw] font-semibold '>
                <button className='h-fit w-fit bg-blue-600 text-white py-2 px-4 rounded-[18px] cursor-pointer hover:bg-blue-500' onClick={handleUpdateSubmit}>Save</button>
            </div>

        </div>
    </div>
    </>
  )
}

export default EditIntro