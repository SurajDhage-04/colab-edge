import React from 'react';
// we'll create this CSS file too

const ProfilePage = () => {
  const user = {
    name: "John Doe",
    title: "Frontend Developer",
    bio: "Passionate about building responsive web apps using React.",
    avatar: "https://i.pravatar.cc/300?img=12"
  };

  return (
    <div className="profile-container text-white flex flex-col justify-center gap-3 items-center h-screen rounded-lg shadow-lg mt-20 ml-65 p-4">
      
        <img src={user.avatar} alt="Profile" className="profile-avatar rounded-lg overflow-hidden shadow-lg shadow-black" />
        <h2>{user.name}</h2>
        <p className="profile-title">{user.title}</p>
        <p className="profile-bio">{user.bio}</p>
        <div className="profile-buttons">
          <button className="btn follow bg-[#3C3D37] font-bold rounded-lg p-2 m-2">Follow</button>
          <button className="btn message bg-[#3C3D37] font-bold rounded-lg p-2 m-2">Message</button>
        
      </div>
    </div>
  );
};

export default ProfilePage;
