import React from "react";

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;