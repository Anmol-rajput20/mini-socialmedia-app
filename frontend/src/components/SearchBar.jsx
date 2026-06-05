import React from "react";

const SearchBar = () => {
  return (
    <div style={{ display: "flex", margin: "20px 0", gap: "10px" }}>
      <input
        placeholder="Search posts, users..."
        style={{
          flex: 1,
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
        }}
      />

      <button
        style={{
          padding: "12px 20px",
          background: "#1976d2",
          color: "white",
          border: "none",
          borderRadius: "10px",
        }}
      >
        🔍
      </button>
    </div>
  );
};

export default SearchBar;