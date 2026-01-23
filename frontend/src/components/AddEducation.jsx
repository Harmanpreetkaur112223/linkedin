

    import React, { useContext } from 'react'
import { UserContextData } from '../context/UserProvider'
    
    function AddEducation() {
        let {setEducation , setAddEducation} = useContext(UserContextData)
      return (
        <div className='h-screen w-screen fixed top-0 left-0 z-index-[200] bg-black/20'>
        <div className='h-full w-full   flex items-center justify-center relative'>
            <div className='h-[80vh] w-[50vw] relative rounded-lg bg-white opacity-[2] p-4 overflow-auto'>
                <img src="cut.png" alt="" className='h-[2.2vw] p-2 hover:bg-slate-100 cursor-pointer absolute right-4 text-[1.1vw] top-[2%] rounded-[50%] ' onClick={()=>setAddEducation(false)}/> 
                
            </div>
        </div>
    </div>
      )
    }
    
    export default AddEducation