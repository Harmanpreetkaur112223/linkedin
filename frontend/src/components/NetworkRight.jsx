import React, { useContext } from 'react'
import { useState } from 'react'
import { UserContextData } from '../context/UserProvider'
import PeopleCard from './PeopleCard'
function NetworkRight() {
     let [grow , setGrow] = useState(true)
     let [catchUp , setCatchUp] = useState(false)
     const {userData , setUserData}=useContext(UserContextData)
     const handleGrow = () =>{
        setGrow(true)
        setCatchUp(false)
     }
      const handleCatchUp = () =>{
       
        setCatchUp(true)
        setGrow(false)
     }
  return (
    <div className="h-min w-[55vw] flex flex-col gap-4">
        <div className='w-[100%] h-[10vh] bg-white rounded-lg shadow-lg flex gap-2 items-center '>
        <div className='ml-8 hover:bg-slate-200 focus:bg-slate-200 h-fit w-fit p-4 py-2 rounded-lg cursor-pointer' onClick={handleGrow}>
            Grow
        </div>
        <div className='ml-8 hover:bg-slate-200 focus:bg-slate-200 h-fit w-fit p-4 py-2 rounded-lg cursor-pointer' onClick={handleCatchUp}>
            Catch Up
        </div>

    </div>
        {grow  && <div className='h-min w-[55vw] flex flex-col gap-4'><div className='h-[30vh] w-full rounded-lg shadow-lg  bg-white'></div>
         <div className='h-fit py-4 px-4 w-full rounded-lg shadow-lg  bg-white flex flex-col gap-4'>
          
           <div className='text-[1.2vw] font-semibold flex flex-row justify-between'>
            People you may know from {userData.user.role === "student"? userData.user.studentProfile.collge : userData.user.recruiterProfile.companyName}

            </div>
            <div className='h-fit w-full flex flex-row flex-wrap gap-4'>
                <PeopleCard/>
                <PeopleCard/>
                <PeopleCard/>
                <PeopleCard/>
                <PeopleCard/>

            </div>
          
         </div>
         </div>}
         {catchUp && <div className='h-[100vh] w-full bg-white rounded-lg shadow-lg'></div>}
          {/* { (userData.user.studentProfile.college)&&  */}
           {/* } */}
    </div>
  )
}

export default NetworkRight