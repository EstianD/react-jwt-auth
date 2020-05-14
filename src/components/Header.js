import React, { useContext } from "react";
import AuthContext from "../hooks/AuthContext";

const Header = ({ handleLogout }) => {
  const user = useContext(AuthContext);

  return (
    <div>
      Hello {user.username}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;
