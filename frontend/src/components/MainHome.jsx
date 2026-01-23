import React, { useContext } from 'react'
import StartPost from './StartPost'
import Post from './Post'
import { UserContextData } from '../context/UserProvider'
import AddExperience from './AddExperience'
import AddEducation from './AddEducation'
import AddSkills from './AddSkills'
import AddAbout from './AddAbout'
import AddIntro from './AddIntro'

function MainHome() {
  const {addExperience , addEducation , addSkills , addAbout , addIntro}=useContext(UserContextData)
  return (
    <>
    <StartPost/>
    <hr className='mb-4' />
     
    <Post/>
    <Post/>

    </>
  )
}

export default MainHome