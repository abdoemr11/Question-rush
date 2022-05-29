import { auth,provider } from "../firebase-config"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"
export const Login = ({setIsAuth}) => {
    const navigate = useNavigate();
    const login_with_google = () =>{
        signInWithPopup(auth, provider)
            .then((result)=>{
                setIsAuth(true);
                localStorage.setItem("isAuth", true);
                navigate('/');
            })
    }
    return(
        <div className="LoginPath">
            <button onClick={login_with_google}>Login with google</button>
        </div>
    )

    
}