import React from 'react'
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            Home Page <br />
            <Link to="/signup"> signUp</Link><br />
            <Link to="/login"> Login</Link><br />
            <Link to="/resetpassword"> ResetPassword</Link>
        </div>
    )
}

export default Home
