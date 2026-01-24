
    import React, { useContext, useState } from 'react'
import { UserContextData } from '../context/UserProvider'
import { AuthContextData } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
    
    function AddSkills() {
        let {addSkills , setAddSkills , userData , setUserData , isUserAbout,setIsUserAbout,isUserIntro,setIsUserIntro,isUserEducation,setIsUserEducation,isUserSkill,setIsUserSkill,isUserExperience,setIsUserExperience,addAbout , setAddAbout} = useContext(UserContextData)
        const {serverUrl} = useContext(AuthContextData)
        const navigate = useNavigate()
        let[skills , setSkills] = useState(userData.user?.skills || [])
        console.log(skills)
        let[skill , setSkill] = useState("")

        const handleAdd =  (e) =>{
            e.preventDefault()
            setSkills([...skills , skill])
            setSkill("")
        }
        const handleSave = async(e) =>{
            e.preventDefault()
            setIsUserSkill(true)
            try {
                const response = await axios.post(`${serverUrl}/api/user/editProfile`,{skills,isUserIntro,isUserAbout,isUserEducation,isUserExperience,isUserSkill},{withCredentials:true})
                setUserData(response.data)
                setIsUserSkill(false)
                console.log(userData)
                navigate("/profile")

            } catch (error) {
                console.log("Add skill err",error.message)
            }

        }
        const handleSkill = (e)=>{
            setSkill(e.target.value)
        }

      return (
         <div className='h-screen w-screen fixed top-0 left-0 z-index-[200] bg-black/20'  >
        <div className='h-full w-full   flex items-center justify-center relative'  >
            <div className='h-[60vh] w-[50vw] relative rounded-lg bg-white opacity-[2] p-4 py-8 '>
                <img src="/cut.png" alt="" className='h-[2.2vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-4 text-[1.1vw] top-[2%] rounded-[50%] ' onClick={()=>setAddSkills(false)}/> 
                 <div className='h-[9vh] w-full   pl-4 pt-4 text-[1.4vw] font-bold '>Add Skills</div>
                <hr />
                <div className='h-[38vh] w-full  flex items-center flex-col justify-center  pt-8 pb-8'>
                     <form action="" className="h-full w-full px-2 flex flex-col gap-8">
                    <div className='h-full w-[80%] mb-8  flex flex-row items-center justify-around'>
                        <div className='h-full w-[70%] py-4 flex flex-col gap-2 '><label htmlFor="skill" className='mb-2 text-gray-700 '>Skill*</label>
                        <input type="text" id='skill' name='skill' className=' border h-fit w-[70%] rounded-sm p-2 mb-4 hover:outline' placeholder='Type your skills...' onChange={handleSkill} value={skill} autoComplete='off'/></div>
                        <button className='h-fit w-fit bg-blue-600  text-white py-2 px-4 rounded-[18px] cursor-pointer hover:bg-blue-500' onClick={handleAdd}>Add</button>
                    </div>
                    </form>
                    <div className='h-[10vw] w-full flex item-center justify-start pl-2 pr-2 overflow-auto'>
                        <div className='h-[12%] w-[60%] flex flex-row flex-wrap gap-2  '>
                    {skills.map((item , index)=>
                    <div key={index} className='w-fit h-fit py-2 px-4 flex flex-row items-center gap-4 border rounded-lg' >
                        <div className='h-full w-fit mr-8  rounded -lg  cursor-pointer text-[1.1vw] font-semibold '>{item}</div>
                        <div className='h-full w-fit flex items-center justify-end rounded-lg '><img src="/cut.png" alt="" className='h-[2.2vw] rounded-full hover:bg-gray-100 cursor-pointer p-2 text-black' /></div>
                    </div>
                    )}
                    </div>
                    </div>
                </div>
                <hr />
                 <div className='h-[8vh] w-full flex items-center justify-end pr-8 text-[1.1vw] font-semibold'>
                <button className='h-fit w-fit bg-blue-600 text-white py-2 px-4 rounded-[18px] cursor-pointer hover:bg-blue-500' onClick={handleSave}>Save</button>
                    
                 </div>

            </div>
        </div>
    </div>
      )
    }
    
    export default AddSkills