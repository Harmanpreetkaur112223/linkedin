import React, { useState } from 'react'
import Grow from './Grow'
import Navbar from '../components/Navbar'
import NetworkOverview from '../components/NetworkOverview'
import NetworkRight from '../components/NetworkRight'

function Network() {
 
  return (
    // <div><Grow/></div>
    <>
    <Navbar/>
    <div className='h-fit w-screen  p-4 bg-slate-100'>
      <div className='h-full w-[100%] border-1 flex  justify-center  '>
        <div className='h-fit w-fit p-8  flex gap-8 justify-center'>
        <NetworkOverview/>
        <NetworkRight/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Network