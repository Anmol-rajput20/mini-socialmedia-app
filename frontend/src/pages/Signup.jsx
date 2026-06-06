import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await API.post("/auth/signup", {
        username,
        email,
        password,
      });

      alert("Signup successful");

      navigate("/login");
    } catch (err) {
      console.log(err);
      alert("Signup failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Signup</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "8px",
          width: "250px",
        }}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "8px",
          width: "250px",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "8px",
          width: "250px",
        }}
      />

      <button
        onClick={handleSignup}
        style={{
          padding: "10px 20px",
          marginTop: "10px",
        }}
      >
        Signup
      </button>
    </div>
  );
};

export default Signup;