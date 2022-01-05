import React, { useState } from "react";
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import {  useNavigate } from "react-router";

const Reset = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const handleReset = async () => {
        try {
            await sendPasswordResetEmail(
                auth,
                email
            );
            alert("Go to Your Email")
            setEmail("");
            navigate("/login")
            // setTimeout(() => {
            //     navigate("/login")
            // }, 5000);
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <div>
            <h1>Reset password</h1>
            Enter Your Email:
            <br />
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <button onClick={handleReset}>Reset password</button>
        </div>
    );
};

export default Reset;