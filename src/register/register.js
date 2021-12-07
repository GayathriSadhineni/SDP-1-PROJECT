import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import loginbackground from "../Assets/loginbackground.jpeg";

const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if(email.includes("@"&&".")===false){
      alert("Invalid email");
    }
    
    if(password.length<8){
      alert("**Password length must be atleast 8 characters");
    }
    else if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        history.push("/loginpage");
      });
    } else {
      alert("invlid input");
    }
  };

  return (
    <div className="hero-container4">
      <img className="backgroundimage" src={loginbackground} />
      <div>
        <div className="register1">
          {console.log("User", user)}
          <h1>Looking Forward to serve you</h1>
          <input
            type="text"
            name="name"
            value={user.name}
            placeholder="Your Name"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder="Your Email"
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Your Password"
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="reEnterPassword"
            value={user.reEnterPassword}
            placeholder="Re-enter Password"
            onChange={handleChange}
          ></input>
          <div className="button" onClick={register}>
            Register
          </div>
          <p>or</p>
          <div className="button" onClick={() => history.push("/loginpage")}>
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
