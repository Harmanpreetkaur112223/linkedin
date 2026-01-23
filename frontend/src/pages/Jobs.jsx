import React from 'react'
import Navbar from '../components/Navbar'
import ProfileCover from '../components/ProfileCover'
import SideBarJobs from '../components/SideBarJobs'
import JobsMain from '../components/JobsMain'

function Jobs() {
  return (
    <>
      <Navbar />
    <div className="bg-gray-100 min-h-screen w-full flex flex-row justify-center">

      <div className="w-[80%] px-4 l mx-auto flex gap-6 px-4 py-6">
        <div className='h-full w-[24%] px-4'>
           <ProfileCover/>
        </div>
       
        <div className='h-full w-[76%] '><JobsMain /></div>
      </div>
    </div>
    </>
  )
}

export default Jobs