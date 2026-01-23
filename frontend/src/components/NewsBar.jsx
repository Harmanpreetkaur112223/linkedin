import React from 'react'
import News from './News'

function NewsBar() {
  return (
    <div className='h-max w-full  shadow-md  rounded-lg p-2 '>
      <div className="h-max p-2 w-full flex justify-between items-center">
        <div className='text-[1.3vw] font-bold '>Linkedin News <div className='text-[1vw] font-semibold text-gray-700'>Top stories</div></div>
        <img src="i.png" alt="" className='h-[5vh] p-2 cursor-pointer' />
      </div>
      <News/>
      <News/>
      <News/>

    </div>
  )
}

export default NewsBar