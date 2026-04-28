import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Sidebar = () => {
    return (
        <div className='Sidebar bg-gray-700 text-white h-full w-1/6 fixed top-17 left-0 flex flex-col justify-between'>
        
            <div className="sidebar__links display flex flex-col gap-4 p-4 mt-2">
                <Link to="/profile" className='Links'>Profile</Link>
                <Link to="/home" className='Links'>Home</Link>
                <Link to="/about" className='Links'>About</Link>
                <Link to="/chat" className='Links'>Chat</Link>
                <Link to="/resources" className='Links'>Resources</Link>

            </div>
        </div>
    )
}

export default Sidebar