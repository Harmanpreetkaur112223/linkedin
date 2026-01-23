import React from 'react'
// import Profile from './Profile'
import Card from './Card'
import Additional from './Additional'
import ProfileCover from './ProfileCover'

function HomeSideBar() {
  return (
    <>
   <div className=' h-full flex flex-col gap-[2vh] '>
     <ProfileCover/>
     <Card/>
     <Card/>
    <Additional/>

   </div>
    </>
  )
}

export default HomeSideBar