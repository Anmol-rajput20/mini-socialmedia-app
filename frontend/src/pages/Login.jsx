import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      // store user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful!");
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Invalid credentials");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.logo}>TaskPlanet 🚀</h1>
        <p style={styles.subtitle}>Welcome back</p>

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

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>

        <p style={styles.bottomText}>
          Don't have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/signup")}>
            Sign Up
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

export default Login;