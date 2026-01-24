import React, { useContext, useState } from 'react'
import { UserContextData } from '../context/UserProvider'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContextData } from '../context/AuthContext'

function AddExperience() {
  let{userData , setUserData ,isUserAbout,setIsUserAbout,isUserIntro,setIsUserIntro,isUserEducation,setIsUserEducation,isUserSkill,setIsUserSkill,isUserExperience,setIsUserExperience,addAbout , setAddAbout , addExperience , setAddExperience} = useContext(UserContextData)
    const {serverUrl} = useContext(AuthContextData)
    let navigate = useNavigate()
  let[title , setTitle] = useState("")
  let[companyName , setCompanyName] = useState("")
  let[experience , setExperience] = useState(0)
  let[employementType , setEmployementType] = useState("")

  const handleTitle = (e) =>{
    setTitle(e.target.value)
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    setIsUserExperience(true)
    try {
        const response = await axios.post(`${serverUrl}/api/user/editProfile`,{companyName,title,experience,employementType,isUserIntro,isUserAbout,isUserEducation,isUserExperience,isUserSkill},{withCredentials:true})
        setUserData(response.data)
        setIsUserExperience(false)
        console.log(userData)
        navigate("/profile")

    } catch (error) {
      console.log("user experiences",error)  
    }

  }
const handleExperience = () =>{
    setAddExperience(false)
}
  
  return (
     <div className='h-screen w-screen fixed top-0 left-0 z-index-[200] bg-black/20'  >
        <div className='h-full w-full   flex items-center justify-center relative'  >
            <div className='h-[80vh] w-[50vw] relative rounded-lg bg-white opacity-[2] p-4 overflow-auto' >
               <img src="/cut.png" alt="" className='h-[2.2vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-4 text-[1.1vw] top-[2%] rounded-[50%] ' onClick={handleExperience}/> 
                
                 <div className='h-[10vh] w-full   pl-4 pt-4 text-[1.4vw] font-bold'>Add Experience</div>
                <hr />
                <div className='h-[60vh] w-full  flex items-center justify-center '>
                    <div className='h-full w-[90%]  overflow-auto py-4'>
                        <form action="" className="h-full w-full px-2 flex flex-col gap-8">
                    <div className='h-fit w-full '>
                        <label htmlFor="title" className='mb-2 text-gray-700 '>Title*</label>
                        <input type="text" id='title' name='title' value = {title} 
                        onChange={handleTitle}
                        className='border h-fit w-full rounded-sm p-2 hover:outline'/>
                    </div>
                    <div className='h-fit w-full '>
                        <label htmlFor="employementType" className='mb-2 text-gray-700 '>Employment Type</label>
                        <input type="text" id='employementType' value = {employementType}  name='employementType'
                        onChange={(e)=>setEmployementType(e.target.value)}
                        className='border h-fit w-full rounded-sm p-2 hover:outline'/>
                    </div>
                    <div className='h-fit w-full '>
                        <label htmlFor="companyName" className='mb-2 text-gray-700 '>Company or Organisation*</label>
                        <input type="text" id='companyName'value = {companyName} 
                        onChange={(e)=>setCompanyName(e.target.value)}
                        name='companyName' className='border h-fit w-full rounded-sm p-2 hover:outline'/>
                    </div>
                     <div className='h-fit w-full '>
                        <label htmlFor="experience" className='mb-2 text-gray-700 '>Experience*</label>
                        <input type="number" id='experience' value={experience} 
                        onChange={(e)=>setExperience(e.target.value)}
                        name='experience' className='border h-fit w-full rounded-sm p-2 hover:outline'/>
                    </div>
                    
                </form>
                    </div>
                </div>
                <hr />
                <div className='h-[10vh] w-full flex items-center justify-end pr-8 text-[1.1vw] font-semibold'>
                <button className='h-fit w-fit bg-blue-600 text-white py-2 px-4 rounded-[18px] cursor-pointer hover:bg-blue-500' onClick={handleSubmit}>Save</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AddExperience