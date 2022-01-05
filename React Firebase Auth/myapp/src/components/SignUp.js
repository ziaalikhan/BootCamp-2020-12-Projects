import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const navigate = useNavigate();
    const [registerEmail, setregisterEmail] = useState("");
    const [registerPassword, setregisterPassword] = useState("");

    const register = async () => {
        try {
            await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            alert("user Successfuly Register")
            setregisterEmail('');
            setregisterPassword('');
            navigate("/login")
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div>
            <div>
                <input placeholder="Enter Your Email" type="email" value={registerEmail} onChange={(e) => setregisterEmail(e.target.value)} /><br />
                <input type="password" value={registerPassword} onChange={(e) => setregisterPassword(e.target.value)} /><br />
                <button onClick={register}>Register</button>
            </div>
        </div>
    )
}

export default SignUp
