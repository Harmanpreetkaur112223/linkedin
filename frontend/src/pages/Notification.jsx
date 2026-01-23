import React from 'react'
import Navbar from '../components/Navbar'
import SideBarJobs from '../components/SideBarJobs'
import JobsMain from '../components/JobsMain'
import NotificationFeed from '../components/NotificationFeed'
import RightFooter from '../components/RightFooter'
import ProfileCover from '../components/ProfileCover'

function Notification() {
  return (
  <>
      <Navbar />
    <div className="bg-gray-100 min-h-screen w-full flex flex-row justify-center">

      <div className="w-[80%] px-4 l mx-auto flex gap-6 px-4 py-6 mt-4">
        <div className='h-full w-[24%] px-4'>
           <ProfileCover/>
        </div>
       
        <div className='h-full w-[57%] '><NotificationFeed/></div>
        <div className='h-full w-[18%] mt-[10%]'><RightFooter/></div>
      </div>
    </div>
    </>
  )
}

export default Notification