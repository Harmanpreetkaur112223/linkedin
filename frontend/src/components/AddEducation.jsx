

    import React, { useContext, useState } from 'react'
import { UserContextData } from '../context/UserProvider'
import { AuthContextData } from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];
const years = Array.from(
  { length: 30 },
  (_, i) => new Date().getFullYear() - i
);
    
    function AddEducation() {
      const[college , setCollege] = useState("")
      const[degree , setDegree] = useState("")
      const[specialization , setSpecialization] = useState("")
      const[grade , setGrade] = useState("")
     
      const[studentDescription , setStudentDescription] = useState("")
        const [startDate, setStartDate] = useState({
    month: "",
    year: ""
  });
       const [endDate, setEndDate] = useState({
    month: "",
    year: ""
  });
        let {userData , setUserData ,isUserAbout,setIsUserAbout,isUserIntro,setIsUserIntro,isUserEducation,setIsUserEducation,isUserSkill,setIsUserSkill,isUserExperience,setIsUserExperience,addEducation , setAddEducation} = useContext(UserContextData)
        
        let{serverUrl} = useContext(AuthContextData)
        let navigate = useNavigate()
        const handleCollege = (e) =>{
          setCollege(e.target.value)

        }
        const handleDegree = (e) =>{
          setDegree(e.target.value)
        }
        const handleSpecialization = (e) =>{
          setSpecialization(e.target.value)
        }
        const handleGrade = (e)=>{
          setGrade(e.target.value)
        }
        
        const handleStudentDescription = (e)=>{
          setStudentDescription(e.target.value)
        }
        const handleSubmit = async(e)=>{
          e.preventDefault()
          setIsUserEducation(true)
          try {
            let response = await axios.post(`${serverUrl}/api/user/editProfile`,{college,degree,specialization,startDate,endDate,grade ,studentDescription,isUserIntro,isUserAbout,isUserEducation,isUserExperience,isUserSkill},{withCredentials:true})
            setUserData(response.data)
            setIsUserEducation(false)
            console.log(userData)
            navigate("/profile")
          } catch (error) {
            console.log("Education added err",error)
          }

        }
      return (
        <div className='h-screen w-screen fixed top-0 left-0 z-index-[200] bg-black/20 ' >
        <div className='h-full w-full   flex items-center justify-center relative' >
            <div className='h-[80vh] w-[50vw] relative rounded-lg bg-white opacity-[2] px-2 '>
                <img src="/cut.png" alt="" className='h-[2.2vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-4 text-[1.1vw] top-[2%] rounded-[50%] ' onClick={()=>setAddEducation(false)}/> 
                 <div className='h-[10vh] w-full   pl-4 pt-4 text-[1.4vw] font-bold'>Add Education</div>
                <hr />
                <div className='h-[60vh] w-full  flex items-center justify-center py-4'>
                    <div className='h-full w-[90%]  overflow-auto py-4'>
                       <form action="" className="h-full w-full px-2 flex flex-col gap-8">
                    <div className='h-fit w-full '>
                        <label htmlFor="college" className='mb-2 text-gray-700 '>School name*</label>
                        <input type="text" id='college' name='college' value={college}  autoComplete = "off" onChange = {handleCollege} className='border h-fit w-full rounded-sm p-2 hover:outline' placeholder='Ex: Boston University'/>
                    </div>
                    <div className='h-fit w-full '>
                        <label htmlFor="degree" className='mb-2 text-gray-700 '>Degree*</label>
                        <input type="text" id='degree' name='degree' value={degree} autoComplete = "off" onChange = {handleDegree} className='border h-fit w-full rounded-sm p-2 hover:outline' placeholder="Bachelor's"/>
                    </div>
                    <div className='h-fit w-full '>
                        <label htmlFor="specialization" className='mb-2 text-gray-700 '>Field of study</label>
                        <input type="text" id='specialization' name='specialization' value={specialization}autoComplete = "off" onChange = {handleSpecialization} className='border h-fit w-full rounded-sm p-2 hover:outline' placeholder='Ex: Finance'/>
                    </div>
                     <div className='h-fit w-full '>
                         <label htmlFor="startDate" className='mb-2 text-gray-700 '>Start Date*</label>
                       <div className='h-full w-full flex flex-row items-center justify-between gap-4'>
                        
                       <select
        value={startDate.month}
        autoComplete = "off" onChange={(e) =>
          setStartDate({ ...startDate, month: e.target.value })
        }
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Month</option>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
                       
                        <select
        value={startDate.year}
        autoComplete = "off" onChange={(e) =>
          setStartDate({ ...startDate, year: e.target.value })
        }
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
                       </div>
                       
                    </div>
                      <div className='h-fit w-full '>
                         <label htmlFor="endDate" className='mb-2 text-gray-700 '>End Date*</label>
                       <div className='h-full w-full flex flex-row items-center justify-between gap-4'>
                        
                                      <select
        value={endDate.month}
        autoComplete = "off" onChange={(e) =>
          setEndDate({ ...startDate, month: e.target.value })
        }
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Month</option>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
                       
                        <select
        value={endDate.year}
        autoComplete = "off" onChange={(e) =>
          setEndDate({ ...endDate, year: e.target.value })
        }
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
                       </div>
                       
                    </div>
                     <div className='h-fit w-full '>
                        <label htmlFor="grade" className='mb-2 text-gray-700 '>Grade</label>
                        <input type="text" id='grade' name='grade' value={grade} autoComplete = "off" onChange={handleGrade} className='border h-fit w-full rounded-sm p-2 hover:outline'/>
                    </div>
                     
                     <div className='h-fit w-full flex flex-col '>
                        <label htmlFor="studentDescription" className='mb-2 text-gray-700 '>Description</label>
                        <textarea name="studentDescription" value={studentDescription} autoComplete = "off" onChange={handleStudentDescription} id="studentDescription" cols={16} className='border min-h-[10vh] rounded-lg'></textarea>
                    </div>
                </form>
                    </div>
                </div>
                <hr />
                <div className='h-[11vh] w-full flex items-center justify-end pr-8 text-[1.1vw] font-semibold'>
                <button className='h-fit w-fit bg-blue-600 text-white py-2 px-4 rounded-[18px] cursor-pointer hover:bg-blue-500'onClick={handleSubmit} >Save</button>

                </div>
            </div>
        </div>
    </div>
      )
    }
    
    export default AddEducation