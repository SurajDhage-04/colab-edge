import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <>
    <div className="home-container flex flex-row justify-between gap-5 items-center h-screen bg-[#181C14]">
    <div className="home p-6 mt-20 ml-65 flex flex-col justify-center items-center h-screen w-200 rounded-lg shadow-lg  text-white ">  
      <h1 className="text-2xl font-semibold mb-4">Welcome to CollabEdge</h1>
      
      <p className="mb-4">
        CollabEdge is a simple and effective platform built to help individuals and teams collaborate on projects, share ideas, and grow together.
      </p>
      
      <p className="mb-4">
        Whether you're a student working on a group assignment, a developer contributing to a side project, or a team managing a remote workflow, 
        CollabEdge makes it easier to stay connected and productive.
      </p>
      
      <p className="mb-4">
        Create projects, invite others, manage tasks, and communicate — all from one central place. 
        CollabEdge helps simplify collaboration so you can focus on what matters: building great things together.
      </p>
      
      <p>
        Start using CollabEdge today and experience a smooth, focused way to collaborate.
      </p>
    </div>
    <div className="img">
      <img src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?cs=srgb&dl=pexels-pixabay-301920.jpg&fm=jpg" alt="image" className='img h-100 rounded-sm shadow-lg shadow-black relative right-5 mt-20' />
    </div>
    </div>
    </> 
  );
};

export default Home;
