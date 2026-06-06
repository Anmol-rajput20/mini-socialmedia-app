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

      alert("Account created successfully!");
      navigate("/login");
    } catch (err) {
      console.log(err);
      alert("Signup failed");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.logo}>Task Planet 🚀</h1>
        <p style={styles.subtitle}>Create your account</p>

        <input
          style={styles.input}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleSignup}>
          Sign Up
        </button>

        <p style={styles.bottomText}>
          Already have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1976d2, #64b5f6)",
    fontFamily: "Arial",
  },
  card: {
    width: "380px",
    background: "white",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  logo: {
    marginBottom: "5px",
  },
  subtitle: {
    color: "gray",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#1976d2",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  bottomText: {
    marginTop: "15px",
    fontSize: "14px",
  },
  link: {
    color: "#1976d2",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Signup;