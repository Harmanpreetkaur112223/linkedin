import React, { useContext } from 'react'
import { UserContextData } from '../context/UserProvider'
import Navbar from '../components/Navbar'
import HomeSideBar from '../components/HomeSideBar'
import MainHome from '../components/MainHome'
import NewsBar from '../components/NewsBar'
import AddExperience from '../components/AddExperience'

function Home() {
    const {userData , addExperience} = useContext(UserContextData)
  return (
   <>
    <Navbar/>
   
    <div className='h-max w-full flex items-center lg:flex-row md:flex-row sm:flex-col justify-center bg-slate-100 z-index-1  '>
      <div className='h-max w-[80vw] bg-gray-200  flex lg:flex-row flex-col  relative  justify-around z-0 mt-[7vw] bg-slate-100 '>
      <div className=' w-full lg:w-[20%] h-[80vh]'><HomeSideBar/></div>
      <div className=' w-full lg:w-[50%] h-full  '><MainHome/></div>
      <div className=' w-full lg:w-[22%] h-full bg-white'><NewsBar/></div>
    </div>
    </div>
   </>
  )
}

export default Home