// src/components/Login.js
import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";

import Image from "./Image";
import './auth.css'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    // Simulate authentication (replace this with actual authentication logic)
    const user = { email, password };
    
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      user.email === storedUser.email &&
      user.password === storedUser.password
    ) {
      alert("Login successful!");
      navigate('/dashboard');
    } else {
      alert("Invalid email or password");
    }
  };

  return (

    <div className="container">
 <Image/>
        <div>
      <h2>Login</h2>
      <form>
        <label>
          
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>
        <br />
        <label>
         
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            
          />
        </label>
        <br />
        <button className="auth-button" type="button" onClick={handleLogin}>
          Login
        </button>
        <p>
          Dont have an account? <Link to="/signup" style={{color:"#EC5209"}}>Signup</Link>
        </p>
      </form>

      </div>
    </div>
   
  );
};

export default Login;
