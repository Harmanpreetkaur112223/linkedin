import React from 'react'
import { useContext } from 'react'
import { AuthContextData } from '../context/AuthContext'
import axios from 'axios'
import { useState } from 'react'

function FollowButton({recieverId}) {
    // console.log(recieverId)
    const {serverUrl} = useContext(AuthContextData)
    const [sent , setSent] = useState(false)
    const sendConnection = async()=>{
        try {
            console.log(recieverId)
            const response = await axios.post(`${serverUrl}/api/connection/send/${recieverId}`,{},{withCredentials:true})
            console.log(response)
            setSent(true)
        } catch (error) {
            console.log("Connection sent error",error)
        }
    }
  return (
      <button className="text-blue-600 font-bold cursor-pointer px-4 py-1.5 sm:py-2 rounded-lg hover:bg-blue-50 transition whitespace-nowrap text-sm sm:text-base" onClick={sendConnection}>
          {setSent ? "Request sent":"+ Follow "}
        </button>
  )
}

export default FollowButton