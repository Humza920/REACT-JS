// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Login from './Component/Login.jsx'
// import UserContext from './Context/UserContext.js'
import UserProvider from './Context/UserProvider.jsx'
import Profile from './Component/Profile.jsx'

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <Login />
    <Profile />
  </UserProvider>,
)
