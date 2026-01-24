

    import React, { useContext, useState } from 'react'
import { UserContextData } from '../context/UserProvider'
import { AuthContextData } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
    
    function AddAbout() {
        const {userData , setUserData ,isUserAbout,setIsUserAbout,isUserIntro,setIsUserIntro,isUserEducation,setIsUserEducation,isUserSkill,setIsUserSkill,isUserExperience,setIsUserExperience,addAbout , setAddAbout} = useContext(UserContextData)
        const {serverUrl} = useContext(AuthContextData)
        let[about , setUserAbout] = useState(userData.user?.about || "")
        const navigate = useNavigate()
        const handleChange = (e)=>{
            e.preventDefault()
            e.stopPropagation()
            setUserAbout(e.target.value)
            console.log("handle cchange")
        }
        const handleAbout=(e)=>{
            e.preventDefault()
            console.log("handle About")
            e.stopPropagation()
            setAddAbout(false)
        }
        const handleSubmit=async(e)=>{
            e.preventDefault()
            try {
                setIsUserAbout(true)
                const response = await axios.post(`${serverUrl}/api/user/editProfile`,{about , isUserAbout,isUserEducation,isUserSkill,isUserIntro,isUserExperience},{withCredentials:true})
                setUserData(response.data)
                console.log("about addes",userData)
                setIsUserAbout(false)
                setUserAbout("")
                navigate("/profile")
            } catch (error) {
                console.log("about added err",error.response?.data?.message)

            }
        }
      return (
         <div className='h-screen w-screen fixed top-0 left-0 z-index-[200] bg-black/20' >
        <div className='h-full w-full   flex items-center justify-center 'onClick={handleAbout} >
            <div className='h-[80vh] w-[50vw] relative rounded-lg bg-white opacity-[2] p-4 flex flex-col  ' onClick={(e)=>e.stopPropagation()}>
                <div className='h-[20px] w-[20px] cursor-pointer  rounded-lg absolute top-4 right-4'>
                <img src="/cut.png" alt="" className=' ' onClick={handleAbout} />        
                </div>
                <div className='h-[10vh] w-full   pl-4 pt-4 text-[1.4vw] font-bold'>Edit About</div>
                <hr />
                <div className='h-[60vh] w-full  flex items-center justify-center ' onClick={(e)=>e.stopPropagation()}> 
                    <div className='h-full w-[90%]  overflow-auto py-4' onClick={(e)=>e.stopPropagation()}>
                        <textarea autoComplete = 'off' value={about} onChange={handleChange} name="about" id="about" cols="auto" className='h-[50vh] py-4 px-8 text-[1.3vw] text-gray-600 w-full border rounded-lg' placeholder='write anything about your experiences...'></textarea>
                    </div>
                </div>
                <hr />
                <div className='h-[10vh] w-full flex items-center justify-end pr-8 text-[1.1vw] font-semibold' onClick={handleSubmit}>
                <button className='h-fit w-fit bg-blue-600 text-white py-2 px-4 rounded-[18px] cursor-pointer hover:bg-blue-500'onClick={handleSubmit} >Save</button>

                </div>

            </div>
        </div>
    </div>
      )
    }
    
    export default AddAbout