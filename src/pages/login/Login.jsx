import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";
import { useRef } from "react";
import './login.css'
import axios from "axios";

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START"});
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };

    console.log(isFetching);
    return (
        <div className="login">
            <form className="loginForm" onSubmit={handleSubmit}>
                <span className="loginTitle">Login</span>
                <label>Username</label>
                <input 
                    type="text" 
                    placeholder="Enter your username..."
                    ref={userRef}
                />
                <label>Password</label>
                <input 
                    type="password" 
                    placeholder="Enter your password..."
                    ref={passwordRef}
                />
                <button className="loginButton" type="submit" disabled={isFetching}>
                    Login
                </button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register"> Register</Link>
            </button>
        </div>
    )
}
