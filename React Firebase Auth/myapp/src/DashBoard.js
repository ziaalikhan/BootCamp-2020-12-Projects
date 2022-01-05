import React, { useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './config/firebaseConfig';
import { useNavigate } from 'react-router-dom';

function DashBoard() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    // Get The currentUser with onAuthStateChanged 
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    // Logout Function //
    const logout = async () => {
        await signOut(auth)
        navigate("/")
    }

    return (
        <div>
            This is DashBoard
            <div>
                {/* if user is not logedIn it will not diplay on the DOM */}
                <h4 className={!user ? "login" : ""}>User Email</h4>
                {/* Render The Data */}
                <p>{user?.email}</p>
                <img src={user?.photoURL} width='100px' height="100px" alt="" />
                {/* <p>{user?.providerData[0].uid}</p> */}
            </div>
            <div>
                {/* if user is not logedIn it will not diplay on the DOM */}
                <button className={!user ? "login" : "logout"} onClick={logout}>{!user ? "There is No user Login" : "Logout"}</button>
            </div>
        </div>
    )
}

export default DashBoard;
