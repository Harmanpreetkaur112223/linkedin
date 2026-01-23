import React, { createContext } from 'react'
export  const AuthContextData = createContext()
function AuthContext({children}) {
    let serverUrl = "http://localhost:3000"
    let value = {
        serverUrl
    }
  return (
    <AuthContextData.Provider value={value}>
        {children}
    </AuthContextData.Provider>
  )
}

export default AuthContext