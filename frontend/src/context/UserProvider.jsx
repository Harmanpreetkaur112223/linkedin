import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContextData } from './AuthContext.jsx'
import axios from 'axios'

export const UserContextData = createContext()
function UserProvider({children}) {
  let [userData , setUserData] = useState(null)
  let[startPost , setStartPost] = useState(false)
  let [edit , setEdit] = useState(false)
  let [addExperience , setAddExperience] = useState(false)
  let[addEducation , setAddEducation] = useState(false)
  let[addIntro , setAddIntro] = useState(false)
  let[addAbout , setAddAbout] = useState(false)
  let[addSkills , setAddSkills] = useState(false)
  let[isUserAbout , setIsUserAbout] = useState(false)
  let[isUserIntro , setIsUserIntro] = useState(false)
  let[isUserEducation , setIsUserEducation] = useState(false)
  let[isUserSkill ,setIsUserSkill] = useState(false)
  let[isUserExperience , setIsUserExperience] = useState(false)


  const {serverUrl} = useContext(AuthContextData)
  const getUserDetails=async()=>{
      try {
        // const token = localStorage.getItem("token")
            const response = await axios.get(`${serverUrl}/api/user/me`,{withCredentials:true})
         setUserData(response.data)
         console.log(response)
        } catch (error) {
            console.log("get user details",error)
        }
    }
  useEffect(()=>{getUserDetails()
     console.log(userData)},[])
    const value = {
        userData,setUserData,startPost,setStartPost,edit,setEdit,addExperience,setAddExperience,addIntro,setAddIntro,addAbout,setAddAbout,addSkills,setAddSkills,addEducation,setAddEducation
        ,isUserAbout,setIsUserAbout,isUserIntro,setIsUserIntro,isUserEducation,setIsUserEducation,isUserSkill,setIsUserSkill,isUserExperience,setIsUserExperience
    }
  return (
    <UserContextData.Provider value = {value}>
        {children}
    </UserContextData.Provider>
  )
}

export default UserProvider