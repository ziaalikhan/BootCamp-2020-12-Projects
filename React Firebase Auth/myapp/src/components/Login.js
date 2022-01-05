import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import GoogleAuth from './GoogleAuth/GoogleAuth';

function Login() {
    const navigate = useNavigate();
    const [loginEmail, setloginEmail] = useState("");
    const [loginPassword, setloginPassword] = useState("");

    const login = async () => {
        try {
            await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            alert("user Successfuly Login")
            setloginEmail("");
            setloginPassword("");
            navigate("/dashboard")
        } catch (error) {
            alert(error.message);
        }

    }

    const resetPass = () => {
        navigate("/resetpassword")
    }
    return (
        <div>
            <div >
                <input placeholder="Enter Your Email" type="email" value={loginEmail} onChange={(e) => setloginEmail(e.target.value)} /><br />
                <input placeholder="Enter You Password" type="password" value={loginPassword} onChange={(e) => setloginPassword(e.target.value)} /><br />
                <button onClick={login}>Login</button><br />
                <br />
                <GoogleAuth />
                <br />
                <button onClick={resetPass}>Reset Password</button>
            </div>

        </div>
    )
}

export default Login
