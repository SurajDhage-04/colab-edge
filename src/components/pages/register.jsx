import { use, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./login";

export default function Register() {
    const [Form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });




    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [error, setError] = useState("");
    const navigate = useNavigate();


    


    const handleSubmit = (e) => {
        e.preventDefault();

        setForm({
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        });

        // const { username, email, password } = Form;

        // if (!username || !email || !password) {
        //     setError("Please fill all fields");
        //     return;
        // }

        // You could send this data to an API here
        // console.log("Registered with:", Form);
        
    console.log("Form submitted:", {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
        // Redirect to login or home
        navigate("/login");
    };

    return (
        <div className="bg-[#3C3D37] text-white min-h-screen  shadow-2xl flex flex-col items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
            >
                <h2 className="text-2xl text-black font-bold mb-6 text-center">Register</h2>

                <input type="text" placeholder="Username" ref={usernameRef} className="mb-4 px-4 py-2 text-black border border-black rounded w-full"
                />
                <input type="email" placeholder="Email" ref={emailRef} className="mb-4 px-4 py-2 text-black border border-black rounded w-full"
                />
                <input type="password" placeholder="Password" ref={passwordRef} className="mb-4 px-4 py-2 text-black border border-black rounded w-full"
                />
                {error && <p className="text-red-500 mb-3">{error}</p>}

                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 w-full rounded hover:bg-green-600"
                    onClick={() => navigate("/login")}
                >
                    Register
                </button>
                <button>
                    <Link to="/login" className="text-black  mt-4 block text-center">
                        Already have an account? Login

                    </Link>
                </button>
            </form>
            {/* {Form.map((item, index) => (
                <Login key={index} a={item}/>
            ))} */}
        </div>
    );
}
