import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';

function GoogleAuth() {
    const navigate = useNavigate();
    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const user = await signInWithPopup(auth, provider)
            console.log('Registered', user);
            navigate("/dashboard")
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
    )
}

export default GoogleAuth;
