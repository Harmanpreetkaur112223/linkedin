import React from 'react'
import Navbar from './Navbar'

function EditIntro() {
  return (
    <>
    <Navbar/>
    <div className="h-screen w-screen bg-slate-100 flex items-center justify-center">
        <div className='w-[60%]  h-[80%]   bg-white flex shadow-lg shadow-gray-700 flex-col items-center  justify-center rounded-lg'>
               
            <div className='h-[10%]  w-full flex items-center text-[1.4vw] font-semibold pl-4'>Edit Intro  </div> <hr />
            <div className="h-[80%] w-[90%]  rounded-lg  overflow-auto ">
                <form action="" className="h-full w-full px-2 flex flex-col gap-8">
                    <div className='h-fit w-full '>
                        <label htmlFor="firstName" className='mb-2 text-gray-700 '>First name*</label>
                        <input type="text" id='firstName' name='firstName' className='border h-fit w-full rounded-sm p-2 hover:outline'/>
                    </div>
                    <div className='h-fit w-full '>
                        <label htmlFor="lastName" className='mb-2 text-gray-700 '>Last name*</label>
                        <input type="text" id='lastName' name='lastName' className='border h-fit w-full rounded-sm p-2 hover:outline'/>
                    </div>
                    <div className='h-fit w-full '>
                        <label htmlFor="additionalName" className='mb-2 text-gray-700 '>Additional name</label>
                        <input type="text" id='additionalName' name='additionalName' className='border h-fit w-full rounded-sm p-2 hover:outline'/>
                    </div>
                     <div className='h-fit w-full '>
                        <label htmlFor="email" className='mb-2 text-gray-700 '>email*</label>
                        <input type="email" id='email' name='email' className='border h-fit w-full rounded-sm p-2 hover:outline'/>
                    </div>
                     <div className='h-fit w-full '>
                        <label htmlFor="headline" className='mb-2 text-gray-700 '>Headline*</label>
                        <input type="text" id='headline' name='headline' className='border h-fit w-full rounded-sm p-2 hover:outline'/>
                    </div>
                     <div className='h-fit w-full '>
                        <label htmlFor="location" className='mb-2 text-gray-700 '>Location</label>
                        <input type="text" id='location' name='location' className='border h-fit w-full rounded-sm p-2 hover:outline'/>
                    </div>
                </form>
            </div>
            <hr />
            <div className='h-[10%]  w-full flex items-center justify-end pr-8 text-[1.1vw] font-semibold '>
                <button className='h-fit w-fit bg-blue-600 text-white py-2 px-4 rounded-[18px] cursor-pointer hover:bg-blue-500' >Save</button>
            </div>

        </div>
    </div>
    </>
  )
}

export default EditIntro