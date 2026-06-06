import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  }

  const styles = {
  profileBtn: {
    padding: "8px 14px",
    borderRadius: "20px",
    border: "1px solid #1976d2",
    background: "white",
    color: "#1976d2",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.2s ease",
  }
};
  return (
    
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#fff",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>Social</h2>
      <h3>Welcome, {user?.username}</h3>

      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <div>🔔</div>
        <div>💰 50</div>
        <div
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            background: "#ccc",
          }}
        ></div>

        <Link to="/profile" style={{textDecoration:"none"}}>
           <button style={styles.profileBtn}>Profile</button>
        </Link>
        <button style={styles.profileBtn} onClick={handleLogout}> Logout </button>
      </div>
    </div>
    

  );
};

export default Header;