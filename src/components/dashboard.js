import React, { useContext } from "react";
import AuthContext from "../hooks/AuthContext";

// Components
import Header from "./Header";

const dashboard = ({ user, handleLogout }) => {
  return (
    <AuthContext.Provider value={user}>
      <div>
        dashboard
        {user.username}
        <Header handleLogout={handleLogout} />
      </div>
    </AuthContext.Provider>
  );
};

export default dashboard;
