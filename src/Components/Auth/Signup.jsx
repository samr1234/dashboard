// src/components/Signup.js
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Image from "./Image";
import "./auth.css";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
  const handleSignup = () => {
    // Validate password length
    if (password.length !== 8) {
      alert("Password must be 8 characters long");
      return;
    }

    // Save user data in local storage (replace this with actual backend/API call)
    const newUser = { email, password };
    localStorage.setItem("user", JSON.stringify(newUser));

    alert("Signup successful! Now you can login.");
    navigate('/login')
  };

  return (
    <div className="container">
      <Image />
      <div>
        <form>
          <h2>Sign up</h2>
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
          <button className="auth-button" type="button" onClick={handleSignup}>
            Sign up
          </button>
          <p>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#EC5209" }}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
