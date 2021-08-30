import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import './register.css'

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false)
        try {
            const res = await axios.post("auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className="register">
            <form className="registerForm" onSubmit={handleSubmit}>
                <span className="registerTitle">Register</span>
                <label>Username</label>
                <input 
                    type="text" 
                    placeholder="Enter your username..." 
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Email</label>
                <input 
                    type="text" 
                    placeholder="Enter your email..." 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input 
                    type="password" 
                    placeholder="Enter your password..." 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login"> Login</Link>
            </button>
            {error && <span style={{color:"red", marginTop:10, fontSize:20}}>Something went Wrong!</span>}
        </div>
    )
}
