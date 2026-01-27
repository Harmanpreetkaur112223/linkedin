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
  const {addExperience , addEducation , addSkills , addAbout , addIntro,posts}=useContext(UserContextData)
  console.log("posts",posts)
  // posts.map(v=>console.log(v))
  return (
    <>
    <StartPost/>
    <hr className='mb-4' />
     
    {posts && <> 
    {posts.map((val,idx)=>
    <Post key={idx} user={val.user} description={val.description} postImage={val.postImage} likes={val.likes} comments={val.comments} />
    )}
    </>}

    </>
  )
}

export default MainHome