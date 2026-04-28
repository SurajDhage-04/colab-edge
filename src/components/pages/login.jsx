import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({sidebar}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple hardcoded check
    if (username == "admin" && password == "Sanjay") {
      navigate("/home");
      sidebar();
      
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    
<div className="bg-[#3C3D37] text-white min-h-screen flex flex-col items-center justify-center">
    <div className="h-full p-14 flex flex-col items-center justify-center bg-white border-2 border-black rounded-lg shadow-2xl shadow-[#181C14] text-[#3C3D37]">
      <h1 className="text-2xl font-bold mb-6">Login Page</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-3 px-4 py-2 border rounded w-64 "
        
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-3 px-4 py-2 border rounded w-64 "
      />

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <div className="loginbtn flex gap-2 mt-4">

      <button
        onClick={handleLogin}
        className="bg-blue-500 text-black font-bold px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
      >
        Login
      </button>
    <button>
        <p className="bg-blue-500 text-black font-bold px-4 py-2 rounded cursor-pointer hover:bg-blue-600" onClick={() => navigate("/")}>Register</p>
    </button>
      </div>
    </div>
    </div>
  );
}
