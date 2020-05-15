import React from "react";

const logout = ({ handleLogout }) => {
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default logout;
