import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
import Chat from './components/Chat'
import Resources from './components/Resources'
import Login from './components/pages/login'
import Register from './components/pages/register'
import './App.css'


const App = () => {

  

  const [sidebaropen, setsidebaropen] = useState(false)

  const toggleSidebar = () => {
    setsidebaropen(!sidebaropen)
  }
  
  

  return (
    <>
      {sidebaropen && <Sidebar /> 
      }
      {sidebaropen && <Navbar sidebar={toggleSidebar}/>}
      {/* <Navbar />
      <Sidebar /> */}
      
      
      {/* <Home /> */}
      <Routes>
        <Route path="login" element={<Login sidebar={toggleSidebar}/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/" element={<Register />} />
        <Route path="/chat" element={<Chat />} />

      
        
       
      </Routes>
    </>
   
  )
}

export default App