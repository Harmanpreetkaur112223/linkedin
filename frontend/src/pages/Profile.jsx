import React, { useContext, useRef, useState } from 'react'
import { UserContextData } from '../context/UserProvider'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import CreatePost from '../components/CreatePost'
import AddIntro from '../components/AddIntro'
import axios from 'axios'
import { AuthContextData } from '../context/AuthContext'




function Profile() {
  const {userData , setUserData , startPost , setStartPost , addIntro , setAddIntro,isUserAbout,setIsUserAbout,isUserEducation,setIsUserEducation,isUserExperience,setIsUserExperience,isUserIntro,setIsUserIntro,isUserSkill,setIsUserSkill,isProfileImage,setIsProfileImage,isCoverImage,setIsCoverImage} = useContext(UserContextData)
  const navigate = useNavigate()
  const {serverUrl} = useContext(AuthContextData)
  // console.log(" from profile userData",userData)
  let[frontEndProfileImage , setFrontEndProfileImage] = useState(userData.user?.profileImage || "profile.png" )
  let[backEndProfileImage , setBackEndProfileImage] = useState(null)

  let[frontEndCoverImage , setFrontEndCoverImage] = useState(userData.user?.coverImage || "img.jpeg" )
  let[backEndCoverImage , setBackEndCoverImage] = useState(null )

  let profileImage = useRef()
  let coverImage = useRef()
  const handleIntro = () =>{
    setAddIntro(true)
    console.log("addIntro",addIntro)
  }
  const handleCoverImage = async(e)=>{
    console.log(e.target.name)
    const file = e.target.files[0]
    setFrontEndCoverImage(URL.createObjectURL(file))
    // setBackEndCoverImage(file)
    const formData = new FormData();
  formData.append("coverImage", file);
  formData.append("isCoverImage", "true");
    for (let pair of formData.entries()) {
  console.log(pair[0], pair[1])
}
    setIsCoverImage(true)
   try {
     const response = await axios.post(`${serverUrl}/api/user/editProfile`,formData,{headers: {
          "Content-Type": "multipart/form-data", // important!
        },withCredentials:true})
     setUserData(response.data.user)
     setIsCoverImage(false)
     navigate("/profile")
   } catch (error) {
    console.log("Cover image error",error)
   }


  }
   const handleProfileImage = async(e)=>{
    console.log(e.target.name)
    const file = e.target.files[0]
    // console.log("profiklimg",file)
    setFrontEndProfileImage(URL.createObjectURL(file))
    // setBackEndProfileImage(file)
      console.log(file)

    const formData = new FormData()
    formData.append("profileImage",file)
    formData.append("isProfileImage", "true")
    console.log("formData",formData)
    setIsProfileImage(true)
    try {
      console.log("formdata inside")
      const response = await axios.post(`${serverUrl}/api/user/editProfile`,formData,{withCredentials:true,headers:{
        "Content-Type":"multipart/form-data"
      }})
      console.log(response)
      setUserData(response.data.user)
     console.log("profile img",userData)
     console.log(response)
     setIsProfileImage(false)
     navigate("/profile")
   } catch (error) {
    console.log("profile image error",error)
   }
  }
  return (
    <>
    <Navbar/>

    <div className='h-min border-1 px-[10vw] py-8 flex lg:flex-row flex-col  justify-around bg-slate-100 gap-8  '>
      <div className='w-[70%] h-full shadow-lg rounded-lg  flex flex-col'>
        <div className='w-full h-[80vh] bg-white rounded-lg mb-4 '>
          <div className='h-[40%] w-full cursor-pointer relative '>
            <img src={frontEndCoverImage} alt="" className='h-full w-full rounded-tl-lg rounded-tr-lg ' onClick={()=>coverImage.current.click()}  />
            <input type="file" name='coverImage' accept='image/*' ref={coverImage} hidden onChange={handleCoverImage}/>
             {/* <img src="camera.png" alt="" className='h-[5vh] cursor-pointer absolute right-2 top-1 rounded-[50%]' /> */}
            <img src={frontEndProfileImage} alt="" className='h-[11vw] w-[11vw] rounded-full absolute top-[50%] left-[2%] cursor-pointer' onClick={()=>profileImage.current.click()}/>

          <input type="file" accept='image/*'  name="profileImage" ref={profileImage} hidden onChange={handleProfileImage}/>
          <div className='min-h-[50%] w-full  mt-8 flex justify-between items-center relative'>
          <div className='w-[full]  h-full pl-4'>
             <img src="edit-text.png" alt="" onClick = {()=>navigate("/profile/editIntro")} className='h-[2.6vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-1 top-1 rounded-[50%]' />
            <div className='text-[1.7vw] font-bold '>{userData.user?.firstName} {userData.user?.lastName}</div>
            <div>{userData.user.role === "student"? `Student at ${ userData.user.education[0]['college']}`:`Working at ${userData.user?.recruiterProfile?.companyName}`}</div>
            <div>{userData.user?.location} <span><Link className='text-blue-500 font-semibold cursor-pointer'>Contact info</Link></span></div>
            {/* <div>{userData.user.userName}</div> */}
          </div>
          <div className='w-[50%] h-full  font-semibold text-[1.1vw]'> {userData.user.role === "student"?`Student at ${ userData.user.education[0]['college']}`:`Working at ${userData.user?.recruiterProfile?.companyName}`}</div>
          </div>
          <div className='h-[30%] w-[70%] flex flex-row gap-8 pl-4 py-1  mt-1  items-center'>
            {/* <Link className='border-1 text-blue-500 font-semibold hover:text-blue-600 hover:border-2 hover:bg-blue-100 focus:bg-blue-500 hover:border-blue-600 focus:text-white h-fit w-fit border-blue-500 text-[1vw] px-2 py-1 rounded-[15px]'>Open to</Link> */}
            <Link className='border-1 text-blue-500 font-semibold hover:text-blue-600 hover:border-2 hover:bg-blue-100 focus:bg-blue-500 hover:border-blue-600 focus:text-white h-fit w-fit border-blue-500 text-[1vw] px-2 py-1 rounded-[15px]' to="/profile/addSection">Add profile section</Link>
            {/* <Link className='border-1 text-blue-500 font-semibold hover:text-blue-600 hover:border-2 hover:bg-blue-100 focus:bg-blue-500 hover:border-blue-600 focus:text-white h-fit w-fit border-blue-500 text-[1vw] px-2 py-1 rounded-[15px]'>Enhance Profile</Link> */}
            {/* <Link className='border-1 text-blue-500 font-semibold hover:text-blue-600 hover:border-2 hover:bg-blue-100 focus:bg-blue-500 hover:border-blue-600 focus:text-white h-fit w-fit border-blue-500 text-[1vw] px-2 py-1 rounded-[15px]'>Resources</Link> */}
          </div>
          <div className='h-[35%] w-full p-1  mt-1 flex flex-row gap-2 '>
             <div className='h-full w-[50%] rounded-lg bg-blue-100 relative '>
              
               <img src="edit-text.png"  alt="" className='h-[2.6vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-2 top-[14%] rounded-[50%]' />
             </div>
             <div className='h-full w-[50%] rounded-lg shadow-sm shadow-black relative'>
               <img src="cut.png" alt="" className='h-[2.2vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-2 top-[14%] rounded-[50%]' />
             </div>

          </div>

          </div>
         
        </div>
        <div className='w-full h-[45vh] bg-white rounded-lg mb-4 p-2 flex flex-col gap-2 justify-around'>
          <div className='text-[1.5vw] font-semibold pl-4 '>Suggested for you</div>
          <div className='w-full h-min p-1  flex flex-row gap-1'>
            <img src="veye.png" alt="" className='h-[2.2vw] p-2 cursor-pointer inline-block rounded-[50%]' />
            <div className='text-[1.1vw] text-gray-800 '>Private to you</div>
          </div>
          <div className='flex lg:flex-row flex-col gap-2  justify-around h-[70%] w-full'>
             <div className='w-[45%] ml-4 shadow-sm shadow-black rounded-lg h-full mb-4 relative'>
             <img src="cut.png" alt="" className='h-[2.2vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-2 top-[6%] rounded-[50%]' />
          </div>
          <div className='w-[45%] mr-4 shadow-sm shadow-black rounded-lg h-full mb-4 relative'>
             <img src="cut.png" alt="" className='h-[2.2vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-2 top-[6%] rounded-[50%]' />
          </div>
          </div>
         

        </div>
        <div className='w-full h-[45vh] bg-white rounded-lg mb-4  pt-2 flex flex-col gap-2 justify-around'>
           <div>
            <div className='text-[1.5vw] font-semibold pl-4 '>Suggested for you</div>
          <div className='w-full h-min p-1  flex flex-row gap-1'>
            <img src="veye.png" alt="" className='h-[2.2vw] p-2 cursor-pointer inline-block rounded-[50%]' />
            <div className='text-[1.1vw] text-gray-800 '>Private to you</div>
          </div>
           </div>
           <div className='h-[50%] w-full  flex flex-row gap-2 justify-between'>
            <div className='h-full w-[33.3%]    flex justify-center items-center'>a</div>
             <div className='h-full w-[33.3%]   flex justify-center items-center '>b</div>
              <div className='h-full w-[33.3%]  flex justify-center items-center  '>c</div>
           </div>
           <div className='h-min mb-0 bg-gray-100 hover:bg-gray-200 flex cursor-pointer text-[1.1vw] font-semibold justify-center items-center pt-4 pb-2'>
            <div>
              Show all analytics
              
            </div>
            <img src="like.png" alt=""  className='h-[1.5vw] p-1'/>
           </div>
        </div>
        {userData.user.about &&  <div className='w-full h-[45vh] bg-white relative rounded-lg mb-4  pt-2 flex flex-col gap-2 justify-around'>
           <div >
            <div className='text-[1.5vw] font-semibold pl-4 '>About</div>
            <div className=" h-min flex items-center justify-center w-full  ">
              <div className="h-full w-[90%] border rounded-md py-8 text-[1.vw] font-semibold text-gray-700 px-2">{userData.user.about}</div>
               <img src="edit-text.png" alt="" className='h-[2.6vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-2 top-[5%] rounded-[50%]' onClick={()=>navigate("/profile/addSection")} />
            </div>
           </div>
           <div className='h-min mb-0 bg-gray-100 hover:bg-gray-200 flex cursor-pointer text-[1.1vw] font-semibold justify-center items-center pt-4 pb-2'>
            <div>
              Show all analytics
              
            </div>
            <img src="like.png" alt=""  className='h-[1.5vw] p-1'/>
           </div>
        </div>}
        <div className='w-full h-[30vh] bg-white rounded-lg mb-4 relative   pt-2 flex flex-col gap-2 justify-around'>
            <div>
            <div className='text-[1.5vw] font-semibold pl-4 '>Suggested for you</div>
          <div className='w-full h-min p-1  flex flex-row gap-1'>
            <img src="veye.png" alt="" className='h-[2.2vw] p-2 cursor-pointer inline-block rounded-[50%]' />
            <div className='text-[1.1vw] text-gray-800 '>Private to you</div>
          </div>
           </div>
           <div>
            You haven’t posted yet
      Posts you share will be displayed here
           </div>
           <img src="edit-text.png" alt="" className='h-[2.6vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-2 top-[14%] rounded-[50%]' />
            <Link to = "/profile" className='border-1 text-blue-500 font-semibold hover:text-blue-600 hover:border-2 hover:bg-blue-100 fhover:border-blue-600  h-fit w-fit border-blue-500 text-[1vw] px-2 py-1 rounded-[15px] absolute top-[14%] right-[50px] ' onClick={()=>setStartPost(true)}>Create Post</Link>
            {startPost && <CreatePost/>}
            <div className='h-min mb-0 bg-gray-100 hover:bg-gray-200 flex cursor-pointer text-[1.1vw] font-semibold justify-center items-center pt-4 pb-2'>
            <div>
              Show all activity
              
            </div>
            <img src="like.png" alt=""  className='h-[1.5vw] p-1'/>
           </div>
        </div>
        <div className='w-full h-[30vh] bg-white rounded-lg mb-4'></div>
        <div className='w-full h-[30vh] bg-white rounded-lg mb-4'></div>
        <div className='w-full h-[40vh] bg-white rounded-lg mb-4'></div>


      </div>
      <div className='w-[25%] h-[12vw] shadow-lg  rounded-lg  bg-white flex flex-col gap-4 py-4 px-4'>
        <div className='h-[48%] w-full relative'>
          <div className='text-[1.2vw] font-bold'>Profile Language</div>
          <div>English</div>
          <img src="edit-text.png" alt="" className='h-[2.6vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-2 top-[14%] rounded-[50%]' />
        </div>
        <hr />
        <div className='h-[48%] w-full relative '>
          <div className='text-[1.2vw] font-bold'>Public profile and URL</div>
          <img src="edit-text.png" alt="" className='h-[2.6vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-2 top-[14%] rounded-[50%]' />
        </div>
      </div>


    </div>
    </>
  )
}

export default Profile