import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AuthContext from './context/AuthContext.jsx'
import UserProvider from './context/UserProvider.jsx'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <UserProvider>
        <BrowserRouter>
          <App />
      </BrowserRouter>
      </UserProvider>
      </AuthContext>
  </StrictMode>,
)
