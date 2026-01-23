// import React from 'react'

// function Signup() {
//   return (
//   <div className='flex justify-center items-center h-screen w-screen'>
//      <div className='h-[90vh] w-[35vw] bg-[#2e394f] text-white rounded-lg'>
//       <div className='w-full h-fit mt-2 mb-4 p-2 flex align-center justify-center font-semibold text-[1.3vw]'> Register</div> 
//        <hr />

//       <div className='w-full h-fit mt-[40px] p-2 flex align-center justify-around font-semibold text-[1.3vw] gap-2'> 
//        <input type="text" placeholder='First Name' className='outline-none border-1  p-2 rounded-lg w-[40%] shadow-sm shadow-white text-[0.98vw]'/>
//        <input type="text" placeholder='Last Name' className='outline-none  outline-none p-2 rounded-lg w-[40%] shadow-sm shadow-white text-[0.98vw]'/>
//        </div> 
//        <div className='w-full h-fit  mt-2 p-2 flex align-center justify-around font-semibold text-[1.3vw] gap-2'> 
//        <input type="text" placeholder='First Name' className='outline-none border-1  p-2 rounded-lg w-[40%] shadow-sm shadow-white text-[0.98vw]'/>
//        <input type="text" placeholder='Last Name' className='outline-none  outline-none p-2 rounded-lg w-[40%] shadow-sm shadow-white text-[0.98vw]'/>
//        </div> 
//    </div>
//   </div>
//   )
// }

// export default Signup
import React, { useContext, useState } from 'react';
import axios from "axios"
import {Navigate, useNavigate} from "react-router-dom"
import { AuthContextData } from '../context/AuthContext';
function Signup() {
  const navigate = useNavigate()
  let {serverUrl} = useContext(AuthContextData)
  const [role, setRole] = useState(''); // '' | 'student' | 'recruiter'
  const [loading, setLoading] = useState(false)
  const [error , setError] = useState("")
  const [success , setSuccess] = useState("")
  const[showPwd , setShowPwd] = useState(false)
  const [formData , setFormData] = useState({
    firstName:"",
    lastName:"",
    userName:"",
    email:"",
    password:"",
    gender:"",
    location:"",
    studentProfile:{
      college:"",
      degree:"",
      specialization:"",
      startYear:"",
      endYear:"",
      skills:"",
      jobPreferences:"",
      accomplishments:"",
      recommendations:""
    },
     recruiterProfile:{
        companyName:"",
        recruiterRole:"",
        experience:0
    }
  })

// reset form
const resetForm = () => {
  const initialformdata = {
    firstName:"",
    lastName:"",
    userName:"",
    email:"",
    password:"",
    gender:"",
    location:"",
    studentProfile:{
      college:"",
      degree:"",
      specialization:"",
      startYear:"",
      endYear:"",
      skills:"",
      jobPreferences:"",
      accomplishments:"",
      recommendations:""
    },
     recruiterProfile:{
        companyName:"",
        recruiterRole:"",
        experience:0
    }
  }
    setFormData(initialformdata);
    setRole('');           // also reset role selection
    setSuccess('');
    setError('');
  };
  // handlers
  function handleChange(e){
    const {name , value} = e.target;
    console.log(name , value)
    setFormData({...formData,[name]:value})
    // console.log(formData)
  }

  function handleStudentChange(e){
    const {name , value} = e.target;
    console.log(name , value)
    setFormData({...formData,studentProfile:{...formData.studentProfile,[name]:value}})
    console.log(formData)
  }
   function handleRecruiterChange(e){
    const {name , value} = e.target;
    console.log(name , value)
    setFormData({...formData,recruiterProfile:{...formData.recruiterProfile,[name]:value}})
    console.log(formData)
  }

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    // Basic validation
    if (!role) {
      setError('Please select your role (Student or Recruiter)');
      setLoading(false);
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.userName || !formData.email || !formData.password || !formData.gender) {
      setError('Please fill all required fields');
      setLoading(false);
      return;
    }

    // Prepare payload according to your backend schema
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      userName: formData.userName,
      email: formData.email,
      password: formData.password,
      gender: formData.gender,
      location: formData.location || undefined,
      role: role
    };

    if (role === 'student') {
      payload.college = formData.studentProfile.college || undefined;
      payload.degree = formData.studentProfile.degree || undefined;
      payload.specialization = formData.studentProfile.specialization || undefined;
      payload.startYear = formData.studentProfile.startYear ? Number(formData.studentProfile.startYear) : undefined;
      payload.endYear = formData.studentProfile.endYear ? Number(formData.studentProfile.endYear) : undefined;
      payload.skills = formData.studentProfile.skills ? formData.studentProfile.skills.split(',').map(s => s.trim()) : undefined;
      payload.jobPreferences = formData.studentProfile.jobPreferences || undefined;
      payload.accomplishments = formData.studentProfile.accomplishments || undefined;
      payload.recommendations = formData.studentProfile.recommendations || undefined;
    } else if (role === 'recruiter') {
      payload.companyName = formData.recruiterProfile.companyName || undefined;
      payload.recruiterRole = formData.recruiterProfile.recruiterRole || undefined;
      payload.experience = formData.recruiterProfile.experience ? Number(formData.recruiterProfile.experience) : 0;
    }

    try {
      const response = await axios.post(
        `${serverUrl}/api/auth/signup`, // ← change to your real endpoint
        payload,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials:true
                  }
      );

      setSuccess('Registration successful! You can now sign in.');
      // Optional: reset form or redirect
      // setFormData({... initial state ...})
      // window.location.href = '/login'
      <Navigate to = "/"/>
      console.log('Success:', response.data);
    } catch (err) {
      const {message} = err.response?.data
      setError(message)
      // console.error('Signup error:', message);
    } finally {
       resetForm()
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 p-6">
      {/* Card – LinkedIn-inspired professional look */}
      <div
        className={`
          w-full max-w-lg 
          bg-white/5 backdrop-blur-2xl 
          border border-white/10 rounded-2xl 
          shadow-2xl overflow-hidden
          transition-all duration-500
        `}
      >
        {/* Header */}
        <div className="px-10 pt-10 pb-6 text-center">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Join your professional community
          </h1>
          <p className="mt-3 text-gray-300 text-sm">
            Make the most of your professional life
          </p>
        </div>
         
        {/* Form */}
        <form className="px-10 pb-10 space-y-6" onSubmit={handleSubmit}>
          {/* Name row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <input autoComplete='off'
                type="text"
                id="firstName"
                className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300"
                placeholder="First Name"
                required
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
              />
              <label
                htmlFor="firstName"
                className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 pointer-events-none"
              >
                First Name
              </label>
            </div>

            <div className="relative">
              <input autoComplete='off'
                type="text"
                id="lastName"
                className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300"
                placeholder="Last Name"
                required
                 name='lastName'
                value={formData.lastName}
                onChange={handleChange}
              />
              <label
                htmlFor="lastName"
                className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 pointer-events-none"
              >
                Last Name
              </label>
            </div>
          </div>

          {/* Username */}
          <div className="relative">
            <input autoComplete='off'
              type="text"
              id="userName"
              className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300"
              placeholder="Username"
              required
               name='userName'
                value={formData.userName}
                onChange={handleChange}
            />
            <label
              htmlFor="userName"
              className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 pointer-events-none"
            >
              Username
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input autoComplete='off'
              type="email"
              id="email"
              className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300"
              placeholder="Email"
              required
               name='email'
                value={formData.email}
                onChange={handleChange}
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 pointer-events-none"
            >
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input autoComplete='off'
              type={showPwd ? "text":"password"}
              id="password"
              className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300"
              placeholder="Password"
              required
               name='password'
                value={formData.password}
                onChange={handleChange}
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 pointer-events-none"
            >
              Password
            </label>
              <div onClick={()=>setShowPwd(showPwd=>!showPwd)} className= "cursor-pointer text-blue-300 text-[1.1vw] absolute right-4 bottom-5">{showPwd ? "Hide": "show"}</div>
          </div>

    
<div className="relative">
  <select
    id="gender"
    required
     name='gender'
                value={formData.gender}
                onChange={handleChange}
    className={`
      w-full px-4 pt-6 pb-2 pr-10
      bg-white/5 backdrop-blur-sm
      border border-white/20 rounded-lg
      text-white text-base
      focus:outline-none focus:border-blue-400 
      focus:ring-2 focus:ring-blue-500/30
      transition-all duration-300
      appearance-none
      cursor-pointer
      /* Force all option text to be white with dark background */
      [&>option]:bg-gray-800 [&>option]:text-white
      [&>option:checked]:bg-blue-600 [&>option:checked]:text-white
      [&>option:hover]:bg-blue-700
    `}
  >
    <option value="" disabled>
      
    </option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Prefer not to say</option>
  </select>

  {/* Floating Label */}
  <label
    htmlFor="gender"
    className={`
      absolute left-4 top-4 text-gray-400 text-sm
      transition-all duration-300 pointer-events-none
      peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300
      /* When value is selected (not empty) */
      peer-[:not([value=""])]:top-2 peer-[:not([value=""])]:text-xs 
      peer-[:not([value=""])]:text-blue-300
    `}
  >
    Gender
  </label>

  {/* Custom Clean Arrow */}
  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
    <svg
      className="w-5 h-5 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>

          {/* Location (optional) */}
          <div className="relative">
            <input autoComplete='off'
              type="text"
              id="location"
              className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300"
              placeholder="Location (optional)"
               name='location'
                value={formData.location}
                onChange={handleChange}
            />
            <label
              htmlFor="location"
              className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 pointer-events-none"
            >
              Location (City, Country)
            </label>
          </div>

          {/* Role selector – big buttons like LinkedIn style choice */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <button
              type="button"
              onClick={() => setRole('student')}
              className={`
                py-4 px-6 rounded-xl border-2 font-medium text-center transition-all duration-300
                ${role === 'student'
                  ? 'border-blue-500 bg-blue-600/20 text-white shadow-lg shadow-blue-500/20'
                  : 'border-white/20 text-gray-300 hover:border-blue-400/50 hover:bg-white/5'}
              `}
            >
              I'm a Student / Job Seeker
            </button>

            <button
              type="button"
              onClick={() => setRole('recruiter')}
              className={`
                py-4 px-6 rounded-xl border-2 font-medium text-center transition-all duration-300
                ${role === 'recruiter'
                  ? 'border-blue-500 bg-blue-600/20 text-white shadow-lg shadow-blue-500/20'
                  : 'border-white/20 text-gray-300 hover:border-blue-400/50 hover:bg-white/5'}
              `}
            >
              I'm a Recruiter / Hiring
            </button>
          </div>

          {/* Conditional Student fields */}
          {role === 'student' && (
            <div className="space-y-6 pt-4 border-t border-white/10">
              <h3 className="text-lg font-semibold text-white">Education & Preferences</h3>

              <div className="relative">
                <input autoComplete='off' type="text" id="college" className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300" placeholder="College / University"  value={formData.studentProfile.college} onChange={handleStudentChange} name="college"/>
                <label htmlFor="college" className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 pointer-events-none">College / University</label>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input autoComplete='off' type="text" id="degree" className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300" placeholder="Degree" value={formData.studentProfile.degree} onChange={handleStudentChange} name='degree' />
                  <label htmlFor="degree" className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 pointer-events-none">Degree</label>
                </div>
                <div className="relative">
                  <input autoComplete='off' type="text" id="specialization" className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300" placeholder="Specialization"  value={formData.studentProfile.specialization} onChange={handleStudentChange} name='specialization'/>
                  <label htmlFor="specialization" className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 pointer-events-none">Specialization</label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input autoComplete='off' type="number" id="startYear" placeholder="Start Year" className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300"  value = {formData.studentProfile.startYear} onChange={handleStudentChange} name='startYear'/>
                  <label htmlFor="startYear" className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 pointer-events-none">Start Year</label>
                </div>
                <div className="relative">
                  <input autoComplete='off' type="number" id="endYear" placeholder="End Year (or expected)" className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300"  value={formData.studentProfile.endYear} onChange={handleStudentChange} name='endYear'/>
                  <label htmlFor="endYear" className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 pointer-events-none">End Year</label>
                </div>
              </div>

              {/* You can later turn this into multi-select chips for skills */}
              <div className="relative">
                <input autoComplete='off' type="text" id="skills" placeholder="Skills (comma separated)" className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300" value={formData.studentProfile.skills} onChange={handleStudentChange} name='skills' />
                <label htmlFor="skills" className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 pointer-events-none">Skills</label>
              </div>

              <div className="relative">
                <textarea id="jobPreferences" rows={2} className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300" placeholder="Job Preferences" value={formData.studentProfile.jobPreferences} onChange={handleStudentChange} name="jobPreferences"></textarea>
                <label htmlFor="jobPreferences" className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 pointer-events-none" >Job Preferences</label>
              </div>
            </div>
          )}

          {/* Conditional Recruiter fields */}
          {role === 'recruiter' && (
            <div className="space-y-6 pt-4 border-t border-white/10">
              <h3 className="text-lg font-semibold text-white">Company & Role</h3>

              <div className="relative">
                <input autoComplete='off' type="text" id="companyName" className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300" placeholder="Company Name" name='companyName' value={formData.recruiterProfile.companyName} onChange={handleRecruiterChange} />
                <label htmlFor="companyName" className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 pointer-events-none">Company Name</label>
              </div>

              <div className="relative">
                <input autoComplete='off' type="text" id="recruiterRole" className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300" placeholder="Your Role / Title" name='recruiterRole' value={formData.recruiterProfile.recruiterRole} onChange={handleRecruiterChange}/>
                <label htmlFor="recruiterRole" className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 pointer-events-none">Your Role</label>
              </div>

              <div className="relative">
               <div className="relative">
  <input
    type="number"
    id="experience"
    autoComplete='off'
    name="experience"
    // Important: convert to string for controlled input (React expects string for value)
    value={formData.recruiterProfile.experience ?? ""}   // use ?? to handle undefined → ""
    onChange={handleRecruiterChange}
    placeholder="Years of Experience"
    min="0"
    step="1"
    className="peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300"
  />
  <label
    htmlFor="experience"
    className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300 pointer-events-none"
  >
    Experience (years)
  </label>
</div>
              </div>
            </div>
          )}

          {/* Submit – only enabled when role is selected */}
          <button
            type="submit"
            disabled={!role || loading}
           
            className={`
              w-full py-3.5 px-4 mt-6 rounded-lg font-medium text-lg
              bg-blue-600 hover:bg-blue-700 text-white
              shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40
              transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600 disabled:transform-none
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900
              transition-all duration-300
            `}
          >
            {loading ? "creating... account":" Join now"}
          </button>
               {error && <div className="px-10 text-red-400 text-center text-sm mt-2 mb-4">{error}</div>}
        {success && <div className="px-10 text-green-400 text-center text-sm mt-2 mb-4">{success}</div>}
          <p className="text-center text-sm text-gray-400 mt-6" onClick={()=>navigate("/login")}>
            Already on our platform?{' '}
            <span href="#" className="text-blue-400 hover:text-blue-300 font-medium cursor-pointer transition-colors">
              Sign in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;