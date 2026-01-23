

    import React, { useContext } from 'react'
import { UserContextData } from '../context/UserProvider'
    
    function AddAbout() {
        const {addAbout , setAddAbout} = useContext(UserContextData)
      return (
         <div className='h-screen w-screen fixed top-0 left-0 z-index-[200] bg-black/20'>
        <div className='h-full w-full   flex items-center justify-center '>
            <div className='h-[80vh] w-[50vw] relative rounded-lg bg-white opacity-[2] p-4 flex flex-col  '>
                <div className='h-[20px] w-[20px] cursor-pointer  rounded-lg absolute top-4 right-4'>
                <img src="/cut.png" alt="" className=' ' onClick={()=>setAddAbout(false)} />        
                </div>
                <div className='h-[10vh] w-full   pl-4 pt-4 text-[1.4vw] font-bold'>Edit About</div>
                <hr />
                <div className='h-[60vh] w-full  flex items-center justify-center '>
                    <div className='h-full w-[90%]  overflow-auto py-4'>
                        <form action=""><textarea name="about" id="about" cols="auto" className='h-[50vh] py-4 px-8 text-[1.3vw] text-gray-600 w-full border rounded-lg' placeholder='write anything about your experiences...'></textarea></form>
                    </div>
                </div>
                <hr />
                <div className='h-[10vh] w-full flex items-center justify-end pr-8 text-[1.1vw] font-semibold'>
                <button className='h-fit w-fit bg-blue-600 text-white py-2 px-4 rounded-[18px] cursor-pointer hover:bg-blue-500' >Save</button>

                </div>

            </div>
        </div>
    </div>
      )
    }
    
    export default AddAbout