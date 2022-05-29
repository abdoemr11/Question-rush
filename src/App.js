import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Login } from './components/Login';
import { AddQuestion } from './components/AddQuestion';
import { Questions } from './components/Questions';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const logoutUser = () => {
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      

    })
  }
  return (
    <Router>
      <Link to="/">Home page</Link>
      {
        !isAuth ? <Link to="/login">Login</Link>
        : <button onClick={logoutUser}>Log out</button>
      }
      
      <Link to="/addquestion">Add Question</Link>

      <Routes>
        <Route path="/" element={<Questions/>}/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>

        <Route path="/addquestion" element={<AddQuestion auth={auth}/>}/>
          
    

      </Routes>
    </Router>
  );
}

export default App;
