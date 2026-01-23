import React, { useContext } from 'react'
import { UserContextData } from '../context/UserProvider'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import AddExperience from './AddExperience'
import AddEducation from './AddEducation'
import AddSkills from './AddSkills'
import AddAbout from './AddAbout'

function AddIntro() {
    const {addExperience,setAddExperience , addEducation,setAddEducation , addSkills, setAddSkills , addAbout, setAddAbout ,addIntro , setAddIntro }=useContext(UserContextData)
  return (
   <>
    <Navbar/>
    {addExperience && <AddExperience/>}
     {addEducation && <AddEducation/>}
     {addSkills && <AddSkills   />}
     
     {addAbout && <AddAbout/>}
     <div className='h-screen w-full  bg-slate-100 border-1 flex flex-row py-4 justify-center '>
        <div className='h-min w-[70%] bg-white rounded-lg shadow-lg py-8 px-[3vw]'>
            <div className='h-[10%] w-full  p-2 text-[1.9vw] font-bold  '>Add to profile</div>
            <hr />
           <div className='h-[90%] w-full px-[3vw] '>
             <div className=' h-full w-full mt-4  flex flex-col gap-[1vw] '>
                <Link className='p-2 py-4 h-fit w-full cursor-pointer hover:bg-slate-100 my-1 text-gray-600' onClick={()=>setAddAbout(true)}>Add About</Link>
                <hr />
                <Link className='p-2 py-4 h-fit w-full cursor-pointer hover:bg-slate-100 my-1 text-gray-600' onClick={()=>setAddEducation(true)}>Add Education</Link>
                <hr />
                <Link className='p-2 py-4 h-fit w-full cursor-pointer hover:bg-slate-100 my-1 text-gray-600'onClick={()=>setAddSkills(true)}>Add Skills</Link>
                <hr />
                <Link className='p-2 py-4 h-fit w-full cursor-pointer hover:bg-slate-100 my-1 text-gray-600'onClick={()=>setAddExperience(true)}>Add Position</Link>
                
            </div>
           </div>
        </div>
     </div>
   </>
  )
}

export default AddIntro