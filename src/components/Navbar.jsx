import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'

const Navbar = ({sidebar}) => {


    const navigate = useNavigate()
    const handleLogout = () => {
        // Perform logout logic here (e.g., clear tokens, redirect to login page)
        navigate('/')
        sidebar();
    }

    return (
        <>
            <div className="navbar flex justify-between items-center p-4  bg-gray-800 text-white w-full fixed top-0 left-0 z-10 shadow-lg">
                <div className="navbar__logo">
                    <h1 className='logo bg-[#181C14] rounded-sm p-1 ml-10'>CollabEdge</h1>

                </div>
                <div className="navbar__links display flex gap-4">
                    <Link to="/home" className='Linkn'>Home</Link>
                    <Link to="/about" className='Linkn'>About</Link>
                    <button onClick={handleLogout} className='btn border-2 border-black p-[2px] rounded-lg'>Logout</button>
                </div>
                
            </div>
            
        </>
    )
}

export default Navbar