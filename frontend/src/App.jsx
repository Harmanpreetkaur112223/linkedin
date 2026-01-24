import React from 'react'
import Signup from './pages/Signup'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { useContext } from 'react'
import { UserContextData } from './context/UserProvider'
import Profile from './pages/Profile'
import AddExperience from './components/AddExperience'
import AddIntro from './components/AddIntro'
import Network from './pages/Network'
import Jobs from './pages/Jobs'
import Notification from './pages/Notification'
import EditIntro from './components/EditIntro'
function App() {
  const {userData , setUserdata} = useContext(UserContextData)
  return (
  <>
   
   <Routes>
    <Route path='/' element={userData?<Home/>:<Navigate to ="/login"/>}/>
    <Route path='/signup' element={userData?<Navigate to="/"/>:<Signup/>}/>
     <Route path='/login' element={userData?<Navigate to="/"/>:<Login/>}/>
     
     <Route path='/profile' element={userData?<Profile/>:<Navigate to ="/login"/>}/>
     <Route path='/profile/addSection' element={userData?<AddIntro/>:<Navigate to ="/login"/>}/>
     <Route path='/profile/editIntro' element={userData?<EditIntro/>:<Navigate to ="/login"/>}/>
     <Route path='/addExperience' element={<AddExperience/>}/>

     {/* <Route path='/addExperience' element={userData?<AddExperience/>:<Navigate to ="/login"/>}/> */}
    <Route path = "/network" element={userData?<Network/>:<Navigate to ="/login"/>}/>
    <Route path = "/jobs" element={userData?<Jobs/>:<Navigate to ="/login"/>}/>
    <Route path = "/notifications" element={userData?<Notification/>:<Navigate to ="/login"/>}/>


   </Routes>
  </>
  )
}

export default App