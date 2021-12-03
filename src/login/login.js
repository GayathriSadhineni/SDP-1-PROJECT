import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"


const Login = ({setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/user")
        })
    }

    return (

        <div className='hero-container4'>

      <video className='video3'src="/videos/video-6.mp4" autoPlay loop muted/>
     <div>
        <div className="login1">
            <h1>Hey how are you!</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <p>or</p>
            <div className="button" onClick={() => history.push("/sign-up")}>Register</div>
        </div>
        </div>
        </div>
    )
}

export default Login