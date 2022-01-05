import './App.css';
import {useState , useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import DashBoard from './DashBoard';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebaseConfig';
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

useEffect(() => {
  if(!user) {
    navigate("/dashboard")
  }else {
    navigate("/")
  }
}, [])

  return (
    <div className="App">
      <h2>FireBase Authentication </h2>
      <Routes>
        <Route path='/' element={!user ? <Home /> : <DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>

    </div>
  );
}

export default App;
