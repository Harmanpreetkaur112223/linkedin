// import React from 'react'
// import {Link} from "react-router-dom"
// function Navbar() {
//   return (
//     <>
//     <div className='w-full h-[4.8vw] shadow-lg shadow-black-900 flex justify-between fixed z-1 bg-white'>
//       <div className=' w-[35%] flex justify-center gap-[0.5vw] items-center'>
//          <div className="h-[6vh] p-1 ">
//           <img src="linkedin.png" alt="" className='h-full' />
//          </div>
//          <div className=" h-full w-[70%] flex items-center  justify-around ">
//           <form action="" className="lg:h-[65%] w-[80%] relative border-1 flex justify-around items-center rounded-[18px] sm:hidden">
           
//               <img src="search.png" alt="" className=' absolute left-4 t-4 h-[20px]  '/>
            
         
           
//             <input autoComplete='off' type="search" name="search" id="search" placeholder='search' className=' h-[70%] outline-none rounded-md p-1 ' >
           

//             </input>
//           </form>
//          </div>
//         </div>
//       <div className=' w-[65%] flex items-center flex-row'>
        
//         <div className='w-[60%] border-r border-black-900 h-full flex'>
//           <div className='h-full p-2 flex flex-col items-center  w-fit mr-8'>
//             <img src="/home.png" alt=""  className='grayscale h-[55%]  w-[80%] cursor-pointer '/>
//             <Link to="/" className='hover:text-blue-900 text-gray-500 font-semibold text-[0.7vw]'>Home</Link>
//           </div>
//           <div className='h-full p-2 flex flex-col items-center  w-fit mr-8'>
//             <img src="/teamwork.png" alt=""  className='h-[55%] text-gray-500 w-[70%] cursor-pointer '/>
//             <Link to="/" className='hover:text-blue-900 text-gray-500 font-semibold text-[0.7vw]'>Network</Link>
//           </div>
//           <div className='h-full p-2 flex flex-col items-center  w-fit mr-8'>
//             <img src="/cooperation.png" alt=""  className='h-[55%] text-gray-500 w-[70%] cursor-pointer '/>
//             <Link to="/" className='hover:text-blue-900 text-gray-500 font-semibold text-[0.7vw]'>Jobs</Link>
//           </div>
//           <div className='h-full  p-4 flex flex-col items-center  w-fit mr-8 '>
//             <img src="/messaging.png" alt=""  className='h-[65%] text-gray-500 w-[45%] cursor-pointer '/>
//             <Link to="/" className='hover:text-blue-900 text-gray-500 font-semibold text-[0.7vw]'>Messaging</Link>
//           </div>
//           <div className='h-full p-2 flex flex-col items-center  w-fit mr-8'>
//             <img src="/notification.png" alt=""  className='h-[55%] text-gray-500 w-[45%] cursor-pointer '/>
//             <Link to="/" className='hover:text-blue-900 text-gray-500 font-semibold text-[0.7vw]'>Notifications</Link>
//           </div>
//           <div className='h-full p-2 flex flex-col items-center  w-fit mr-8'>
//             <img src="/profile.png" alt=""  className='h-[55%] text-gray-500 w-[100%] cursor-pointer '/>
//             <Link to="/" className='hover:text-blue-900 text-gray-500 font-semibold text-[0.7vw]'>Me</Link>
//           </div>
//         </div>
//         <div className='w-[40%]  h-full flex '>
//           <div className='h-full p-2 flex flex-col items-center ml-8  w-fit mr-8'>
//             <img src="/profile.png" alt=""  className='h-[55%] text-gray-500 w-[100%] cursor-pointer '/>
//             <Link to="/" className='hover:text-blue-900 text-gray-500 font-semibold text-[0.7vw]'>Me</Link>
//           </div>
//           <div className='h-full p-2 flex flex-col items-center  w-fit mr-8'>
//             <img src="/profile.png" alt=""  className='h-[55%] text-gray-500 w-[100%] cursor-pointer '/>
//             <Link to="/" className='hover:text-blue-900 text-gray-500 font-semibold text-[0.7vw]'>Me</Link>
//           </div>
//         </div>
//       </div>

//     </div>
//     </>
//   )
// }

// export default Navbar

import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProfilePopUp from './ProfilePopUp';
import axios from "axios"
import { AuthContextData } from '../context/AuthContext';
import { UserContextData } from '../context/UserProvider';
function Navbar() {
  let [showProfile , setShowProfile] = useState(false)
  const {serverUrl} = useContext(AuthContextData)
  const {userData , setUserData} = useContext(UserContextData)
  let [openSearch , setOpenSearch] = useState(false)
  console.log("showProfile",showProfile)
  const navigate = useNavigate()

  const handleShowProfile=()=>{
    setShowProfile(prev => !prev)
  }
  function handleOpenSearch() {
    setOpenSearch((prev) => !prev)
    console.log("Open search",openSearch)
  }
  const handleSignOut=async()=>{
    try {
      const response = await axios.get(`${serverUrl}/api/auth/logout`,{withCredentials:true})
       setUserData(null)
      console.log(response.data.message)
    } catch (error) {
      console.log("logout error" , error?.response?.data?.message)
    }
  }
  const handleProfilePage=()=>{
    navigate("/profile")
  }
  return (
    <nav className="fixed top-0 relative left-0 right-0 z-50 h-14 md:h-16 bg-white shadow-md border-b border-gray-200">
      <div className="mx-auto px-3 md:px-4 lg:px-6 max-w-[1920px] h-full flex items-center justify-between">
        
        {/* Left section - Logo + Search */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0">
            <img 
              src="/linkedin.png" 
              alt="LinkedIn" 
              className="w-full h-full object-contain" 
            />
          </div>

          {/* Search bar - hidden on mobile, appears from md+ */}
          <div className="sm:hidden md:block relative w-56 lg:w-72 xl:w-80">
            <input
              type="search"
              placeholder="Search"
              id='search'
              autoComplete="off"
              className={`w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus-ring-2 focus:ring-black-500 focus:bg-slate-100 transition`}
              
            />
            <img
              src="/search.png"
              alt="search"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60"
             
            />
          </div>
        </div>

        {/* Right section - Icons */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6">
          {/* Mobile search icon (only visible < md) */}
          <button className="md:hidden p-2 rounded-full hover:bg-gray-100">
            <img src="/search.png" alt="search" className="w-6 h-6 opacity-70"  onClick={handleOpenSearch} />
            
          </button>

          {/* Navigation icons */}
          <NavItem icon="/home.png" label="Home" to="/" />
          <NavItem icon="/teamwork.png" label="Network" to="/network" />
          <NavItem icon="/cooperation.png" label="Jobs" to="/jobs" />
          <NavItem icon="/messaging.png" label="Messaging" to="/messaging" />
          <NavItem icon="/notification.png" label="Notifications" to="/notifications" />

          {/* Me / Profile (with dropdown trigger) */}
         
          <div
      
      className={`flex flex-col items-center px-1.5 py-1 md:px-2 lg:px-3 group `}
       onClick={handleShowProfile}
    >
      <img
        src="/profile.png"
        alt="Me"
        className="h-6 w-6 md:h-7 md:w-7 opacity-60 group-hover:opacity-100 transition-opacity object-contain"
       
      />
      <span 
        className={`
          text-[10px] md:text-xs font-medium text-gray-600 group-hover:text-blue-600
          ${true ? 'block' : 'hidden md:block'}
        `}
      >
        Me
      </span>
    </div>
    {showProfile && <div className='absolute bg-white top-[130%] right-[10%] w-[18vw] h-fit p-4 text-[0.9vw] rounded-lg shadow-lg '> 
      <div className='h-[72%]  flex flex-col mb-2'>
        <div className='h-fit flex flex-row cursor-pointer'>
          
          <img src="profile.png" alt="" className='w-[8vh] rounded-[50%] '/>
        
        <div className='text-[1.1vw] pl-2 pt-2'>
          <div className='font-bold'>{userData.user.firstName} {userData.user.lastName}</div>
          <div>{userData.user.role}</div>
           </div>
        </div>
        <div className='flex flex-row justify-between gap-1 '>
          <button  className='w-[50%] p-[2px] border-1 mt-2 rounded-[20px] hover:shadow-md hover:shadow-blue-600 text-blue-600 border-blue-500 hover:border-blue-600 focus:bg-blue-600 focus:text-white cursor-pointer hover:bg-slate-100' onClick={handleProfilePage}>View Profile</button>
          <button className='w-[50%] p-[2px] border-1 mt-2 rounded-[20px] text-blue-600 border-blue-500 hover:shadow-md hover:shadow-blue-600 focus:text-white focus:bg-blue-600  cursor-pointer hover:bg-slate-100' >Verify</button>
        </div>
      </div>
      <hr />
      
      <div className='h-[10%] pt-2'><Link className='text-red-700 hover:underline text-[1.1vw] ' onClick={handleSignOut}>Sign Out</Link></div>
      </div>}
    

          {/* For mobile - usually shows profile picture only */}
          <div className="md:hidden">
            <button className="p-1 rounded-full hover:bg-gray-100">
              <img 
                src="/profile.png" 
                alt="Profile" 
                className="w-8 h-8 rounded-full object-cover border border-gray-300"
              />
            </button>
          </div>

          {/* Premium / Work / For Business - optional */}
          {/* Uncomment if needed
          <div className="hidden lg:flex flex-col items-center text-[10px] leading-tight text-gray-500 hover:text-blue-600">
            <span className="font-bold">For Business</span>
            <span>Try Premium</span>
          </div>
          */}
        </div>
      </div>
    </nav>
  );
}

// Reusable navigation item component
function NavItem({ icon, label, to, showLabelOnMobile = true, className = "" }) {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center px-1.5 py-1 md:px-2 lg:px-3 group ${className}`}
    >
      <img
        src={icon}
        alt={label}
        className="h-6 w-6 md:h-7 md:w-7 opacity-60 group-hover:opacity-100 transition-opacity object-contain"
      />
      <span 
        className={`
          text-[10px] md:text-xs font-medium text-gray-600 group-hover:text-blue-600
          ${showLabelOnMobile ? 'block' : 'hidden md:block'}
        `}
      >
        {label}
      </span>
    </Link>
  );
}

export default Navbar;