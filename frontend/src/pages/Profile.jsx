import React from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile</h1>

      <h3>Username: {user?.username}</h3>
      <h3>Email: {user?.email}</h3>
    </div>
  );
};

export default Profile;